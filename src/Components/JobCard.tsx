import React from "react";
import "./Components CSS/JobListSection.css";
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaMoneyBill } from "react-icons/fa";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  experience: string;
  salary: string;
  description: string;
  logo: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  location,
  experience,
  salary,
  description,
  logo,
}) => {
  return (
    <div className="job-card">
      <div className="job-card-left">
        <img src={logo} alt={company} className="company-logo" />
      </div>
      <div className="job-card-middle">
        <h3>{title}</h3>
        <p className="job-meta">
          <FaBuilding /> {company} &nbsp; | &nbsp;
          <FaMapMarkerAlt /> {location} &nbsp; | &nbsp;
          <FaCalendarAlt /> {experience} &nbsp; | &nbsp;
          <FaMoneyBill /> {salary}
        </p>
        <p className="job-desc">{description}</p>
      </div>
      <div className="job-card-right">
        <button className="apply-btn">Apply Now</button>
        <p className="share-text">Share</p>
      </div>
    </div>
  );
};

export default JobCard;
