import React from "react";
import { Container, Box } from "@mui/material";
import ServiceCard from "../Components/ServiceCard";

const ServicesPage: React.FC = () => {
  const services = [
    { title: "Job Listings", description: "Find thousands of job postings." },
    { title: "CV Upload", description: "Easily upload and manage your CV." },
    { title: "Mentorship", description: "Get guidance from industry experts." },
  ];

  return (
    <Container sx={{ mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {services.map((service, idx) => (
          <Box key={idx} sx={{ flex: "1 1 calc(33.333% - 16px)", minWidth: 250 }}>
            <ServiceCard {...service} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ServicesPage;
