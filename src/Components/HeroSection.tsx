import React from "react";
import { Box, Typography } from "@mui/material";
import { ReactTyped } from "react-typed";
import "./Components CSS/HeroSection.css";

import heroIllustration from "../assets/hero-job-illustration.png"; // adjust path if needed

const HeroSection: React.FC = () => {
  return (
    <Box className="hero-container">
      <Box className="hero-inner">
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
            Connecting talent, companies, and opportunities seamlessly.
          </Typography>
        </Box>

        <Box className="hero-illustration" aria-hidden>
          <img src={heroIllustration} alt="Job illustration" />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
