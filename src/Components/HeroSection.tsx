import React, { useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { ReactTyped } from "react-typed";
import "./Components CSS/HeroSection.css";
import heroIllustration from "../assets/hero-job-illustration.png";

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  // Reveal animation on load
  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      hero.classList.add("visible");
    }
  }, []);

  return (
    <Box className="hero-container" ref={heroRef}>
      {/* Animated gradient background overlay */}
      <div className="hero-bg" />

      <Box className="hero-inner">
        {/* Left Text Content */}
        <Box className="hero-content">
          <Typography variant="h2" className="hero-heading">
            <span className="typed-text">
              <ReactTyped
                strings={["Job Search", "Hiring", "Advertising"]}
                typeSpeed={80}
                backSpeed={40}
                loop
                showCursor={false}
              />
            </span>{" "}
            <span className="made-simple">Made Simple</span>
          </Typography>

          <Typography variant="h6" className="hero-subheading">
            <strong>Calrity</strong>, <strong>strategy</strong>, and{" "}
            <strong>execution</strong> - all in one ecosystem.
          </Typography>

        </Box>

        {/* Right Illustration */}
        <Box className="hero-illustration" aria-hidden>
          <img src={heroIllustration} alt="Job illustration" />
        </Box>
      </Box>

      {/* Floating decorative shapes */}
      <div className="shape shape-1" />
      <div className="shape shape-2" />
      <div className="shape shape-3" />
    </Box>
  );
};

export default HeroSection;
