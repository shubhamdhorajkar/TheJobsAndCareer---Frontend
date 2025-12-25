import { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import "./Components CSS/Navbar.css";
import logo from "../../src/assets/TJC logo Full PNG.png";
import ResumeUploadModal from "./ResumeUploadModal";

const Navbar: React.FC = () => {
  const [openResumeModal, setOpenResumeModal] = useState<boolean>(false);

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="TJC Logo" className="logo-img" />
        </Link>

        {/* Navigation Links */}
        <Box className="navbar-right">
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>

            {/* <Link
              to="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Speak with Mentor
            </Link>  */}
            <Link
              to="https://topmate.io/jdemanuvel/1135553"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Speak with Mentor
            </Link>

            <Link to="/advertise">Contact us</Link>
          </div>

          {/* Upload CV Button */}
          <div className="navbar-cta">
            <button onClick={() => setOpenResumeModal(true)}>Upload CV</button>
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
