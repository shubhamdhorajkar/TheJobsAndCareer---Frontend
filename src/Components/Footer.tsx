// src/components/Footer.tsx
import React from "react";
import "./Components CSS/Footer.css";
import { FaLinkedinIn, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

/* Replace with your real logo in assets */
import logo from "../assets/emmanuel.png";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        {/* Column 1 - Brand + Contact */}
        <div className="footer-col footer-brand">
          <div className="footer-logo-wrap">
            <img src={logo} alt="TJC logo" className="footer-logo" />
          </div>

          <h3 className="footer-cta-title">Let's <em>Talk</em></h3>

          <div className="footer-contact">
            <a className="contact-row" href="mailto:emanuel@thejobsandcareer.com">
              <FaEnvelope className="icon" aria-hidden /> <span>emanuel@thejobsandcareer.com</span>
            </a>
            <a className="contact-row" href="tel:+919326315980">
              <FaPhoneAlt className="icon" aria-hidden /> <span>+91 9326315980</span>
            </a>
          </div>

          <div className="footer-follow">
            <div className="follow-label">Follow <strong>Us</strong></div>
            <div className="social-icons" aria-hidden>
              <a className="social-btn" href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a className="social-btn" href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a className="social-btn" href="#" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Column 2 - Services */}
        <div className="footer-col footer-links">
          <h4 className="col-title">Our <em>Services</em></h4>

          <div className="services-list">
            <div className="service-block">
              <div className="service-title">For Candidates</div>
              <div className="service-desc">Build Your Career With Confidence</div>
            </div>

            <div className="service-block">
              <div className="service-title">For Businesses</div>
              <div className="service-desc">Your Talent & HR Partner</div>
            </div>

            <div className="service-block">
              <div className="service-title">Consultation</div>
              <div className="service-desc">Book career & hiring guidance</div>
            </div>
          </div>
        </div>

        {/* Column 3 - Get Hired */}
        <div className="footer-col footer-cta">
          <h4 className="col-title">Get <em>Hired</em></h4>

          <p className="cta-sub">
            Upload your CV/Resume and let employers find you. Want a personalised consultation? Book now.
          </p>

          <div className="cta-actions">
            <label htmlFor="resume-upload" className="upload-btn" title="Upload CV/Resume">
              Upload CV/Resume
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                style={{ display: "none" }}
                onChange={() => alert("Upload action — replace with real handler.")}
              />
            </label>

            <a href="#" className="book-btn" onClick={(e) => { e.preventDefault(); alert("Book consultation — replace with real handler."); }}>
              Book A Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider" />

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="bottom-left">
          <small>Designed and Developed by Jade Software</small>
        </div>

        <div className="bottom-center">
          <small>© {new Date().getFullYear()} The Jobs & Career. All rights reserved.</small>
        </div>

        <div className="bottom-right">
          <a href="#" className="bottom-link">Privacy Policy</a>
          <a href="#" className="bottom-link">Terms</a>
          <a href="#" className="bottom-link">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
