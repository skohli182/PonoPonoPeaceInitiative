import React from "react";
import "./Hero.css";

function Hero() {
  return (
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
            <span>Photo 1</span>
          </div>
          <div className="image-placeholder">
            <span>Photo 2</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
