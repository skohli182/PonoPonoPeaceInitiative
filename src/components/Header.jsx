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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/donate">Support</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
