import "./Components CSS/JobListSection.css";
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaRupeeSign } from "react-icons/fa";

import compamy1 from "../assets/company1.png";
import compamy2 from "../assets/company2.png";
import compamy3 from "../assets/company3.png";

import adAyesha from "../assets/add-ayesha.png";
import adNoshima from "../assets/add-noshima.png";
import adTjc from "../assets/tjc-add1.png";

const JobListingSection = () => {
  const jobs = [
    {
      title: "Export Marketing Executive",
      company: "Jumbo Bag Ltd",
      location: "Chennai – Onsite",
      experience: "2+ Years",
      salary: "UPTO 3 LPA",
      description:
        "Help take Indian manufacturing global! Join the exports team at Jumbo Bag Ltd and manage international client communications, marketing, and logistics.",
      logo: compamy1, // <-- directly assign the imported image
    },
    {
      title: "Full Stack Developer",
      company: "TechVerse",
      location: "Pune – Hybrid",
      experience: "3+ Years",
      salary: "UPTO 10 LPA",
      description:
        "Work on modern web applications with a dynamic product team building scalable software solutions.",
      logo: compamy2,
    },
    {
      title: "HR Manager",
      company: "InfiniCorp",
      location: "Bangalore – Onsite",
      experience: "5+ Years",
      salary: "UPTO 15 LPA",
      description:
        "Lead and manage recruitment, employee engagement, and workforce planning for a leading IT organization.",
      logo: compamy3,
    },
  ];

  const ads = [
  { img: adAyesha, alt: "Ayesha Ad" },
  { img: adNoshima, alt: "Noshima Ad" },
  { img: adTjc, alt: "TJC Ad" },
];

  return (
    <div className="job-section-container">
      <div className="job-listings">
        <h2 className="section-title">Featured Jobs</h2>
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <img src={job.logo} alt={job.company} className="company-logo" />
            <div className="job-details">
              <h3>{job.title}</h3>
              <div className="job-meta">
                <span>
                  <FaBuilding /> {job.company}
                </span>
                <span>
                  <FaMapMarkerAlt /> {job.location}
                </span>
                <span>
                  <FaCalendarAlt /> {job.experience}
                </span>
                <span>
                  <FaRupeeSign /> {job.salary}
                </span>
              </div>
              <p>{job.description}</p>
            </div>
            <button className="apply-btn">Apply Now</button>
          </div>
        ))}
        <button className="more-btn">Show More</button>
      </div>

      <div className="advertisements">
  {ads.map((ad, index) => (
    <div className="ad-card" key={index}>
      <img src={ad.img} alt={ad.alt} className="ad-image" />
    </div>
  ))}
</div>

    </div>
  );
};

export default JobListingSection;
