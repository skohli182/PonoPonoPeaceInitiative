/**
 * ProjectPage.jsx
 * ----------------------------------
 * Displays all projects in a responsive grid.
 *
 * Features:
 * - Fetches data from Supabase
 * - Animated cards (Intersection Observer)
 * - Expandable project view (3-panel layout)
 * - CTA section linking to Donate page
 */

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // 🔥 Used for navigation
import "./ProjectPage.css";
import { supabase } from "../supabaseClient";

/**
 * Centralized theme colors
 * Keeps styling consistent across components
 */
const theme = {
  card: "#DFCEB9",
  maroon: "#193D40",
};

/* =======================================================
   EXPANDED PROJECT VIEW (Full-width layout)
======================================================= */
function ProjectExpandedRow({ project, onCollapse }) {
  const { title, longDesc, shortDesc, featuredImage, status } = project;

  const isOngoing = status === "Ongoing";

  return (
    <article className="card-row-expanded relative">

      {/* Close Button */}
      <button className="card-close" onClick={onCollapse}>
        X
      </button>

      {/* LEFT PANEL (Title + Icon) */}
      <div
        className={`card-panel-left ${
          isOngoing ? "text-amber-100" : "text-zinc-900"
        }`}
        style={{
          backgroundColor: isOngoing ? theme.maroon : theme.card,
        }}
      >
        {/* Project Icon */}
        <div className="project-icon mb-6 border border-black/10">
          {featuredImage ? (
            <img src={featuredImage} alt={title} />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-sm font-semibold bg-black/10">
              {title.charAt(0)}
            </div>
          )}
        </div>

        {/* Project Title */}
        <div className="text-2xl font-semibold">{title}</div>
      </div>

      {/* MIDDLE PANEL (Description) */}
      <div className="card-panel-middle text-sm text-zinc-900">
        <p>{longDesc || shortDesc}</p>
      </div>

      {/* RIGHT PANEL (Image) */}
      <div className="card-panel-right bg-white">
        {featuredImage ? (
          <img
            src={featuredImage}
            alt={title}
            className="project-flyer"
          />
        ) : (
          <div className="rounded-3xl border w-full h-40 flex items-center justify-center">
            No Image
          </div>
        )}
      </div>
    </article>
  );
}

/* =======================================================
   MAIN PROJECT PAGE
======================================================= */
export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [expandedProject, setExpandedProject] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const refs = useRef([]);

  /**
   * Fetch projects from Supabase on page load
   */
  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("id");

      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        setProjects(data);
      }
    }

    fetchProjects();
  }, []);

  /**
   * Intersection Observer
   * Adds animation when cards enter viewport
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-show");
            setHasAnimated(true);
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [projects]);

  /**
   * If a card is clicked → show expanded view
   */
  if (expandedProject) {
    return (
      <main className="min-h-screen bg-[#FFFCF6] text-zinc-900">
        <div className="max-w-6xl mx-auto px-6 py-10 space-y-12">
          <ProjectExpandedRow
            project={expandedProject}
            onCollapse={() => setExpandedProject(null)}
          />
        </div>
      </main>
    );
  }

  /**
   * Default grid view
   */
  return (
    <main className="min-h-screen bg-[#FFFCF6] text-zinc-900">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-12">

        {/* ================= HEADER ================= */}
        <header className="projects-header">
          <h1>Our Projects</h1>

          {/* Short intro */}
          <p className="subtitle">
            Explore the initiatives we've worked on and continue to support.
          </p>

          {/* Supporting description */}
          <p className="description">
            From providing technology access to underserved students to hosting
            cultural and educational programs, each project reflects our mission
            to build stronger, more connected communities.
          </p>
        </header>

        {/* ================= PROJECT GRID ================= */}
        <section className="grid md:grid-cols-4 gap-6">
          {projects.map((proj, index) => {
            const isHero = index === 0;

            // Normalize DB → UI format
            const formattedProj = {
              id: proj.id,
              title: proj.title,
              shortDesc: proj.description,
              longDesc: proj.description,
              featuredImage: proj.image_url,
              status: proj.status,
            };

            return (
              <article
                key={formattedProj.id}
                ref={(el) => (refs.current[index] = el)}
                className={`relative rounded-3xl p-6 text-white shadow-sm card-tile cursor-pointer ${
                  hasAnimated ? "card-show" : ""
                }`}
                style={{
                  backgroundColor: isHero ? theme.maroon : theme.card,
                }}
                onClick={() => setExpandedProject(formattedProj)}
              >

                {/* Expand Button */}
                <button className="absolute right-3 top-3 w-7 h-7 grid place-items-center rounded-full bg-white/40 text-white font-bold">
                  +
                </button>

                {/* Project Icon */}
                {formattedProj.featuredImage ? (
                  <div className="project-icon mb-6 bg-white shadow-sm">
                    <img
                      src={formattedProj.featuredImage}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 mb-6 rounded-full bg-white/30" />
                )}

                {/* Title */}
                <div className="text-2xl font-semibold">
                  {formattedProj.title}
                </div>

                {/* Status */}
                {formattedProj.status && (
                  <div className="status-pill">
                    {formattedProj.status}
                  </div>
                )}

                {/* Decorative dots (hero card only) */}
                {isHero && (
                  <div className="mt-3 flex items-center gap-[4px]">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="dot" />
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="projects-cta">

          <h2>Want to Support Our Work?</h2>

          <p>
            Your support helps us expand our impact and bring more initiatives
            to communities in need.
          </p>

          {/* 🔥 Proper navigation to Donate Page */}
          <Link to="/donate" className="cta-button">
            Donate Now
          </Link>

        </section>

      </div>
    </main>
  );
}
