import React, { useRef } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Components CSS/ContactUs.css";

const SERVICE_ID = "service_qxqtd8q";
const TEMPLATE_ID = "template_u9hbpzs";
const PUBLIC_KEY = "n-hNuXQVDVyvQs8KG"; // ⚠️ MUST be PUBLIC KEY only

const ContactUs: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) {
      console.error("Form reference not found");
      return;
    }

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      console.log("EMAIL SENT SUCCESSFULLY:", result);
      alert("✅ Message sent successfully! We will get back to you soon.");
      formRef.current.reset();
    } catch (error: any) {
      console.error("EMAILJS ERROR DETAILS:", error);

      alert(
        error?.text ||
          "❌ Failed to send message. Please check console for details."
      );
    }
  };

  return (
    <Box className="contactus-page">
      {/* Background Glow */}
      <div className="contactus-bg" aria-hidden />

      <Box className="contactus-container">
        {/* LEFT SIDE – CONTACT INFO */}
        <Box className="contactus-info">
          <Typography variant="h4" className="contactus-heading">
            Contact <span className="accent">Us</span>
          </Typography>

          <Typography className="contactus-subtext">
            Have questions or want to connect with a mentor? We’re here to help.
          </Typography>

          <ul className="contactus-list">
            <li>
              <FaEnvelope />
              <span>support@thejobsandcareer.com</span>
            </li>
            <li>
              <FaPhoneAlt />
              <span>+91 9326315980</span>
            </li>
            <li>
              <FaMapMarkerAlt />
              <span>Panjim, Goa, India</span>
            </li>
          </ul>

          <Box className="contactus-socials">
            <a
              href="https://wa.me/919326315980?text=Hi%20I%20want%20to%20connect%20with%20a%20mentor"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn whatsapp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.linkedin.com/company/thejobsandcareer/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn linkedin"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/thejobsandcareer/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn instagram"
            >
              <FaInstagram />
            </a>
          </Box>
        </Box>

        {/* RIGHT SIDE – CONTACT FORM */}
        <Box className="contactus-form">
          <Typography variant="h5" className="form-heading">
            Send Us a Message
          </Typography>

          <form ref={formRef} onSubmit={sendEmail} noValidate>
            {/* {{name}} */}
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              required
              className="form-input"
            />

            {/* {{email}} */}
            <TextField
              fullWidth
              label="Your Email"
              name="email"
              type="email"
              required
              className="form-input"
            />

            {/* {{message}} */}
            <TextField
              fullWidth
              label="Your Message"
              name="message"
              multiline
              rows={4}
              required
              className="form-input"
            />

            {/* {{time}} */}
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <Button
              type="submit"
              variant="contained"
              className="send-btn"
              fullWidth
            >
              Send Message
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
