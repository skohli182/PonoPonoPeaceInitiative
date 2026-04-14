/**
 * ProjectPage.jsx
 * ----------------------------------
 * Displays all projects from Supabase in a card grid.
 *
 * Features:
 * - Animated cards (Intersection Observer)
 * - Expandable project view (3-panel layout)
 * - Dynamic data from Supabase
 */

import React, { useState, useEffect, useRef } from "react";
import "./ProjectPage.css";
import { supabase } from "../supabaseClient";

/**
 * Theme configuration (centralized colors)
 */
const theme = {
  card: "#DFCEB9",
  maroon: "#193D40",
  border: "#F8F8F3",
};

/**
 * ================= EXPANDED PROJECT VIEW =================
 * Full-width 3-panel layout when a card is clicked
 */
function ProjectExpandedRow({ project, onCollapse }) {
  const { title, longDesc, shortDesc, featuredImage, status } = project;

  const isOngoing = status === "Ongoing";

  return (
    <article className="card-row-expanded relative">
      {/* Close button */}
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

/**
 * ================= MAIN PROJECT PAGE =================
 */
export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [expandedProject, setExpandedProject] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const refs = useRef([]);

  /**
   * Fetch projects from Supabase on load
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
   * Intersection Observer for animation
   * Adds "card-show" when cards enter viewport
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
   * If a project is clicked → show expanded view
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
   * Default grid view (all projects)
   */
  return (
    <main className="min-h-screen bg-[#FFFCF6] text-zinc-900">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-12">

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
                {/* "+" Expand Button */}
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

                {/* Hero decorative dots (first card only) */}
                {isHero && (
                  <div className="mt-4 flex flex-wrap gap-2 opacity-80">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-orange-300/70"
                      />
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
