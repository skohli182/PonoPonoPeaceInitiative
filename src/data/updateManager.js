// CMS Update Manager
// Handles pushing updates, change tracking, versioning, and synchronization

import { blogPosts, validatePost } from './blogPosts';

// Update queue for managing multiple concurrent updates
class UpdateQueue {
  constructor() {
    this.queue = [];
    this.processing = false;
    this.history = [];
    this.listeners = [];
  }

  // Add update to queue
  enqueue(update) {
    const queueItem = {
      id: this.generateUpdateId(),
      update,
      status: 'pending',
      timestamp: new Date().toISOString(),
      retries: 0,
      maxRetries: 3,
    };

    this.queue.push(queueItem);
    this.notifyListeners('queue_updated', { queue: this.queue });

    // Auto-process if not already processing
    if (!this.processing) {
      this.processQueue();
    }

    return queueItem.id;
  }

  // Process all queued updates
  async processQueue() {
    if (this.processing || this.queue.length === 0) {
      return;
    }

    this.processing = true;
    this.notifyListeners('processing_started', { queue: this.queue });

    while (this.queue.length > 0) {
      const item = this.queue[0];

      try {
        await this.executeUpdate(item);
        item.status = 'completed';
        this.history.push({ ...item, completedAt: new Date().toISOString() });
        this.queue.shift();
        this.notifyListeners('update_completed', { item });
      } catch (error) {
        item.retries++;

        if (item.retries >= item.maxRetries) {
          item.status = 'failed';
          item.error = error.message;
          this.history.push({ ...item, failedAt: new Date().toISOString() });
          this.queue.shift();
          this.notifyListeners('update_failed', { item, error });
        } else {
          item.status = 'retrying';
          this.notifyListeners('update_retrying', { item, error });
          // Move to end of queue for retry
          this.queue.push(this.queue.shift());
        }
      }
    }

    this.processing = false;
    this.notifyListeners('processing_completed', { history: this.history });
  }

  // Execute a single update
  async executeUpdate(item) {
    const { update } = item;

    switch (update.type) {
      case 'create':
        return await this.createPost(update.data);
      case 'update':
        return await this.updatePost(update.postId, update.data);
      case 'delete':
        return await this.deletePost(update.postId);
      case 'batch':
        return await this.batchUpdate(update.operations);
      default:
        throw new Error(`Unknown update type: ${update.type}`);
    }
  }

  // Create new post
  async createPost(postData) {
    const validation = validatePost(postData);

    if (!validation.isValid) {
      throw new Error(`Validation failed: ${validation.errors.join(', ')}`);
    }

    // Check for duplicate ID
    if (blogPosts.some(p => p.id === postData.id)) {
      throw new Error(`Post with ID ${postData.id} already exists`);
    }

    blogPosts.push(postData);
    return postData;
  }

  // Update existing post
  async updatePost(postId, updates) {
    const postIndex = blogPosts.findIndex(p => p.id === postId);

    if (postIndex === -1) {
      throw new Error(`Post with ID ${postId} not found`);
    }

    const updatedPost = {
      ...blogPosts[postIndex],
      ...updates,
      id: blogPosts[postIndex].id, // Prevent ID modification
      updatedAt: new Date().toISOString(),
    };

    const validation = validatePost(updatedPost);

    if (!validation.isValid) {
      throw new Error(`Validation failed: ${validation.errors.join(', ')}`);
    }

    blogPosts[postIndex] = updatedPost;
    return updatedPost;
  }

  // Delete post
  async deletePost(postId) {
    const postIndex = blogPosts.findIndex(p => p.id === postId);

    if (postIndex === -1) {
      throw new Error(`Post with ID ${postId} not found`);
    }

    const deletedPost = blogPosts.splice(postIndex, 1)[0];
    return deletedPost;
  }

