import React, { useState } from "react";
import "./BlogPage.css";
import { getPostsByType, formatDate } from "../data/blogPosts";

function BlogPage() {
  const [selectedType, setSelectedType] = useState("All");
  const [page, setPage] = useState(1);
  const postsPerPage = 3;

  // Get filtered and sorted posts using centralized data management
  const filteredPosts = getPostsByType(selectedType);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const start = (page - 1) * postsPerPage;
  const displayedPosts = filteredPosts.slice(start, start + postsPerPage);

  return (
    <section className="blog-page">
      <div className="blog-header">
        <h1>News & Blogs</h1>
        <select
          className="filter-select"
          value={selectedType}
          onChange={(e) => {
            setSelectedType(e.target.value);
            setPage(1);
          }}
        >
          <option value="All">All</option>
          <option value="Perspective">Perspective</option>
          <option value="Collaborations">Collaborations</option>
          <option value="Conferences">Conferences</option>
        </select>
      </div>

      <div className="blog-list">
        {displayedPosts.map((post) => (
          <a key={post.id} href={post.link} className="blog-card">
            <div className="blog-type">{post.type}</div>
            <h2>{post.title}</h2>
            <p className="meta">
              {formatDate(post.date)} • {post.author} • {post.readTime}
            </p>
          </a>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
        {page < totalPages && (
          <button onClick={() => setPage(page + 1)}>&gt;</button>
        )}
      </div>
    </section>
  );
}

export default BlogPage;
