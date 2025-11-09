import React, { useState } from "react";
import "./BlogPage.css";

const dummyPosts = [
  {
    title: "Looking Back on the Journey of Peacebuilding",
    author: "Shan Sma",
    date: "Dec 18, 2024",
    readTime: "5-min read",
    link: "#",
    type: "Perspective",
  },
  {
    title: "Empowering Youth Through Community Projects",
    author: "Shania Kohli",
    date: "Jan 4, 2025",
    readTime: "4-min read",
    link: "#",
    type: "Collaborations",
  },
  {
    title: "Building Harmony Across Borders",
    author: "JC Cabrera Santibanez",
    date: "Feb 12, 2025",
    readTime: "6-min read",
    link: "#",
    type: "Conferences",
  },
  {
    title: "Peace in Practice: Grassroots Stories",
    author: "Yashvi Anand Jasani",
    date: "Feb 24, 2025",
    readTime: "4-min read",
    link: "#",
    type: "Perspective",
  },
  {
    title: "Local Projects Making Global Change",
    author: "Cristian Holguin",
    date: "Mar 10, 2025",
    readTime: "5-min read",
    link: "#",
    type: "Collaborations",
  },
];

function BlogPage() {
  const [selectedType, setSelectedType] = useState("All");
  const [page, setPage] = useState(1);
  const postsPerPage = 3;

  const filteredPosts =
    selectedType === "All"
      ? dummyPosts
      : dummyPosts.filter((p) => p.type === selectedType);

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
        {displayedPosts.map((post, i) => (
          <a key={i} href={post.link} className="blog-card">
            <div className="blog-type">{post.type}</div>
            <h2>{post.title}</h2>
            <p className="meta">
              {post.date} • {post.author} • {post.readTime}
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
