// React Hook for CMS Updates
// Provides easy integration of update management in React components

import { useState, useEffect, useCallback } from 'react';
import {
  pushUpdate,
  updateQueue,
  versionControl,
  changeDetector
} from '../data/updateManager';

/**
 * Custom hook for managing CMS updates in React components
 *
 * @returns {Object} Update management functions and state
 */
export const useCMSUpdates = () => {
  const [updateStatus, setUpdateStatus] = useState({
    queueLength: 0,
    processing: false,
    lastUpdate: null,
    lastError: null,
  });

  const [updateHistory, setUpdateHistory] = useState([]);

  // Subscribe to update events
  useEffect(() => {
    const handleUpdateEvent = (event, data) => {
      switch (event) {
        case 'queue_updated':
          setUpdateStatus(prev => ({
            ...prev,
            queueLength: data.queue.length,
          }));
          break;

        case 'processing_started':
          setUpdateStatus(prev => ({
            ...prev,
            processing: true,
          }));
          break;

        case 'processing_completed':
          setUpdateStatus(prev => ({
            ...prev,
            processing: false,
            queueLength: 0,
          }));
          setUpdateHistory(data.history);
          break;

        case 'update_completed':
          setUpdateStatus(prev => ({
            ...prev,
            lastUpdate: data.item,
            lastError: null,
          }));
          break;

        case 'update_failed':
          setUpdateStatus(prev => ({
            ...prev,
            lastError: {
              item: data.item,
              error: data.error,
            },
          }));
          break;

        default:
          break;
      }
    };

    pushUpdate.subscribe(handleUpdateEvent);

    // Cleanup
    return () => {
      pushUpdate.unsubscribe(handleUpdateEvent);
    };
  }, []);

  // Create new post
  const createPost = useCallback((postData) => {
    try {
      const updateId = pushUpdate.create(postData);
      return { success: true, updateId };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }, []);

  // Update existing post
  const updatePost = useCallback((postId, updates) => {
    try {
      const updateId = pushUpdate.update(postId, updates);
      return { success: true, updateId };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }, []);

  // Delete post
  const deletePost = useCallback((postId) => {
    try {
      const updateId = pushUpdate.delete(postId);
      return { success: true, updateId };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }, []);

  // Publish draft post
  const publishPost = useCallback((postId) => {
    try {
      const updateId = pushUpdate.publish(postId);
      return { success: true, updateId };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }, []);

  // Unpublish post
  const unpublishPost = useCallback((postId) => {
    try {
      const updateId = pushUpdate.unpublish(postId);
      return { success: true, updateId };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }, []);

  // Archive post
  const archivePost = useCallback((postId) => {
    try {
      const updateId = pushUpdate.archive(postId);
      return { success: true, updateId };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }, []);

  // Batch update multiple posts
  const batchUpdate = useCallback((operations) => {
    try {
      const updateId = pushUpdate.batch(operations);
      return { success: true, updateId };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }, []);

  // Rollback to previous version
  const rollbackPost = useCallback((postId, versionNumber) => {
    try {
      const updateId = pushUpdate.rollback(postId, versionNumber);
      return { success: true, updateId };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }, []);

  // Get version history for a post
  const getVersionHistory = useCallback((postId) => {
    return versionControl.getVersions(postId);
  }, []);

  // Get changes between versions
  const getVersionChanges = useCallback((postId, fromVersion, toVersion) => {
    try {
      return versionControl.getChanges(postId, fromVersion, toVersion);
    } catch (error) {
      return { error: error.message };
    }
  }, []);

  // Detect changes in a post
  const detectPostChanges = useCallback((postId, currentData) => {
    return changeDetector.detectChanges(postId, currentData);
  }, []);

  return {
    // State
    updateStatus,
    updateHistory,
    isProcessing: updateStatus.processing,
    hasQueuedUpdates: updateStatus.queueLength > 0,
    lastError: updateStatus.lastError,

    // CRUD Operations
    createPost,
    updatePost,
    deletePost,

    // Publishing Operations
    publishPost,
    unpublishPost,
    archivePost,

    // Batch Operations
    batchUpdate,

    // Version Control
    rollbackPost,
    getVersionHistory,
    getVersionChanges,

    // Change Detection
    detectPostChanges,

    // Status
    getStatus: pushUpdate.status,
    getHistory: pushUpdate.history,
  };
};

export default useCMSUpdates;
