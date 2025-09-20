import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import './Components CSS/HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <Box className="hero-container">
      <Box className="hero-content">
        <Typography variant="h1" className="hero-heading">
          Scalable Solutions for the Digital Age
        </Typography>
        <Typography variant="h6" className="hero-subheading">
          Innovative software solutions tailored to your business needs
        </Typography>
        <Box className="hero-buttons">
          <Button variant="contained" className="cta-button">
            Get Started
          </Button>
          <Button variant="outlined" className="secondary-button">
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
