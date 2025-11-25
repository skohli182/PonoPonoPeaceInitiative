// Centralized blog post data management
// This file manages all blog posts with support for multiple simultaneous publications

export const blogPosts = [
  {
    id: 1,
    title: "Looking Back on the Journey of Peacebuilding",
    author: "Shan Sma",
    date: "2024-12-18",
    readTime: "5-min read",
    link: "#",
    type: "Perspective",
    status: "published",
    createdAt: "2024-12-18T10:00:00Z",
    updatedAt: "2024-12-18T10:00:00Z",
  },
  {
    id: 2,
    title: "Empowering Youth Through Community Projects",
    author: "Shania Kohli",
    date: "2025-01-04",
    readTime: "4-min read",
    link: "#",
    type: "Collaborations",
    status: "published",
    createdAt: "2025-01-04T10:00:00Z",
    updatedAt: "2025-01-04T10:00:00Z",
  },
  {
    id: 3,
    title: "Building Harmony Across Borders",
    author: "JC Cabrera Santibanez",
    date: "2025-02-12",
    readTime: "6-min read",
    link: "#",
    type: "Conferences",
    status: "published",
    createdAt: "2025-02-12T10:00:00Z",
    updatedAt: "2025-02-12T10:00:00Z",
  },
  {
    id: 4,
    title: "Peace in Practice: Grassroots Stories",
    author: "Yashvi Anand Jasani",
    date: "2025-02-24",
    readTime: "4-min read",
    link: "#",
    type: "Perspective",
    status: "published",
    createdAt: "2025-02-24T10:00:00Z",
    updatedAt: "2025-02-24T10:00:00Z",
  },
  {
    id: 5,
    title: "Local Projects Making Global Change",
    author: "Cristian Holguin",
    date: "2025-03-10",
    readTime: "5-min read",
    link: "#",
    type: "Collaborations",
    status: "published",
    createdAt: "2025-03-10T10:00:00Z",
    updatedAt: "2025-03-10T10:00:00Z",
  },
];

// Post validation function to ensure data consistency
export const validatePost = (post) => {
  const errors = [];

  if (!post.id || typeof post.id !== 'number') {
    errors.push('Post must have a valid numeric ID');
  }

  if (!post.title || post.title.trim().length === 0) {
    errors.push('Post title is required');
  }

  if (!post.author || post.author.trim().length === 0) {
    errors.push('Post author is required');
  }

  if (!post.date || !isValidDate(post.date)) {
    errors.push('Post must have a valid date in YYYY-MM-DD format');
  }

  if (!post.type || !['Perspective', 'Collaborations', 'Conferences'].includes(post.type)) {
    errors.push('Post type must be one of: Perspective, Collaborations, Conferences');
  }

  if (!post.status || !['draft', 'published', 'archived'].includes(post.status)) {
    errors.push('Post status must be one of: draft, published, archived');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Helper function to validate date format
const isValidDate = (dateString) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) return false;

  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
};

// Get all published posts sorted by date (newest first)
export const getPublishedPosts = () => {
  return blogPosts
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

// Get posts by type
export const getPostsByType = (type) => {
  const posts = getPublishedPosts();
  return type === 'All' ? posts : posts.filter(post => post.type === type);
};

// Format date for display
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

// Get post by ID
export const getPostById = (id) => {
  return blogPosts.find(post => post.id === id);
};

// Add new post (for future CMS functionality)
export const addPost = (newPost) => {
  const validation = validatePost(newPost);

  if (!validation.isValid) {
    throw new Error(`Invalid post data: ${validation.errors.join(', ')}`);
  }

  // Check for duplicate IDs
  if (blogPosts.some(post => post.id === newPost.id)) {
    throw new Error(`Post with ID ${newPost.id} already exists`);
  }

  const timestamp = new Date().toISOString();
  const post = {
    ...newPost,
    createdAt: timestamp,
    updatedAt: timestamp,
  };

  blogPosts.push(post);
  return post;
};

// Update existing post (for future CMS functionality)
export const updatePost = (id, updates) => {
  const postIndex = blogPosts.findIndex(post => post.id === id);

  if (postIndex === -1) {
    throw new Error(`Post with ID ${id} not found`);
  }

  const updatedPost = {
    ...blogPosts[postIndex],
    ...updates,
    id: blogPosts[postIndex].id, // Prevent ID modification
    updatedAt: new Date().toISOString(),
  };

  const validation = validatePost(updatedPost);

  if (!validation.isValid) {
    throw new Error(`Invalid post data: ${validation.errors.join(', ')}`);
  }

  blogPosts[postIndex] = updatedPost;
  return updatedPost;
};

// Delete post (for future CMS functionality)
export const deletePost = (id) => {
  const postIndex = blogPosts.findIndex(post => post.id === id);

  if (postIndex === -1) {
    throw new Error(`Post with ID ${id} not found`);
  }

  const deletedPost = blogPosts.splice(postIndex, 1)[0];
  return deletedPost;
};

// Get post statistics
export const getPostStats = () => {
  return {
    total: blogPosts.length,
    published: blogPosts.filter(p => p.status === 'published').length,
    draft: blogPosts.filter(p => p.status === 'draft').length,
    archived: blogPosts.filter(p => p.status === 'archived').length,
    byType: {
      Perspective: blogPosts.filter(p => p.type === 'Perspective').length,
      Collaborations: blogPosts.filter(p => p.type === 'Collaborations').length,
      Conferences: blogPosts.filter(p => p.type === 'Conferences').length,
    },
  };
};
