import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "motion/react"; // Import concepts for header scorllin
import logo from "../images/ponologo.png";
import "./Header.css";

function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Monitor the scroll progress
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // If the the current scroll position is more than 500 px compared to the previous scroll postion, then hide the header
    // Otherwise, don't hide the header
    if (latest > previous > 0 && latest > 500) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header 
      className="header"
      // Define the animation based on state
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }, // This state basically means that the header isn't visible when it's state is "hidden"
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }} // Transition takes 0.5 seconds
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000, // Set this to always be lower than the scroll bar so that the scroll bar is "above" it
      }}
    >
      <div className="header-left">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Pono Pono Logo" className="logo" />
          <div className="logo-text">Pono Pono Peace Initiative</div>
        </Link>
      </div>
      <nav className="nav-right">
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>About</Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>Projects</Link>
          </li>
          <li>
            <Link to="/donate" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>Support</Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>Blog</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>Contact</Link>
          </li>
          <li>
            <input type="text" placeholder="Search" className="search-input" />
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;
