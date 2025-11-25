# CMS Update System Guide

## Overview

The Pono Pono Peace Initiative CMS now includes a comprehensive update management system that can effectively push updates, manage multiple posts, track changes, and maintain version history.

## Features

✅ **Update Queue Management** - Handles multiple concurrent updates safely
✅ **Version Control** - Tracks all changes with rollback capability
✅ **Change Detection** - Automatically detects modifications
✅ **Batch Updates** - Update multiple posts simultaneously
✅ **Retry Logic** - Automatically retries failed updates (up to 3 times)
✅ **Event Notifications** - Real-time update status via listeners
✅ **Validation** - Ensures data integrity before pushing updates
✅ **React Integration** - Custom hook for easy component integration

---

## Quick Start

### 1. Basic Usage (JavaScript)

```javascript
import { pushUpdate } from '../data/updateManager';

// Create a new post
const updateId = pushUpdate.create({
  id: 6,
  title: "New Peace Initiative",
  author: "John Doe",
  date: "2025-04-15",
  readTime: "5-min read",
  link: "#",
  type: "Perspective",
  status: "published"
});

// Update an existing post
pushUpdate.update(1, {
  title: "Updated Title",
  author: "Jane Smith"
});

// Delete a post
pushUpdate.delete(3);

// Publish a draft
pushUpdate.publish(2);
```

### 2. React Component Usage

```javascript
import React from 'react';
import { useCMSUpdates } from '../hooks/useCMSUpdates';

function AdminPanel() {
  const {
    createPost,
    updatePost,
    deletePost,
    publishPost,
    isProcessing,
    hasQueuedUpdates,
    updateStatus,
    lastError
  } = useCMSUpdates();

  const handleCreatePost = () => {
    const result = createPost({
      id: 7,
      title: "Community Peace Event",
      author: "Sarah Johnson",
      date: "2025-05-20",
      readTime: "6-min read",
      type: "Conferences",
      status: "draft"
    });

    if (result.success) {
      console.log('Post created successfully!');
    } else {
      console.error('Failed to create post:', result.error);
    }
  };

  const handleUpdatePost = () => {
    updatePost(1, {
      title: "Updated Peace Initiative Title"
    });
  };

  return (
    <div>
      <h2>CMS Admin Panel</h2>

      {isProcessing && <p>Processing updates...</p>}
      {hasQueuedUpdates && <p>Updates in queue: {updateStatus.queueLength}</p>}
      {lastError && <p>Error: {lastError.error.message}</p>}

      <button onClick={handleCreatePost}>Create New Post</button>
      <button onClick={handleUpdatePost}>Update Post</button>
    </div>
  );
}
```

---

## API Reference

### pushUpdate API

#### Create Post
```javascript
pushUpdate.create(postData)
```

**Parameters:**
- `postData` (Object) - Post data with all required fields

**Returns:** Update ID (string)

**Example:**
```javascript
const updateId = pushUpdate.create({
  id: 10,
  title: "Building Peace Communities",
  author: "Maria Garcia",
  date: "2025-06-01",
  readTime: "7-min read",
  link: "#",
  type: "Collaborations",
  status: "published",
});
```

#### Update Post
```javascript
pushUpdate.update(postId, updates)
```

**Parameters:**
- `postId` (number) - ID of the post to update
- `updates` (Object) - Fields to update

**Returns:** Update ID (string)

**Example:**
```javascript
pushUpdate.update(5, {
  title: "New Title",
  author: "Updated Author",
  status: "published"
});
```

#### Delete Post
```javascript
pushUpdate.delete(postId)
```

**Parameters:**
- `postId` (number) - ID of the post to delete

**Returns:** Update ID (string)

#### Batch Updates
```javascript
pushUpdate.batch(operations)
```

**Parameters:**
- `operations` (Array) - Array of operation objects

**Example:**
```javascript
pushUpdate.batch([
  { type: 'create', data: { id: 8, title: "Post 1", ... } },
  { type: 'update', postId: 2, data: { title: "Updated" } },
  { type: 'delete', postId: 4 }
]);
```

