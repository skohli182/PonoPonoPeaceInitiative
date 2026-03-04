import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "./BlogDetail.css";

function BlogDetail() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        async function fetchPost() {
            const { data, error } = await supabase
                .from("posts")
                .select("*")
                .eq("url_name", slug)
                .single()

            if (error){
                console.error("Error fetching post: ", error);
            } else {
                setPost(data);
            }
        }

        fetchPost()
    }, [slug]);

    if (!post) return <div>Loading...</div>

    return (
        <section className="blog-detail">
            <div className="blog-detail-container">
                {post.cover_image_url && (
                    <img src={post.cover_image_url} alt={post.title} className="blog-detail-image"/>
                )}

                <h1>{post.title}</h1>

                <div className="blog-category">{post.genre}</div>

                <p className="blog-meta">
                    {new Date(post.created_at).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                    })}{" "}
                    • {post.author} • {post.read_time}-min read
                </p>

                <div className="blog-content">
                    {post.content}
                </div>
            </div>
        </section>
    );
}

export default BlogDetail;