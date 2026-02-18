import React, { useState, useEffect } from "react";
import "./BlogPage.css";
import { supabase } from "../supabaseClient";


function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const [page, setPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      if(error){
        console.error("Error fetching posts:", error);
      } else {
        console.log("Fetched posts:", data);
        setPosts(data);
      }
    }

    fetchPosts();
  }, [])

  const filteredPosts =
    selectedType === "All"
      ? posts
      : posts.filter((p) => p.genre == selectedType);

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
          <a key={post.id} href={`/blog/${post.url_name}`} className="blog-card">
            <div className="blog-type">{post.genre}</div>
            <h2>{post.title}</h2>
            <p className="meta">
              {new Date(post.created_at).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}{" "}
              • {post.author} • {post.read_time}-min read
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
