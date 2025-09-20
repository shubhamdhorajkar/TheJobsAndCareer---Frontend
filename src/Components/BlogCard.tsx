import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

interface BlogCardProps {
  title: string;
  excerpt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt }) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography variant="body2" color="text.secondary">{excerpt}</Typography>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Button variant="outlined" fullWidth>Read More</Button>
      </Box>
    </Card>
  );
};

export default BlogCard;