  // Batch update multiple posts
  async batchUpdate(operations) {
    const results = [];
    const errors = [];

    for (const op of operations) {
      try {
        let result;
        switch (op.type) {
          case 'create':
            result = await this.createPost(op.data);
            break;
          case 'update':
            result = await this.updatePost(op.postId, op.data);
            break;
          case 'delete':
            result = await this.deletePost(op.postId);
            break;
          default:
            throw new Error(`Unknown operation type: ${op.type}`);
        }
        results.push({ success: true, operation: op, result });
      } catch (error) {
        errors.push({ success: false, operation: op, error: error.message });
      }
    }

    if (errors.length > 0) {
      throw new Error(`Batch update completed with ${errors.length} errors: ${JSON.stringify(errors)}`);
    }

    return results;
  }

  // Generate unique update ID
  generateUpdateId() {
    return `update_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Register listener for update events
  addListener(callback) {
    this.listeners.push(callback);
  }

  // Remove listener
  removeListener(callback) {
    this.listeners = this.listeners.filter(l => l !== callback);
  }

  // Notify all listeners
  notifyListeners(event, data) {
    this.listeners.forEach(listener => {
      try {
        listener(event, data);
      } catch (error) {
        console.error('Error in update listener:', error);
      }
    });
  }

  // Get queue status
  getStatus() {
    return {
      queueLength: this.queue.length,
      processing: this.processing,
      historyLength: this.history.length,
      pendingUpdates: this.queue.filter(i => i.status === 'pending').length,
      failedUpdates: this.history.filter(i => i.status === 'failed').length,
      completedUpdates: this.history.filter(i => i.status === 'completed').length,
    };
  }

  // Clear completed history
  clearHistory() {
    this.history = [];
    this.notifyListeners('history_cleared', {});
  }

  // Get update history
  getHistory(limit = 50) {
    return this.history.slice(-limit);
  }
}

// Version control for posts
class VersionControl {
  constructor() {
    this.versions = new Map(); // postId -> versions array
  }

  // Save version snapshot
  saveVersion(postId, postData, changeType = 'update') {
    if (!this.versions.has(postId)) {
      this.versions.set(postId, []);
    }

    const versions = this.versions.get(postId);
    const version = {
      versionNumber: versions.length + 1,
      timestamp: new Date().toISOString(),
      data: JSON.parse(JSON.stringify(postData)), // Deep copy
      changeType, // 'create', 'update', 'delete'
    };

    versions.push(version);

    // Keep only last 20 versions to prevent memory bloat
    if (versions.length > 20) {
      versions.shift();
    }

    return version.versionNumber;
  }

  // Get all versions for a post
  getVersions(postId) {
    return this.versions.get(postId) || [];
  }

  // Get specific version
  getVersion(postId, versionNumber) {
    const versions = this.versions.get(postId);
    if (!versions) return null;

    return versions.find(v => v.versionNumber === versionNumber);
  }

  // Get latest version
  getLatestVersion(postId) {
    const versions = this.versions.get(postId);
    if (!versions || versions.length === 0) return null;

    return versions[versions.length - 1];
  }

  // Rollback to specific version
  rollback(postId, versionNumber) {
    const version = this.getVersion(postId, versionNumber);
    if (!version) {
      throw new Error(`Version ${versionNumber} not found for post ${postId}`);
    }

    return JSON.parse(JSON.stringify(version.data)); // Return deep copy
  }

  // Get changes between versions
  getChanges(postId, fromVersion, toVersion) {
    const from = this.getVersion(postId, fromVersion);
    const to = this.getVersion(postId, toVersion);

    if (!from || !to) {
      throw new Error('One or both versions not found');
    }

    const changes = {};
    const allKeys = new Set([...Object.keys(from.data), ...Object.keys(to.data)]);

    allKeys.forEach(key => {
      if (JSON.stringify(from.data[key]) !== JSON.stringify(to.data[key])) {
        changes[key] = {
          from: from.data[key],
          to: to.data[key],
        };
      }
    });

    return changes;
  }

  // Clear version history for a post
  clearVersions(postId) {
    this.versions.delete(postId);
  }

  // Get version statistics
  getStats() {
    const stats = {
      totalPosts: this.versions.size,
      totalVersions: 0,
      averageVersionsPerPost: 0,
    };

    this.versions.forEach(versions => {
      stats.totalVersions += versions.length;
    });

    if (stats.totalPosts > 0) {
      stats.averageVersionsPerPost = (stats.totalVersions / stats.totalPosts).toFixed(2);
    }

    return stats;
  }
}

// Change detection system
class ChangeDetector {
  constructor() {
    this.snapshots = new Map(); // postId -> last known state
  }

  // Take snapshot of current state
  takeSnapshot(postId, postData) {
    this.snapshots.set(postId, JSON.parse(JSON.stringify(postData)));
  }

  // Detect changes since last snapshot
  detectChanges(postId, currentData) {
    const snapshot = this.snapshots.get(postId);

    if (!snapshot) {
      return {
        hasChanges: true,
        isNew: true,
        changes: {},
      };
    }

    const changes = {};
    let hasChanges = false;

    const allKeys = new Set([...Object.keys(snapshot), ...Object.keys(currentData)]);

    allKeys.forEach(key => {
      if (JSON.stringify(snapshot[key]) !== JSON.stringify(currentData[key])) {
        hasChanges = true;
        changes[key] = {
          old: snapshot[key],
          new: currentData[key],
        };
      }
    });

    return {
      hasChanges,
      isNew: false,
      changes,
      changedFields: Object.keys(changes),
    };
  }

  // Update snapshot after changes are confirmed
  updateSnapshot(postId, postData) {
    this.takeSnapshot(postId, postData);
  }

  // Get all posts with changes
  getAllChanges(currentPosts) {
    const allChanges = {};

    currentPosts.forEach(post => {
      const changeInfo = this.detectChanges(post.id, post);
      if (changeInfo.hasChanges) {
        allChanges[post.id] = changeInfo;
      }
    });

    return allChanges;
  }

  // Clear all snapshots
  clearSnapshots() {
    this.snapshots.clear();
  }
}

// Singleton instances
export const updateQueue = new UpdateQueue();
export const versionControl = new VersionControl();
export const changeDetector = new ChangeDetector();

// High-level API for pushing updates
export const pushUpdate = {
  // Create new post
  create: (postData) => {
    return updateQueue.enqueue({
      type: 'create',
      data: {
        ...postData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });
  },

  // Update existing post
  update: (postId, updates) => {
    // Take snapshot before update
    const currentPost = blogPosts.find(p => p.id === postId);
    if (currentPost) {
      versionControl.saveVersion(postId, currentPost, 'update');
    }

    return updateQueue.enqueue({
      type: 'update',
      postId,
      data: updates,
    });
  },

  // Delete post
  delete: (postId) => {
    // Save final version before deletion
    const currentPost = blogPosts.find(p => p.id === postId);
    if (currentPost) {
      versionControl.saveVersion(postId, currentPost, 'delete');
    }

    return updateQueue.enqueue({
      type: 'delete',
      postId,
    });
  },

  // Batch updates
  batch: (operations) => {
    return updateQueue.enqueue({
      type: 'batch',
      operations,
    });
  },

  // Publish draft post
  publish: (postId) => {
    return updateQueue.enqueue({
      type: 'update',
      postId,
      data: { status: 'published', updatedAt: new Date().toISOString() },
    });
  },

  // Unpublish post (set to draft)
  unpublish: (postId) => {
    return updateQueue.enqueue({
      type: 'update',
      postId,
      data: { status: 'draft', updatedAt: new Date().toISOString() },
    });
  },

  // Archive post
  archive: (postId) => {
    return updateQueue.enqueue({
      type: 'update',
      postId,
      data: { status: 'archived', updatedAt: new Date().toISOString() },
    });
  },

  // Rollback to previous version
  rollback: (postId, versionNumber) => {
    const versionData = versionControl.rollback(postId, versionNumber);

    return updateQueue.enqueue({
      type: 'update',
      postId,
      data: versionData,
    });
  },

  // Get update status
  status: () => updateQueue.getStatus(),

  // Get update history
  history: (limit) => updateQueue.getHistory(limit),

  // Subscribe to update events
  subscribe: (callback) => updateQueue.addListener(callback),

  // Unsubscribe from update events
  unsubscribe: (callback) => updateQueue.removeListener(callback),
};

// Export for advanced usage
export { UpdateQueue, VersionControl, ChangeDetector };
