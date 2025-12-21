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
          {/* <Link to="/blogs">Blogs</Link> */}
          <a
  href="https://wa.me/919876543210"  // 👈 replace with your number (in international format, no + or spaces)
  target="_blank"
  rel="noopener noreferrer"
  className="nav-link"
>Speak with Mentor</a>
          <Link to="/advertise">Contact us</Link>
        </div>

        {/* CTA Button */}
        {/*<div className="navbar-cta">
          <button>Post a Job</button>
        </div>*/}
        <div className="navbar-cta">
          <button>Upload CV</button>
        </div>
      </Box>
    </nav>
  );
};

export default Navbar;