#### Publish/Unpublish/Archive
```javascript
pushUpdate.publish(postId)     // Set status to 'published'
pushUpdate.unpublish(postId)   // Set status to 'draft'
pushUpdate.archive(postId)     // Set status to 'archived'
```

#### Rollback
```javascript
pushUpdate.rollback(postId, versionNumber)
```

**Example:**
```javascript
// Rollback post 3 to version 2
pushUpdate.rollback(3, 2);
```

#### Status & History
```javascript
const status = pushUpdate.status();
// Returns: { queueLength, processing, historyLength, ... }

const history = pushUpdate.history(20);
// Returns: Last 20 update operations
```

---

## Version Control

### Get Version History
```javascript
import { versionControl } from '../data/updateManager';

const versions = versionControl.getVersions(postId);
// Returns array of all versions for the post
```

### Get Specific Version
```javascript
const version = versionControl.getVersion(postId, 3);
// Returns version 3 of the post
```

### Compare Versions
```javascript
const changes = versionControl.getChanges(postId, 1, 3);
// Returns differences between version 1 and 3
```

**Example Output:**
```javascript
{
  title: {
    from: "Old Title",
    to: "New Title"
  },
  author: {
    from: "John Doe",
    to: "Jane Smith"
  }
}
```

---

## Change Detection

### Detect Changes
```javascript
import { changeDetector } from '../data/updateManager';

// Take initial snapshot
changeDetector.takeSnapshot(postId, originalPost);

// Later, detect what changed
const changes = changeDetector.detectChanges(postId, modifiedPost);

console.log(changes);
// {
//   hasChanges: true,
//   isNew: false,
//   changes: { title: { old: "...", new: "..." } },
//   changedFields: ["title"]
// }
```

---

## Event Listeners

Subscribe to update events for real-time notifications:

```javascript
const handleUpdate = (event, data) => {
  switch (event) {
    case 'queue_updated':
      console.log('Queue updated:', data.queue.length);
      break;
    case 'processing_started':
      console.log('Started processing updates');
      break;
    case 'update_completed':
      console.log('Update completed:', data.item);
      break;
    case 'update_failed':
      console.error('Update failed:', data.error);
      break;
    case 'processing_completed':
      console.log('All updates processed');
      break;
  }
};

// Subscribe
pushUpdate.subscribe(handleUpdate);

// Unsubscribe when done
pushUpdate.unsubscribe(handleUpdate);
```

---

## Advanced Use Cases

### 1. Publishing Multiple Posts Simultaneously

```javascript
// Create 5 new posts at once
const newPosts = [
  { id: 11, title: "Post 1", author: "Author 1", ... },
  { id: 12, title: "Post 2", author: "Author 2", ... },
  { id: 13, title: "Post 3", author: "Author 3", ... },
  { id: 14, title: "Post 4", author: "Author 4", ... },
  { id: 15, title: "Post 5", author: "Author 5", ... },
];

const operations = newPosts.map(post => ({
  type: 'create',
  data: post
}));

pushUpdate.batch(operations);
```

### 2. Update with Rollback on Failure

```javascript
// Save current version before risky update
const currentPost = blogPosts.find(p => p.id === 5);
versionControl.saveVersion(5, currentPost, 'update');

// Attempt update
const result = pushUpdate.update(5, {
  title: "New Experimental Title"
});

// If something goes wrong, rollback
if (needsRollback) {
  pushUpdate.rollback(5, versionControl.getVersions(5).length - 1);
}
```

### 3. Scheduled Publishing

```javascript
// Schedule post to be published at specific time
const schedulePublish = (postId, publishDate) => {
  const delay = new Date(publishDate) - new Date();

  setTimeout(() => {
    pushUpdate.publish(postId);
  }, delay);
};

schedulePublish(7, "2025-12-25T00:00:00Z");
```

### 4. Conditional Updates with Validation

