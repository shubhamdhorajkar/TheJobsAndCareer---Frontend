import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent by ${name}`);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <TextField label="Message" value={message} onChange={(e) => setMessage(e.target.value)} multiline rows={4} required />
      <Button type="submit" variant="contained">Send</Button>
    </Box>
  );
};

export default ContactForm;
