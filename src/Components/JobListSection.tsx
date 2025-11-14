// src/components/JobListingSection.tsx
import React, { useEffect, useState } from "react";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaRupeeSign,
  FaShareAlt,
} from "react-icons/fa";
import "./Components CSS/JobListSection.css";

import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";

import adAyesha from "../assets/add-ayesha.png";
import adNoshima from "../assets/add-noshima.png";
import adTjc from "../assets/tjc-add1.png";

/* Top banner images */
import bookConsultation from "../assets/bookConsultation.png";
import buildYourFuture from "../assets/BuildYourFuture.png";

const JobListingSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jobs = [
    {
      title: "Export Marketing Executive",
      company: "Jumbo Bag Ltd",
      location: "Chennai – Onsite",
      experience: "2+ Years",
      salary: "UPTO 3 LPA",
      description:
        "Help take Indian manufacturing global! Join the exports team at Jumbo Bag Ltd and manage international client communications, marketing, and logistics.",
      logo: company1,
    },
    {
      title: "Full Stack Developer",
      company: "TechVerse",
      location: "Pune – Hybrid",
      experience: "3+ Years",
      salary: "UPTO 10 LPA",
      description:
        "Work on modern web applications with a dynamic product team building scalable software solutions.",
      logo: company2,
    },
    {
      title: "HR Manager",
      company: "InfiniCorp",
      location: "Bangalore – Onsite",
      experience: "5+ Years",
      salary: "UPTO 15 LPA",
      description:
        "Lead and manage recruitment, employee engagement, and workforce planning for a leading IT organization.",
      logo: company3,
    },
  ];

  const ads = [
    { img: adAyesha, alt: "Ayesha Ad" },
    { img: adNoshima, alt: "Noshima Ad" },
    { img: adTjc, alt: "TJC Ad" },
  ];

  // Example list of 10 similar jobs for modal
  const similarJobs = [
    { title: "Frontend Developer", company: "PixelWorks", location: "Remote", salary: "UPTO 8 LPA" },
    { title: "Backend Developer", company: "DataFlow", location: "Hyderabad", salary: "UPTO 9 LPA" },
    { title: "UI/UX Designer", company: "DesignKit", location: "Bengaluru", salary: "UPTO 6 LPA" },
    { title: "QA Engineer", company: "TestRight", location: "Pune", salary: "UPTO 5 LPA" },
    { title: "DevOps Engineer", company: "CloudEdge", location: "Remote", salary: "UPTO 12 LPA" },
    { title: "Product Manager", company: "Roadmap", location: "Mumbai", salary: "UPTO 14 LPA" },
    { title: "Data Analyst", company: "Insight Labs", location: "Chennai", salary: "UPTO 7 LPA" },
    { title: "Content Writer", company: "WordForge", location: "Remote", salary: "UPTO 4 LPA" },
    { title: "Sales Executive", company: "GrowFast", location: "Bengaluru", salary: "UPTO 6 LPA" },
    { title: "Customer Success", company: "ClientFirst", location: "Pune", salary: "UPTO 5 LPA" },
  ];

  const handleShare = (jobTitle: string, company: string) => {
    const message = `Check out this job: ${jobTitle} at ${company}`;
    const url = window.location.href;

    if (navigator.share) {
      navigator
        .share({
          title: jobTitle,
          text: message,
          url,
        })
        .catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard
        .writeText(`${message}\n${url}`)
        .then(() => alert("Job link copied to clipboard!"))
        .catch(() => alert("Unable to copy link. Please copy manually."));
    } else {
      alert(`${message}\n${url}`);
    }
  };

  // Modal open/close handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isModalOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen]);

  // prevent background scroll when modal open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <div className="job-page-wrapper">
      {/* Top banners above everything */}
      <div className="top-ad-section">
        <img src={bookConsultation} alt="Book Consultation" className="top-ad-image" />
        <img src={buildYourFuture} alt="Build Your Future" className="top-ad-image" />
      </div>

      {/* Main job + advertisement container */}
      <div className="job-section-container">
        <div className="job-listings">
          {/* Banner above job cards */}
          <div className="featured-banner">
            <h2 className="banner-text">
              Great Work Starts With Great Company. <span className="highlight-text">Join Them!</span>
            </h2>
          </div>

          {/* Job cards */}
          {jobs.map((job, idx) => (
            <div className="job-card" key={idx}>
              <img src={job.logo} alt={job.company} className="company-logo" />
              <div className="job-details">
                <h3>{job.title}</h3>
                <div className="job-meta">
                  <span><FaBuilding /> {job.company}</span>
                  <span><FaMapMarkerAlt /> {job.location}</span>
                  <span><FaCalendarAlt /> {job.experience}</span>
                  <span><FaRupeeSign /> {job.salary}</span>
                </div>
                <p>{job.description}</p>

                <div className="job-actions">
                  <button className="apply-btn">Apply Now</button>
                  <button className="share-btn" onClick={() => handleShare(job.title, job.company)}>
                    <FaShareAlt /> Share
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button className="more-btn" onClick={openModal}>Show More</button>
        </div>

        {/* Vertical divider */}
        <div className="vertical-line" />

        {/* Advertisements */}
        <div className="advertisements">
          <h2 className="ads-title">Featured Jobs</h2>
          {ads.map((ad, idx) => (
            <div className="ad-card" key={idx}>
              <img src={ad.img} alt={ad.alt} className="ad-image" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal: similar jobs */}
      {isModalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="More jobs">
          <div className="modal-content">
            <div className="modal-header">
              <h3>More Jobs</h3>
              <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
                ✕
              </button>
            </div>

            <div className="modal-body">
              <p className="modal-subtext">Here are more jobs you might be interested in:</p>

              <div className="modal-job-list">
                {similarJobs.map((sjob, i) => (
                  <div className="modal-job-card" key={i}>
                    <div className="modal-job-left">
                      <h4 className="modal-job-title">{sjob.title}</h4>
                      <div className="modal-job-meta">
                        <span>{sjob.company}</span>
                        <span>•</span>
                        <span>{sjob.location}</span>
                      </div>
                    </div>
                    <div className="modal-job-right">
                      <div className="modal-job-salary">{sjob.salary}</div>
                      <button
                        className="apply-btn small"
                        onClick={() => alert(`Apply for ${sjob.title} at ${sjob.company}`)}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <button className="more-btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListingSection;
