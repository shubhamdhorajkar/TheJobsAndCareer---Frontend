import React from "react";
import { Container, Typography } from "@mui/material";
import ContactForm from "../Components/ContactForm";

const AdvertisePage: React.FC = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Advertise with Us
      </Typography>
      <Typography paragraph>
        Promote your company and job postings to thousands of candidates.
      </Typography>
      <ContactForm />
    </Container>
  );
};

export default AdvertisePage;
