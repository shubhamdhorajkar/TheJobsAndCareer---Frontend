import React from "react";
import { Container } from "@mui/material";
import ServicesSection from "../Components/ServicesSection";

const ServicesPage: React.FC = () => {
    return (
    <Container sx={{ mt: 5 }}>
      <ServicesSection></ServicesSection>
    </Container>
  );
};

export default ServicesPage;
