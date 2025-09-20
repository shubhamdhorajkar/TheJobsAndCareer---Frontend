import React from "react";
import { Container, Box } from "@mui/material";
import BlogCard from "../Components/BlogCard";

const BlogsPage: React.FC = () => {
  const blogs = [
    { title: "Resume Writing Tips", excerpt: "Learn how to write a standout CV." },
    { title: "Top 10 Interview Questions", excerpt: "Prepare for your next interview with confidence." },
    { title: "Remote Work Opportunities", excerpt: "Explore trending remote-friendly jobs." },
  ];

  return (
    <Container sx={{ mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2, // spacing between items
        }}
      >
        {blogs.map((blog, idx) => (
          <Box key={idx} sx={{ flex: "1 1 calc(33.333% - 16px)", minWidth: 250 }}>
            <BlogCard {...blog} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default BlogsPage;
