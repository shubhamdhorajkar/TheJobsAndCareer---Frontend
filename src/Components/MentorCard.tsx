import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

interface MentorCardProps {
  name: string;
  expertise: string;
}

const MentorCard: React.FC<MentorCardProps> = ({ name, expertise }) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>{name}</Typography>
        <Typography variant="body2" color="text.secondary">{expertise}</Typography>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Button variant="contained" fullWidth>Connect</Button>
      </Box>
    </Card>
  );
};

export default MentorCard;
