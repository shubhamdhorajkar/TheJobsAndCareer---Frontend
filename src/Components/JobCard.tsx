import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, company, location }) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography variant="body2" color="text.secondary">{company}</Typography>
        <Typography variant="body2" color="text.secondary">{location}</Typography>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Button variant="contained" fullWidth>Apply Now</Button>
      </Box>
    </Card>
  );
};

export default JobCard;
