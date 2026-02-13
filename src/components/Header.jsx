import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/ponologo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
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
    </header>
  );
}

export default Header;
