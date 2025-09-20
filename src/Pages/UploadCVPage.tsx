import React from "react";
import { Container, Typography } from "@mui/material";
import UploadCVForm from "../Components/UploadCVForm";

const UploadCVPage: React.FC = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Upload Your CV
      </Typography>
      <UploadCVForm />
    </Container>
  );
};

export default UploadCVPage;
