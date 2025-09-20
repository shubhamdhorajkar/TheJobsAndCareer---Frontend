import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const UploadCVForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) alert(`Uploaded: ${file.name}`);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField type="file" onChange={handleChange} />
      <Button type="submit" variant="contained">Upload CV</Button>
    </Box>
  );
};

export default UploadCVForm;
