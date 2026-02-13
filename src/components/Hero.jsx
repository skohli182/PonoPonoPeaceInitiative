import React from "react";
import "./Hero.css";
import groupPhoto from "../images/groupPhoto.png";
import peacebuilding from "../images/peacebuilding.png";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="wave"></div>
        <div className="hero-container">
          <div className="hero-content">
            <h1>Current Opportunities</h1>
            <p>
              Explore our latest projects and find ways to make a meaningful
              impact in your community.
            </p>
            <a href="#" className="cta-button">
              Find Out More
            </a>
          </div>
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

      <section className="what-we-do">
        <div className="what-we-do-container">
          <h2>What We Do</h2>
          <p className="what-we-do-intro">
            The Pono Pono Peace Initiative works to create opportunities to grow
            the impact of peacebuilding in the Pacific region. This includes:
          </p>
          <ul className="what-we-do-list">
            <li>Developing projects with community partners</li>
            <li>
              Supporting students with internships, scholarships, and
              competitions.
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
    </>
  );
}

export default Hero;
