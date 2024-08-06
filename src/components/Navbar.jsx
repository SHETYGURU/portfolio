import React, { useState, useEffect } from "react";
import "./css/Navabar.css"; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className="container nav_bar"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="left nav_items">Portfolio</div>
        {!isMobile && (
          <div className="right">
            <a href="#home" className="nav_items">
              Home
            </a>
            <a href="#experience" className="nav_items">
              Experience
            </a>
            <a href="#skills" className="nav_items">
              Skills
            </a>
            <a href="#projects" className="nav_items">
              Projects
            </a>
            <a href="#contact" className="nav_items">
              Contact
            </a>
          </div>
        )}
        
      </div>
      {isMobile && isOpen && (
        <div className="right open">
          <a href="#home" className="nav_items" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#experience" className="nav_items" onClick={() => setIsOpen(false)}>
            Experience
          </a>
          <a href="#skills" className="nav_items" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#projects" className="nav_items" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#contact" className="nav_items" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
