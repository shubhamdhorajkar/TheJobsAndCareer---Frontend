import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import "./Components CSS/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        TJC
      </Link>

      {/* Navigation Links + Search */}
      <Box className="navbar-right">
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/upload-cv">Upload CV</Link>
          <Link to="/mentors">Speak with Mentors</Link>
          <Link to="/advertise">Advertise with us</Link>
        </div>

        {/* CTA Button */}
        <div className="navbar-cta">
          <button>Post a Job</button>
        </div>
      </Box>
    </nav>
  );
};

export default Navbar;
