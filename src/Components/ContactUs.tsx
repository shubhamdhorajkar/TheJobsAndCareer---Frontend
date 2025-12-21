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

const ContactUs: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_xxxxx",     // 🔁 REPLACE with your Service ID
        "template_xxxxx",    // 🔁 REPLACE with your Template ID
        formRef.current,
        "PUBLIC_KEY_xxxxx"   // 🔁 REPLACE with your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully! We will get back to you soon.");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send message. Please try again later.");
        }
      );
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
              <span>Pune, Maharashtra, India</span>
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

          <form ref={formRef} onSubmit={sendEmail}>
            {/* Required for {{name}} */}
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              name="name"
              className="form-input"
              required
            />

            {/* Required for {{email}} */}
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              name="email"
              type="email"
              className="form-input"
              required
            />

            {/* Required for {{message}} */}
            <TextField
              fullWidth
              label="Your Message"
              variant="outlined"
              name="message"
              multiline
              rows={4}
              className="form-input"
              required
            />

            {/* Optional {{time}} */}
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
