/**
 * Hero.jsx — Home Page
 *
 * This is the main landing page rendered at the "/" route.
 * It is composed of three full-width sections stacked vertically,
 * separated by thin dividers:
 *
 *  1. Hero Section
 *     - Split layout: text/CTA on the left, two images in a 2-col grid on the right.
 *     - The "Find Out More" CTA routes to /competition.
 *     - Animated wave SVG sits at the bottom of the section for visual depth.
 *
 *  2. What We Do Section
 *     - Summarises the organisation's four core activity areas as a bulleted list.
 *     - Guides users who want to understand the mission before exploring sub-pages.
 *
 *  3. What Does Pono Pono Mean? Section
 *     - Provides cultural and philosophical context for the initiative's name.
 *     - Acts as a closing, reflective section before the footer.
 */

import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import groupPhoto from "../images/groupPhoto.png";
import peacebuilding from "../images/peacebuilding.png";

function Hero() {
  return (
    <>
      {/* ── Section 1: Hero ─────────────────────────────────────────────────
          Full-viewport section with a decorative animated wave at the bottom.
          Left column holds the headline and CTA; right column displays two
          images in a two-column grid to convey community and mission visually.
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="hero">
        {/* Decorative animated wave overlay at the bottom of the hero */}
        <div className="wave"></div>

        <div className="hero-container">
          {/* Left: headline, tagline, and CTA button */}
          <div className="hero-content">
            <h1>Current Opportunities</h1>
            <p>
              Explore our latest projects and find ways to make a meaningful
              impact in your community.
            </p>
            {/* CTA routes to the Student Peacebuilder Competition page */}
            <Link to="/competition" className="cta-button">
              Find Out More
            </Link>
          </div>

          {/* Right: two images displayed side-by-side in a CSS grid */}
          <div className="hero-images">
            <div className="image-placeholder">
              <img src={groupPhoto} alt="Group Photo" />
            </div>
            <div className="image-placeholder">
              <img src={peacebuilding} alt="Peacebuilding" />
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Section 2: What We Do ────────────────────────────────────────────
          Concise overview of the organisation's four pillars. Positioned
          directly below the hero so visitors immediately understand the scope
          of the initiative after seeing the CTA.
          List items are styled as a 2×2 card grid (CSS only, no extra markup).
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="what-we-do">
        <div className="content-section-container">
          <h2>What We Do</h2>
          <p className="what-we-do-intro">
            The Pono Pono Peace Initiative works to create opportunities to grow
            the impact of peacebuilding in the Pacific region. This includes:
          </p>
          <ul className="what-we-do-list">
            <li>Developing projects with community partners</li>
            <li>
              Supporting students with internships, scholarships, and
              competitions
            </li>
            <li>
              Organizing workshops, seminars, and trainings for students,
              professionals, and the community
            </li>
            <li>
              Hosting peacebuilding conferences and symposiums that focus on
              peacebuilding and related topics
            </li>
          </ul>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Section 3: What Does Pono Pono Mean? ────────────────────────────
          Cultural context section that explains the Hawaiian meaning behind
          the name. Closes the page on a reflective, values-driven note before
          the footer.
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="pono-meaning">
        <div className="content-section-container">
          <h2>What Does Pono Pono Mean?</h2>
          <p>
            In Hawaiian, placing two words side by side deepens or emphasizes
            meaning. "Pono" means balance and righteousness, so "Pono Pono"
            strengthens that idea and suggests that peace requires more than
            avoiding conflict or simply doing right. It means actively creating
            peace—not just removing harm, but building what supports wellbeing.
          </p>
          <p>
            Pono Pono reflects positive peace: not only the absence of conflict,
            but the presence of attitudes, institutions, and structures that
            sustain fair, peaceful communities. It calls us to be positive
            influences in peacebuilding at home, work, school, and in our
            communities by helping create conditions where peace can truly
            thrive.
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
