import { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import "./Components CSS/Navbar.css";
import ResumeUploadModal from "./ResumeUploadModal";

const Navbar: React.FC = () => {
  const [openResumeModal, setOpenResumeModal] = useState<boolean>(false);

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          TJC
        </Link>

        {/* Navigation Links */}
        <Box className="navbar-right">
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Speak with Mentor
            </a>

            <Link to="/advertise">Contact us</Link>
          </div>

          {/* Upload CV Button */}
          <div className="navbar-cta">
            <button onClick={() => setOpenResumeModal(true)}>
              Upload CV
            </button>
          </div>
        </Box>
      </nav>

      {/* ✅ Resume Upload Modal */}
      <ResumeUploadModal
        open={openResumeModal}
        onClose={() => setOpenResumeModal(false)}
      />
    </>
  );
};

export default Navbar;
