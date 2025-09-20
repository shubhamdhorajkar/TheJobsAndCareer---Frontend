import React from "react";
import { Container, Typography, Box } from "@mui/material";
import ContactForm from "../Components/ContactForm";

const AboutPage: React.FC = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography paragraph>
        We are a job portal helping candidates connect with top companies and mentors.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Contact Us
      </Typography>
      <Box sx={{ maxWidth: 600 }}>
        <ContactForm />
      </Box>
    </Container>
  );
};

export default AboutPage;
