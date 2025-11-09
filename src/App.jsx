import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import BlogPage from "./components/BlogPage";
import About from "./components/About";
import ProjectPage from "./components/ProjectPage";
import DonatePage from "./components/DonatePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/donate" element={<DonatePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