```javascript
import { validatePost } from '../data/blogPosts';

const updateWithValidation = (postId, updates) => {
  const currentPost = blogPosts.find(p => p.id === postId);
  const updatedPost = { ...currentPost, ...updates };

  const validation = validatePost(updatedPost);

  if (!validation.isValid) {
    console.error('Validation errors:', validation.errors);
    return { success: false, errors: validation.errors };
  }

  const updateId = pushUpdate.update(postId, updates);
  return { success: true, updateId };
};
```

---

## Error Handling

The update system includes automatic retry logic with exponential backoff:

```javascript
// Updates are automatically retried up to 3 times
// Monitor retry attempts via event listeners

pushUpdate.subscribe((event, data) => {
  if (event === 'update_retrying') {
    console.log(`Retry attempt ${data.item.retries} for update ${data.item.id}`);
  }

  if (event === 'update_failed') {
    console.error(`Update ${data.item.id} failed after ${data.item.retries} retries`);
    console.error('Error:', data.error.message);
  }
});
```

---

## Best Practices

1. **Always Validate** - Use `validatePost()` before creating/updating posts
2. **Use Batch Updates** - For multiple operations, use `pushUpdate.batch()` for better performance
3. **Monitor Events** - Subscribe to update events for real-time feedback
4. **Version Everything** - The system automatically versions updates, but you can manually save snapshots before critical changes
5. **Handle Errors** - Always check return values and subscribe to error events
6. **Unique IDs** - Ensure each post has a unique ID to prevent conflicts
7. **Use React Hook** - In React components, use `useCMSUpdates()` for cleaner code

---

## System Architecture

```
┌─────────────────────────────────────────────────┐
│           React Components                       │
│  (Use useCMSUpdates hook)                       │
└─────────────────┬───────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│           pushUpdate API                         │
│  (High-level update interface)                  │
└─────────────────┬───────────────────────────────┘
                  │
        ┌─────────┴─────────┬──────────────┐
        ▼                   ▼              ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ UpdateQueue  │  │VersionControl│  │ChangeDetector│
│              │  │              │  │              │
│ - Queue      │  │ - Versions   │  │ - Snapshots  │
│ - Retry      │  │ - Rollback   │  │ - Diff       │
│ - Events     │  │ - Compare    │  │ - Track      │
└──────┬───────┘  └──────────────┘  └──────────────┘
       │
       ▼
┌─────────────────────────────────────────────────┐
│           blogPosts Data Store                   │
│  (Centralized post storage)                     │
└─────────────────────────────────────────────────┘
```

---

## Future Enhancements

The current system is designed to support future additions:

- 🔄 **API Integration** - Connect to backend REST/GraphQL API
- 📡 **Real-time Sync** - WebSocket support for live updates
- 💾 **Persistent Storage** - LocalStorage or IndexedDB caching
- 🔐 **Authentication** - User permissions and access control
- 📊 **Analytics** - Track update patterns and performance
- 🔔 **Notifications** - Push notifications for update events
- 🌐 **Multi-language** - i18n support for global content

---

## Troubleshooting

### Updates Not Processing

**Check queue status:**
```javascript
const status = pushUpdate.status();
console.log(status);
```

**Force queue processing:**
```javascript
import { updateQueue } from '../data/updateManager';
updateQueue.processQueue();
```

### Version History Not Saving

**Verify version control is working:**
```javascript
import { versionControl } from '../data/updateManager';
console.log(versionControl.getStats());
```

### Changes Not Detected

**Reset change detector:**
```javascript
import { changeDetector } from '../data/updateManager';
changeDetector.clearSnapshots();
// Take fresh snapshots
blogPosts.forEach(post => {
  changeDetector.takeSnapshot(post.id, post);
});
```

---

## Support

For questions or issues with the CMS update system, please check:

1. This documentation
2. Code comments in `updateManager.js`
3. Example usage in `useCMSUpdates.js`
4. GitHub issues at https://github.com/skohli182/PonoPonoPeaceInitiative/issues

---

**Last Updated:** November 25, 2025
**Version:** 1.0.0
