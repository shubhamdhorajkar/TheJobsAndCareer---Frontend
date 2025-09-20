import React from "react";
import { Container, Box } from "@mui/material";
import HeroSection from "../Components/HeroSection";
import JobCard from "../Components/JobCard";

const HomePage: React.FC = () => {
  const jobs = [
    { title: "Frontend Developer", company: "Google", location: "Bangalore" },
    { title: "Backend Developer", company: "Amazon", location: "Hyderabad" },
    { title: "Full Stack Developer", company: "Microsoft", location: "Pune" },
  ];

  return (
    <>
      <HeroSection />
      <Container sx={{ mt: 5 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {jobs.map((job, idx) => (
            <Box key={idx} sx={{ flex: "1 1 calc(33.333% - 16px)", minWidth: 250 }}>
              <JobCard {...job} />
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
