import React from "react";
import { Container, Box, Typography } from "@mui/material";
import MentorCard from "../Components/MentorCard";

const MentorPage: React.FC = () => {
  const mentors = [
    { name: "Amit Sharma", expertise: "Software Engineering" },
    { name: "Neha Kapoor", expertise: "Data Science" },
    { name: "Rajesh Singh", expertise: "UI/UX Design" },
  ];

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Speak with Mentors
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {mentors.map((mentor, idx) => (
          <Box key={idx} sx={{ flex: "1 1 calc(33.333% - 16px)", minWidth: 250 }}>
            <MentorCard {...mentor} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default MentorPage;
