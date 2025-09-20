import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => (
  <Box
    sx={{
      mt: 5,
      py: 3,
      backgroundColor: "#1976d2",
      color: "white",
      textAlign: "center",
    }}
  >
    <Typography>© 2025 Job Portal. All rights reserved.</Typography>
  </Box>
);

export default Footer;
