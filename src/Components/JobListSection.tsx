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

import company1 from "../assets/partner4.png";
import company2 from "../assets/partner1.png";
import company3 from "../assets/Muenzer.png";

import adAyesha from "../assets/1.png";
import adNoshima from "../assets/2.png";
import adTjc from "../assets/3.png";

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
      title: "Domestic Marketing Executiver",
      company: "Jumbo Bag Ltd",
      location: "Chennai – Onsite",
      experience: "2+ Years",
      salary: "UPTO 3 LPA",
      description:
        "Drive B2B marketing campaigns, manage product outreach, and grow domestic sales for one of India’s leading FIBC manufacturers. Step into a strategic marketing role.",
      logo: company1,
    },
    {
      title: "Retail Sales Executive",
      company: "United Colors of Benetton",
      location: "Porvorim – Onsite",
      experience: "0–2+ Years",
      salary: "Up to 2 LPA",
      description:
        "Love fashion and customer service? Join a premium retail brand and build your career in lifestyle retail. No prior experience required! Freshers welcome — grow with global style.",
      logo: company2,
    },
    {
      title: "Procurement Officer",
      company: "Muenzer Bharat Private Limited",
      location: "South Goa – Onsite",
      experience: "0–2+ Years",
      salary: "Upto 3.60 LPA",
      description:
        "Start your career with real field action! Vendor onboarding, concept selling, and impact. No desk job — this one's for doers.",
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
    {
      id: 11,
      date: "01-12-2025",
      title: "Intern – Content Writer (Technical)",
      company: "SJ Innovation",
      location: "Verna, Goa",
      qualification:
        "Any Graduate / Mass Communication / Journalism / IT Background",
      experience: "Fresher / Internship",
      phone: "7507392559",
      website: "https://career.sjinnovation.com/jobDetails/259",
      salary: "As per industry standards",
    },
    {
      id: 12,
      date: "01-12-2025",
      title: "Maintenance Supervisor",
      company: "Myles High Health Concepts Pvt Ltd",
      location: "Patto Panjim, Goa",
      qualification: "Any ITI / Diploma / Graduate",
      experience: "1–3 years",
      phone: "7875447484",
      email: "hr@myleshigh.in",
      website: "—",
      salary: "As per industry standards",
    },
    {
      id: 13,
      date: "01-12-2025",
      title: "Steward",
      company: "Myles High Health Concepts Pvt Ltd",
      location: "Patto Panjim, Goa",
      qualification: "Any qualification",
      experience: "0–2 years",
      phone: "7875447484",
      email: "hr@myleshigh.in",
      website: "—",
      salary: "As per industry standards",
    },
    {
      id: 14,
      date: "01-12-2025",
      title: "Commis I – Pastry",
      company: "Myles High Health Concepts Pvt Ltd",
      location: "Patto Panjim, Goa",
      qualification: "Hotel Management / Culinary Course",
      experience: "1–3 years",
      phone: "7875447484",
      email: "hr@myleshigh.in",
      website: "—",
      salary: "As per industry standards",
    },
    {
      id: 15,
      date: "01-12-2025",
      title: "Accounts Associate – Receivable",
      company: "Myles High Health Concepts Pvt Ltd",
      location: "Patto Panjim, Goa",
      qualification: "B.Com / Accounts related degree",
      experience: "1–3 years",
      phone: "7875447484",
      email: "hr@myleshigh.in",
      website: "—",
      salary: "As per industry standards",
    },
    {
      id: 16,
      date: "01-12-2025",
      title: "Restaurant Manager",
      company: "As per Industry",
      location: "Kamala Mills, Mumbai",
      qualification: "Degree / Diploma in Hotel Management",
      experience: "3–5 years",
      phone: "7499918377",
      email: "placements@jobexperthr.com",
      website: "—",
      salary: "As per industry standards",
    },
    {
      id: 17,
      date: "02-12-2025",
      title: "HR Executive / Sr Executive",
      company: "Big Daddy Casinos & Hotels",
      location: "Panjim, Goa",
      qualification: "MBA HR / Any Graduation + HR experience",
      experience: "2–5 years",
      phone: "",
      email: "hr@bigdaddy.in",
      website: "—",
      salary: "Best in Industry",
    },
    {
      id: 18,
      date: "02-12-2025",
      title: "Receptionist (Female)",
      company: "Stone Wood Hotels & Resorts",
      location: "Mapusa, Goa",
      qualification: "Minimum 12th Pass",
      experience: "Fresher / Entry-level",
      phone: "9112006532",
      email: "hr.recuiter@stonewoodresorts.com",
      website: "—",
      salary: "As per industry standards",
    },
    {
      id: 19,
      date: "02-12-2025",
      title: "HR Supervisor / Executive",
      company: "Stone Wood Hotels & Resorts",
      location: "Vagator & Siolim, Goa",
      qualification: "Graduate / MBA HR",
      experience: "2–4 years",
      phone: "9112006532",
      email: "hr.recruiter@stonewoodresorts.com",
      website: "—",
      salary: "As per industry standards",
    },
    {
      id: 20,
      date: "02-12-2025",
      title: "Apprentice Trainee (Mechanical)",
      company: "Ion Exchange",
      location: "Verna, Goa",
      qualification: "Diploma / B.E Mechanical",
      experience: "0–1 year",
      phone: "8378004712",
      email: "",
      website: "—",
      salary: "As per industry standards",
    },
    {
      id: 21,
      date: "02-12-2025",
      title: "Commis II / Front Office Associate",
      company: "Courtyard by Marriott",
      location: "Colva, Goa",
      qualification: "Hotel Management / Any Graduate",
      experience: "1–3 years",
      phone: "",
      email: "joswin.rodrigues@marriott.com",
      website: "—",
      salary: "As per industry standards",
    },
    {
      id: 22,
      date: "02-12-2025",
      title: "Sales Manager",
      company: "SMVV Edutech Advisory Pvt Ltd",
      location: "",
      qualification: "Any Graduate / MBA preferred",
      experience: "5–8 years",
      phone: "9356518026",
      email: "hr@smvvedu.com",
      website: "—",
      salary: "As per industry standards",
    },
    {
      id: 23,
      date: "04-12-2025",
      title: "Front Office Associate",
      company: "Tanisi Hotels & Resorts",
      location: "Candolim, Goa",
      qualification: "12th / Graduate / Diploma in Hotel Management",
      experience: "Fresher / Experience",
      phone: "8956453904",
      email: "hr.thetanisi@gmail.com",
      website: "—",
      salary: "As per industry standards",
    },
    {
      id: 24,
      date: "04-12-2025",
      title: "Multiple Hospitality Roles",
      company: "Hard Rock Hotel",
      location: "Calangute, Goa",
      qualification: "Hotel Management / Hospitality",
      experience: "1–5 years",
      phone: "8956632478",
      email: "hr@hrhgoa.in",
      website: "—",
      salary: "As per industry standards",
    },
    {
      id: 25,
      date: "04-12-2025",
      title: "Accounts / CA Trainee",
      company: "PGK & Co (Chartered Accountants)",
      location: "Panaji, Goa",
      qualification: "B.Com / CA Inter / CA Student",
      experience: "Fresher / Articleship accepted",
      phone: "7447497923",
      email: "career.pgk@gmail.com",
      website: "—",
      salary: "As per industry standards",
    },
    {
      id: 26,
      date: "04-12-2025",
      title: "Hospitality Staff (Multiple Positions)",
      location: "Goa",
      phone: "9960006588",
      email: "—",
      company: "Phoenixx Casino",
      qualification: "Any Hospitality qualification / Experience based",
      experience: "Experience preferred",
      website: "—",
      salary: "As per industry standards",
    },
    {
      id: 27,
      date: "04-12-2025",
      title: "Manager – Accounts",
      location: "Margao, Goa",
      phone: "7420062027",
      email: "—",
      company: "Construction Group",
      qualification: "CA / MBA Finance / M.Com",
      experience: "4–5 years",
      website: "—",
      salary: "As per industry standards",
    },

    {
      id: 28,
      date: "04-12-2025",
      title: "Event Staff",
      location: "Panaji, Goa",
      phone: "8806014400",
      email: "—",
      company: "Event Management Company",
      qualification: "Any qualification (Training provided)",
      experience: "Fresher / Experienced",
      website: "—",
      salary: "As per industry standards",
    },

    {
      id: 29,
      date: "05-12-2025",
      title: "Graphic Design Intern",
      location: "Margao, Goa",
      phone: "9764371945",
      email: "—",
      company: "Xoxo Social",
      qualification: "Graduate / Designing related course",
      experience: "Fresher / Internship",
      website: "—",
      salary: "As per industry standards",
    },

    {
      id: 30,
      date: "05-12-2025",
      title: "Social Media Executive",
      location: "Patto, Goa",
      phone: "7709154907",
      email: "—",
      company: "CIPL",
      qualification: "Graduate / Communication / Marketing",
      experience: "2–4 years",
      website: "—",
      salary: "₹41,000",
    },

    {
      id: 31,
      date: "05-12-2025",
      title: "Billing Clerk",
      location: "Panaji, Goa",
      phone: "—",
      email: "vsdpanaji@gmail.com",
      company: "Trading Business",
      qualification: "B.Com",
      experience: "1–2 years",
      website: "—",
      salary: "As per industry standards",
    },

    {
      id: 32,
      date: "05-12-2025",
      title: "HR Generalist",
      location: "Nuvem, Margao",
      phone: "8421356797",
      email: "telcia@recruitia.in",
      company: "Recruitia",
      qualification: "BBA HR / Graduate",
      experience: "Minimum 1 year",
      website: "—",
      salary: "₹18,000 – ₹25,000",
    },

    {
      id: 33,
      date: "05-12-2025",
      title: "Purchase Executive",
      location: "Panjim, Goa",
      phone: "9067666838",
      email: "hrm@eleva.in",
      company: "Eleva Elevators & Escalators Pvt Ltd",
      qualification: "Any Graduate",
      experience: "3–4 years",
      website: "—",
      salary: "₹3,81,600 p.a.",
    },

    {
      id: 34,
      date: "05-12-2025",
      title: "Accounts Assistant",
      location: "Vasco, Goa",
      phone: "9657003884",
      email: "—",
      company: "Trinity Mahalasa Durga Sales & Services",
      qualification: "HSSC / B.Com",
      experience: "Experience preferred",
      website: "—",
      salary: "As per industry standards",
    },

    {
      id: 35,
      date: "05-12-2025",
      title: "Front Office Associate",
      location: "Miramar, Goa",
      phone: "9225904977",
      email: "hr@manasdevelopers.com",
      company: "Clube Tennis De Gaspar Dias",
      qualification: "Graduate",
      experience: "0–1 year",
      website: "—",
      salary: "As per industry standards",
    },

    {
      id: 36,
      date: "05-12-2025",
      title: "Accounts Assistant",
      location: "Verna, Goa",
      phone: "9657003868",
      email: "—",
      company: "Terra Aqua Sales Corporation",
      qualification: "HSSC / B.Com",
      experience: "Experience preferred",
      website: "—",
      salary: "As per industry standards",
    },

    {
      id: 37,
      date: "05-12-2025",
      title: "Service Associate",
      location: "Porvorim / Panaji, Goa",
      phone: "8668359426",
      email: "—",
      company: "INOX Cinema",
      qualification: "10th / 12th / Any Graduate",
      experience: "Fresher",
      website: "—",
      salary: "₹15,000",
    },

    {
      id: 38,
      date: "05-12-2025",
      title: "Corporate Relationship Officer",
      location: "Panjim, Goa",
      phone: "9373163211",
      email: "hr@goamiles.com",
      company: "GoaMiles",
      qualification: "Graduate",
      experience: "1–3 years",
      website: "—",
      salary: "As per industry standards",
    },

    {
      id: 39,
      date: "06-12-2025",
      title: "Accountant",
      location: "Panjim",
      phone: "9876543201",
      email: "hr@abcpvtltd.com",
      company: "ABC Pvt Ltd",
      qualification: "B.Com",
      experience: "1–2 years",
      website: "https://abcpvtltd.com/careers",
      salary: "12,000 – 18,000",
    },

    {
      id: 40,
      date: "06-12-2025",
      title: "Assistant Accountant",
      location: "Mapusa",
      phone: "9822334455",
      email: "careers@xyzenterprises.com",
      company: "XYZ Enterprises",
      qualification: "B.Com",
      experience: "0–1 year",
      website: "https://xyzenterprises.com/jobs",
      salary: "10,000 – 15,000",
    },

    {
      id: 41,
      date: "06-12-2025",
      title: "Back Office Executive",
      location: "Margao",
      phone: "7766558899",
      email: "jobs@techworld.com",
      company: "TechWorld Solutions",
      qualification: "Any Graduate",
      experience: "1 year",
      website: "https://techworld.com/apply",
      salary: "10,000 – 14,000",
    },

    {
      id: 42,
      date: "06-12-2025",
      title: "Billing Executive",
      location: "Vasco",
      phone: "9833445566",
      email: "apply@globalinfotech.com",
      company: "Global Infotech",
      qualification: "Any Graduate",
      experience: "1–3 years",
      website: "https://globalinfotech.com/careers",
      salary: "12,000 – 16,000",
    },

    {
      id: 43,
      date: "06-12-2025",
      title: "Cashier",
      location: "Panjim",
      phone: "8899001122",
      email: "hr@citymart.in",
      company: "City Mart",
      qualification: "12th Pass",
      experience: "0–1 year",
      website: "https://citymart.in/jobs",
      salary: "10,000 – 13,000",
    },

    {
      id: 44,
      date: "06-12-2025",
      title: "Computer Operator",
      location: "Mapusa",
      phone: "9988776655",
      email: "support@brightfuture.com",
      company: "Bright Future Services",
      qualification: "Any Graduate",
      experience: "0–2 years",
      website: "https://brightfuture.com/apply",
      salary: "10,000 – 15,000",
    },

    {
      id: 45,
      date: "06-12-2025",
      title: "Customer Service Executive",
      location: "Panjim",
      phone: "9123456780",
      email: "jobs@skylinecomm.com",
      company: "Skyline Communications",
      qualification: "Any Graduate",
      experience: "1–3 years",
      website: "https://skylinecomm.com/careers",
      salary: "12,000 – 18,000",
    },

    {
      id: 46,
      date: "06-12-2025",
      title: "Data Entry Operator",
      location: "Margao",
      phone: "9090901122",
      email: "info@rapiddatasys.com",
      company: "Rapid Data Systems",
      qualification: "12th Pass",
      experience: "0–1 year",
      website: "https://rapiddatasys.com/apply",
      salary: "8,000 – 12,000",
    },

    {
      id: 47,
      date: "06-12-2025",
      title: "Digital Marketing Executive",
      location: "Panjim",
      phone: "8877665544",
      email: "careers@digitalspark.in",
      company: "Digital Spark Pvt Ltd",
      qualification: "Any Graduate",
      experience: "1–2 years",
      website: "https://digitalspark.in/jobs",
      salary: "12,000 – 20,000",
    },

    {
      id: 48,
      date: "06-12-2025",
      title: "Front Desk Executive",
      location: "Candolim",
      phone: "9988443322",
      email: "hr@hotelprime.com",
      company: "Hotel Prime",
      qualification: "12th Pass",
      experience: "0–1 year",
      website: "https://hotelprime.com/careers",
      salary: "10,000 – 15,000",
    },

    {
      id: 49,
      date: "06-12-2025",
      title: "Graphic Designer",
      location: "Panjim",
      phone: "9099551133",
      email: "work@creativestudio.in",
      company: "Creative Studio",
      qualification: "Any Graduate",
      experience: "1–3 years",
      website: "https://creativestudio.in/apply",
      salary: "12,000 – 18,000",
    },

    {
      id: 50,
      date: "08-12-2025",
      title: "HR Executive",
      location: "Panjim",
      phone: "7744889966",
      email: "jobs@hrhub.com",
      company: "HR Hub Consultancy",
      qualification: "Any Graduate",
      experience: "1–2 years",
      website: "https://hrhub.com/jobs",
      salary: "12,000 – 20,000",
    },
    {
      id: 51,
      date: "08-12-2025",
      title: "Marketing Executive",
      location: "Mapusa",
      phone: "8007006005",
      email: "apply@marketmasters.in",
      company: "Market Masters",
      qualification: "Any Graduate",
      experience: "1 year",
      website: "https://marketmasters.in/careers",
      salary: "12,000 – 18,000",
    },

    {
      id: 52,
      date: "08-12-2025",
      title: "Office Assistant",
      location: "Panjim",
      phone: "9022334455",
      email: "contact@officepro.in",
      company: "OfficePro Pvt Ltd",
      qualification: "12th Pass",
      experience: "0–1 year",
      website: "https://officepro.in/apply",
      salary: "10,000 – 14,000",
    },

    {
      id: 53,
      date: "08-12-2025",
      title: "Receptionist",
      location: "Calangute",
      phone: "7788996655",
      email: "hr@welcomegrp.com",
      company: "Welcome Group",
      qualification: "12th Pass",
      experience: "0–1 year",
      website: "https://welcomegrp.com/jobs",
      salary: "10,000 – 15,000",
    },

    {
      id: 54,
      date: "08-12-2025",
      title: "Sales Executive",
      location: "Panjim",
      phone: "8111223344",
      email: "jobs@salespro.in",
      company: "SalesPro Pvt Ltd",
      qualification: "Any Graduate",
      experience: "1–3 years",
      website: "https://salespro.in/careers",
      salary: "12,000 – 20,000",
    },

    {
      id: 55,
      date: "08-12-2025",
      title: "Senior Accountant",
      location: "Panjim",
      phone: "9000012345",
      email: "accounts@fincorp.com",
      company: "FinCorp Pvt Ltd",
      qualification: "B.Com",
      experience: "2–4 years",
      website: "https://fincorp.com/apply",
      salary: "15,000 – 25,000",
    },

    {
      id: 56,
      date: "08-12-2025",
      title: "Store Keeper",
      location: "Margao",
      phone: "9911223344",
      email: "careers@storemax.in",
      company: "StoreMax Pvt Ltd",
      qualification: "12th Pass",
      experience: "1–2 years",
      website: "https://storemax.in/jobs",
      salary: "10,000 – 15,000",
    },

    {
      id: 57,
      date: "08-12-2025",
      title: "Telecaller",
      location: "Panjim",
      phone: "8811223344",
      email: "apply@callconnect.in",
      company: "CallConnect Services",
      qualification: "12th Pass",
      experience: "0–1 year",
      website: "https://callconnect.in/apply",
      salary: "8,000 – 12,000",
    },

    {
      id: 58,
      date: "09-12-2025",
      title: "Typist",
      location: "Panjim",
      phone: "7711223344",
      email: "jobs@typingworks.in",
      company: "TypingWorks Pvt Ltd",
      qualification: "12th Pass",
      experience: "0–1 year",
      website: "https://typingworks.in/careers",
      salary: "8,000 – 12,000",
    },

    {
      id: 59,
      date: "09-12-2025",
      title: "Web Designer",
      location: "Panjim",
      phone: "9090909090",
      email: "hr@webcraft.in",
      company: "WebCraft Solutions",
      qualification: "Any Graduate",
      experience: "1–3 years",
      website: "https://webcraft.in/apply",
      salary: "12,000 – 20,000",
    },

    {
      id: 60,
      date: "09-12-2025",
      title: "Scanning / Computer Operator",
      location: "Panjim (Near Bus)",
      phone: "7840029853",
      email: "Send CV → +91 7840029853 (phone / WhatsApp)",
      company: "Scanning / Document Service (Local vendor)",
      qualification:
        "Computer knowledge (Scanning); 10th pass for Tagging/Preparation",
      experience: "Freshers welcome / experience preferred",
      website: "WhatsApp / phone → 7840029853",
      salary: "₹10,000–13,000 (typical for scanning roles)",
    },

    {
      id: 61,
      date: "09-12-2025",
      title: "Document Preparation Operator",
      location: "Panjim (Near Bus)",
      phone: "7840029853",
      email: "Send CV → +91 7840029853 (phone / WhatsApp)",
      company: "Scanning / Document Service (Local vendor)",
      qualification:
        "Computer knowledge (Scanning); 10th pass for Tagging/Preparation",
      experience: "Freshers welcome / experience preferred",
      website: "WhatsApp / phone → 7840029853",
      salary: "₹10,000–13,000",
    },

    {
      id: 62,
      date: "09-12-2025",
      title: "Tagging Operator",
      location: "Panjim (Near Bus)",
      phone: "7840029853",
      email: "Send CV → +91 7840029853 (phone / WhatsApp)",
      company: "Scanning / Document Service (Local vendor)",
      qualification: "10th pass (Tagging); basic computer literacy",
      experience: "Freshers welcome / experience preferred",
      website: "WhatsApp / phone → 7840029853",
      salary: "₹10,000–13,000",
    },

    {
      id: 63,
      date: "10-12-2025",
      title: "Quality Check Operator",
      location: "Panjim (Near Bus)",
      phone: "7840029853",
      email: "Send CV → +91 7840029853 (phone / WhatsApp)",
      company: "Scanning / Document Service (Local vendor)",
      qualification: "Basic QC / attention to detail (any education)",
      experience: "Freshers welcome / experience preferred",
      website: "WhatsApp / phone → 7840029853",
      salary: "₹10,000–13,000",
    },

    {
      id: 64,
      date: "10-12-2025",
      title: "Accounts Executive - Yelow Door Luxury Interior",
      location: "Margao",
      phone: "7378810448 / (wa)",
      email: "hr@yelowdoor.com or wa.me/7378810448",
      company: "Yelow Door Luxury Interior",
      qualification: "B.Com / 3–5 years accounts experience",
      experience: "3–5 years",
      website: "hr@yelowdoor.com / wa.me/7378810448",
      salary: "(See posting) typical industry rates",
    },

    {
      id: 65,
      date: "10-12-2025",
      title: "Office Assistant - Distribution Agency",
      location: "Santa Cruz, Goa",
      phone: "7741917582",
      email: "WhatsApp CV → 7741917582",
      company: "Distribution Agency (FMCG)",
      qualification: "Graduate; basic MS Office",
      experience: "Freshers welcome",
      website: "WhatsApp → 7741917582",
      salary: "₹15,000 / month (as posted for similar role)",
    },

    {
      id: 66,
      date: "10-12-2025",
      title:
        "Apprentice Trainee (ITI Electrician) - Ion Exchange (Plant 1, Verna)",
      location: "Verna, Goa",
      phone: "8378004712",
      email: "omkar.shenai@ionexchange.co.in / 8378004712",
      company: "Ion Exchange (Plant 1, Verna)",
      qualification: "ITI Electrician",
      experience: "0–1 years (Apprentice)",
      website: "omkar.shenai@ionexchange.co.in / 8378004712",
      salary: "— (apprentice stipend varies)",
    },

    {
      id: 67,
      date: "10-12-2025",
      title: "Commi Chef I/II/III - Phoenixx Casino (Continental & Indian)",
      location: "Candolim, Goa",
      phone: "9960006588 / 9960008075",
      email: "HR WhatsApp 9960006588 / send CV to HR phone",
      company: "Phoenixx Casino",
      qualification: "Culinary qualification / hospitality experience",
      experience: "1–5 years (chef roles vary)",
      website: "HR WhatsApp 9960006588 / 9960008075",
      salary: "— (chef CTC varies by level)",
    },

    {
      id: 68,
      date: "10-12-2025",
      title: "Assistant Manager - HR Generalist (Panjim)",
      location: "Panjim, Goa",
      phone: "9552544745",
      email: "Hr1@alconvictorgroup.com / 9552544745",
      company: "Alcon Victor Group (or hiring org)",
      qualification: "BBA/MBA or BBA preferred for HR Generalist",
      experience: "5–7 years (Assistant Manager HR)",
      website: "Hr1@alconvictorgroup.com / 9552544745",
      salary: "CTC as per industry (senior HR)",
    },

    {
      id: 69,
      date: "10-12-2025",
      title: "Architect (Civil) - Tabra Realty LLP (Mapusa)",
      location: "Mapusa, Goa",
      phone: "7774010578",
      email: "hr.fariahospitality@gmail.com / 7774010578",
      company: "Tabra Realty LLP",
      qualification: "Diploma / Degree in Architecture / Civil",
      experience: "Prior experience preferred",
      website:
        "hr.fariahospitality@gmail.com / https://wa.me/qr/BKHZKAHNMRBFJ1",
      salary: "— (as per company)",
    },

    {
      id: 70,
      date: "11-12-2025",
      title: "Accounts Executive - Myles High Health Concepts (Patto Panjim)",
      location: "Patto Panjim, Goa",
      phone: "7875447484 / 8308838810",
      email: "hr@myleshigh.in / hra@myleshigh.in",
      company: "Myles High Health Concepts Pvt Ltd",
      qualification: "Any Graduate / Accounts qualification",
      experience: "0–3 years (accounts exec)",
      website: "hr@myleshigh.in / hra@myleshigh.in",
      salary: "— (as per company)",
    },

    {
      id: 71,
      date: "11-12-2025",
      title: "Duty Manager / Team Leader - INOX (Panaji/Porvorim)",
      location: "Panaji / Porvorim, Goa",
      phone: "8668359426",
      email: "Send CV → +91 8668359426",
      company: "INOX Cinema",
      qualification: "Graduate / Hotel management degree (preferred)",
      experience: "3–5 years (Duty Manager/Team Leader)",
      website: "CV → 8668359426",
      salary: "— (as per INOX listing)",
    },

    {
      id: 72,
      date: "11-12-2025",
      title: "Executive Assistant to MD/VP (Corlim, Old Goa)",
      location: "Corlim, Old Goa",
      phone: "7499918377",
      email: "placements@jobexperthr.com",
      company: "(Recruiter / Jobexperthr posting)",
      qualification: "Bachelor’s degree; strong communication & MS Office",
      experience: "3–7 years (Exec Asst)",
      website: "placements@jobexperthr.com / 7499918377",
      salary: "₹20,000–40,000 (Exec Asst salary range)",
    },

    {
      id: 73,
      date: "11-12-2025",
      title: "GSA - Housekeeping (Lemon Tree, Anjuna)",
      location: "Anjuna, Goa",
      phone: "8956958099",
      email: "hrm.lthan@lemontreehotels.com / WhatsApp 8956958099",
      company: "Lemon Tree Hotels (Anjuna)",
      qualification: "Relevant hospitality diploma / experience (GSA roles)",
      experience: "Freshers / entry-level or hospitality trainees",
      website: "hrm.lthan@lemontreehotels.com / 8956958099",
      salary: "— (entry-level GSA)",
    },

    {
      id: 74,
      date: "11-12-2025",
      title: "GSA - F&B Service (Lemon Tree, Anjuna)",
      location: "Anjuna, Goa",
      phone: "8956958099",
      email: "hrm.lthan@lemontreehotels.com / WhatsApp 8956958099",
      company: "Lemon Tree Hotels (Anjuna)",
      qualification: "Relevant hospitality diploma / experience",
      experience: "Freshers / entry-level or hospitality trainees",
      website: "hrm.lthan@lemontreehotels.com / 8956958099",
      salary: "— (entry-level GSA)",
    },

    {
      id: 75,
      date: "11-12-2025",
      title: "GSA - Front Office (Lemon Tree, Anjuna)",
      location: "Anjuna, Goa",
      phone: "8956958099",
      email: "hrm.lthan@lemontreehotels.com / WhatsApp 8956958099",
      company: "Lemon Tree Hotels (Anjuna)",
      qualification: "Relevant hospitality diploma / experience",
      experience: "Freshers / entry-level or hospitality trainees",
      website: "hrm.lthan@lemontreehotels.com / 8956958099",
      salary: "— (entry-level GSA)",
    },

    {
      id: 76,
      date: "11-12-2025",
      title: "Project Site Coordinator - Pai Kane Group (Mapusa)",
      location: "Mapusa, Goa",
      phone: "—",
      email: "humancapital@paikane.com",
      company: "Pai Kane Group",
      qualification: "Diploma / BE (Mech/Electrical) preferred",
      experience: "1–3 years (site coordinator)",
      website: "humancapital@paikane.com",
      salary: "— (as per posting)",
    },

    {
      id: 77,
      date: "12-12-2025",
      title: "Receptionist - Sharayu Automobile (Colvale)",
      location: "Colvale, Goa",
      phone: "8888807290",
      email: "hr@sharayutoyota.in / 8888807290",
      company: "Sharayu Automobile (Sharayu Toyota)",
      qualification: "XII / Graduate (receptionist)",
      experience: "0–1 year (Receptionist)",
      website: "hr@sharayutoyota.in / 8888807290",
      salary: "₹15,000–17,000 (est. receptionist)",
    },

    {
      id: 78,
      date: "12-12-2025",
      title: "Driver - Sharayu Automobile (Colvale)",
      location: "Colvale, Goa",
      phone: "8888807290",
      email: "hr@sharayutoyota.in / 8888807290",
      company: "Sharayu Automobile (Sharayu Toyota)",
      qualification: "X / XII (driver)",
      experience: "— (Driver - experience preferred)",
      website: "hr@sharayutoyota.in / 8888807290",
      salary: "₹17,000–19,000 + pick & drop (driver)",
    },

    {
      id: 79,
      date: "12-12-2025",
      title: "Counter Sales Executive - Shoppers Stop (Maldive Goa, Panaji)",
      location: "Maldive Goa / Panaji",
      phone: "8806462851",
      email: "Vishal Awate WhatsApp +91 8806462851",
      company: "Shoppers Stop (Manpower listing)",
      qualification: "Retail experience (1–2 yrs) in premium segments",
      experience: "1–2 years (retail / premium)",
      website: "Vishal Awate (WhatsApp) 8806462851",
      salary: "₹22,000–27,000 (counter sales - posted)",
    },

    {
      id: 80,
      date: "12-12-2025",
      title: "Event Executive - (Panjim)",
      location: "MOPA Airport Area / Patto, Panjim",
      phone: "9373163211",
      email: "hr@goamiles.com / 9373163211",
      company: "Event Company (Panjim)",
      qualification: "Event planning / 1 year experience",
      experience: "1+ years (event exec)",
      website: "hr@goamiles.com / 9373163211",
      salary: "— (event role)",
    },

    {
      id: 81,
      date: "12-12-2025",
      title: "Guest Co-ordinator - MOPA Airport Area (GoaMiles)",
      location: "Verna, Goa",
      phone: "9922934504",
      email: "Send CV → 9922934504",
      company: "GoaMiles",
      qualification: "Graduate / customer service skills",
      experience: "Rotational shifts / experience preferred",
      website: "Send CV → 9922934504",
      salary: "₹20,000 (GoaMiles CTC posted earlier)",
    },

    {
      id: 82,
      date: "12-12-2025",
      title: "Male Nurse (BSc/GNM) - Verna",
      location: "Benaulim, Goa",
      phone: "9552554722",
      email: "hrm.frbg@fortunehotels.in / 9552554722",
      company: "Fortune Resort Benaulim",
      qualification: "BSC Nursing / GNM",
      experience: "0–2 years (nurse depending)",
      website: "hrm.frbg@fortunehotels.in / 9552554722",
      salary: "₹20,000 (male nurse gross as posted)",
    },

    {
      id: 83,
      date: "12-12-2025",
      title: "Internal Auditor / F&B Controller - Fortune Resort (Benaulim)",
      location: "Panjim, Goa",
      phone: "7507392559",
      email: "Send CV to 7507392559",
      company: "Cafe (Local) - Panjim",
      qualification: "CA inter / Commerce grad / 2 yrs hotel exp for auditor",
      experience: "2 years (Internal Auditor / F&B Controller)",
      website: "Send CV → 7507392559",
      salary:
        "₹25,000–30,000 (Maintenance In-Charge earlier – similar hospitality rates)",
    },

    {
      id: 84,
      date: "12-12-2025",
      title: "Female Cashier - Cafe (Morning Shift) - Panjim",
      location: "Panjim, Goa",
      phone: "7507392559",
      email: "Send CV to 7507392559",
      company: "Cafe (Local) - Panjim",
      qualification: "10th/12th (cashier) - female",
      experience: "Freshers can apply",
      website: "Send CV → 7507392559",
      salary: "₹13,000 (cashier posted 13k)",
    },

    {
      id: 85,
      date: "12-12-2025",
      title: "Female Cashier - Cafe (Evening Shift) - Panjim",
      location: "Arpora, Goa",
      phone: "9923623596",
      email: "rmdhrgoa@gmail.com / 9923623596",
      company: "3★ Resort (Arpora)",
      qualification: "10th/12th (cashier) - female",
      experience: "Freshers can apply",
      website: "rmdhrgoa@gmail.com / 9923623596",
      salary: "₹13,000 (cashier posted 13k)",
    },

    {
      id: 86,
      date: "12-12-2025",
      title: "Welder - 3★ Resort (Arpora)",
      location: "Panjim, Goa",
      phone: "9067666838",
      email: "hrm@eleva.in / 9067666838",
      company: "Eleva Elevators & Escalators Pvt Ltd",
      qualification: "Welding skill / trade certificate (preferred)",
      experience: "Freshers / any",
      website: "hrm@eleva.in / 9067666838",
      salary: "— (welder salary depends)",
    },

    {
      id: 87,
      date: "12-12-2025",
      title: "Purchase Executive - Eleva Elevators & Escalators (Panjim)",
      location: "",
      phone: "",
      email: "",
      company: "",
      qualification: "Any Graduate (Purchase Executive)",
      experience: "3 years (Purchase)",
      website: "",
      salary: "₹3,81,600 p.a. (Eleva package listed earlier)",
    },

    {
      id: 88,
      date: "13-12-2025",
      title: "IT Executive",
      location: "Taleigao, Goa",
      phone: "—",
      email: "riya@creativehrsolutions.in",
      company: "Creative HR Solutions (Client Company)",
      qualification: "Degree / Diploma in IT or Hardware",
      experience: "1–3 years",
      website: "riya@creativehrsolutions.in",
      salary: "Up to ₹25,000 / month",
    },

    {
      id: 89,
      date: "13-12-2025",
      title: "Store Manager",
      location: "Panjim, Goa",
      phone: "—",
      email: "riya@creativehrsolutions.in",
      company: "Creative HR Solutions (Client Company)",
      qualification: "Graduate (Retail / FMCG preferred)",
      experience: "1–2 years",
      website: "riya@creativehrsolutions.in",
      salary: "Up to ₹25,000 / month",
    },

    {
      id: 90,
      date: "13-12-2025",
      title: "CNC Machine Operator (Aluminium Fabrication)",
      location: "Tuem, Pernem, Goa",
      phone: "7558201224",
      email: "akshamett@gmail.com",
      company: "Aluminium Fabrication Unit",
      qualification: "ITI / CNC Machining Certification",
      experience: "2+ years",
      website: "akshamett@gmail.com / 7558201224",
      salary: "Negotiable",
    },

    {
      id: 91,
      date: "13-12-2025",
      title: "HR Manager (Automobile Dealer)",
      location: "South Goa",
      phone: "—",
      email: "justino12312@gmail.com",
      company: "Leading Automobile Dealer (South Goa)",
      qualification: "MBA / Graduate (HR)",
      experience: "5–8+ years (Senior HR)",
      website: "justino12312@gmail.com",
      salary: "As per industry standards",
    },

    {
      id: 92,
      date: "13-12-2025",
      title: "Service Associate - INOX Cinema (Porvorim)",
      location: "Porvorim, Goa",
      phone: "7719085444",
      email: "Send CV → 77190 85444",
      company: "INOX Cinema",
      qualification: "12th Pass / Any Graduate",
      experience: "Freshers can apply",
      website: "CV via WhatsApp 77190 85444",
      salary: "As per industry standards",
    },

    {
      id: 93,
      date: "13-12-2025",
      title: "Product Development Executive",
      location: "Mapusa, Goa",
      phone: "—",
      email: "humancapital@paikane.com",
      company: "Pai Kane Group",
      qualification: "BE / BTech (Mechanical / Electrical / Industrial)",
      experience: "1–3 years preferred",
      website: "humancapital@paikane.com",
      salary: "As per industry standards",
    },

    {
      id: 94,
      date: "13-12-2025",
      title: "Junior Engineer – Civil (Luxury Villas)",
      location: "North Goa",
      phone: "9225904977",
      email: "hr@manasdevelopers.com (WhatsApp only)",
      company: "Manas Developers (Luxury Villas)",
      qualification: "Diploma / Degree in Civil Engineering",
      experience: "7–8 years (mandatory)",
      website: "WhatsApp only +919225904977",
      salary: "High-end luxury project role",
    },

    {
      id: 95,
      date: "13-12-2025",
      title: "Jio Point Manager",
      location: "Ponda, Goa",
      phone: "8411027621",
      email: "trupti.vernekar@ril.com",
      company: "Reliance Jio",
      qualification: "Minimum 12th Pass",
      experience: "0–1 years",
      website: "trupti.vernekar@ril.com / 8411027621",
      salary: "₹3.4 LPA + incentives + petrol",
    },

    {
      id: 96,
      date: "13-12-2025",
      title: "Spa Therapist",
      location: "Morjim, Goa",
      phone: "9112287209",
      email: "hr.morjim@theacaciahotels.com / WhatsApp 9112287209",
      company: "The Acacia Resort",
      qualification: "Spa Certification preferred",
      experience: "Experience preferred",
      website: "hr.morjim@theacaciahotels.com",
      salary: "As per industry standards",
    },

    {
      id: 97,
      date: "13-12-2025",
      title: "Spa Executive",
      location: "Morjim, Goa",
      phone: "9112287209",
      email: "hr.morjim@theacaciahotels.com / WhatsApp 9112287209",
      company: "The Acacia Resort",
      qualification: "Spa / Hospitality Qualification",
      experience: "Experience preferred",
      website: "hr.morjim@theacaciahotels.com",
      salary: "As per industry standards",
    },

    {
      id: 98,
      date: "13-12-2025",
      title: "Sales & Reservation Manager",
      location: "Morjim, Goa",
      phone: "9112287209",
      email: "hr.morjim@theacaciahotels.com / WhatsApp 9112287209",
      company: "The Acacia Resort",
      qualification: "Graduate / Hospitality / Sales background",
      experience: "2–5 years",
      website: "hr.morjim@theacaciahotels.com",
      salary: "As per industry standards",
    },

    {
      id: 99,
      date: "13-12-2025",
      title: "Accounts Executive - Yelow Door Luxury Interior",
      location: "Margao, Goa",
      phone: "7378810448",
      email: "hr@yelowdoor.com / wa.me/7378810448",
      company: "Yelow Door Luxury Interior",
      qualification: "B.Com / Accounts background",
      experience: "3–5 years",
      website: "hr@yelowdoor.com",
      salary: "As per industry",
    },

    {
      id: 100,
      date: "13-12-2025",
      title: "CNC Machine Operator (Aluminium Fabrication)",
      location: "Tuem, Pernem, Goa",
      phone: "7558201224",
      email: "akshamett@gmail.com",
      company: "Aluminium Fabrication Unit",
      qualification: "ITI / CNC related trade",
      experience: "2+ years",
      website: "akshamett@gmail.com",
      salary: "Negotiable",
    },

    {
      id: 101,
      date: "13-12-2025",
      title: "School Teacher",
      location: "Calangute, Goa",
      phone: "7558201224 / 7350160498",
      email: "Call / WhatsApp 7558201224",
      company: "El Shaddai School",
      qualification: "B.Ed / D.Ed / Graduate",
      experience: "Experience preferred",
      website: "Call / WhatsApp 7558201224",
      salary: "₹15,000 – ₹17,000",
    },

    {
      id: 102,
      date: "13-12-2025",
      title: "Interior Designer",
      location: "Margao, Goa",
      phone: "7558201224",
      email: "Call / WhatsApp 7558201224",
      company: "Mettalica (Veranties Franchise)",
      qualification: "Interior Design qualification",
      experience: "Fresher / Experienced",
      website: "Call / WhatsApp 7558201224",
      salary: "Negotiable",
    },

    {
      id: 103,
      date: "15-12-2025",
      title: "Accountant (Jewellery Store)",
      location: "Mapusa, Goa",
      phone: "7066067839",
      email: "Call 7066067839",
      company: "Jewellery Store (Mapusa)",
      qualification: "B.Com / Accounting background",
      experience: "Experience required (Female only)",
      website: "Call 7066067839",
      salary: "As per jewellery industry",
    },

    {
      id: 104,
      date: "15-12-2025",
      title: "Cashier",
      location: "Porvorim / Panaji / Margao – Goa",
      phone: "7719085444",
      email: "Send CV to 77190 85444",
      company: "Retail / Billing Operations (Goa)",
      qualification: "12th Pass / Any Graduate",
      experience: "Freshers can apply",
      website: "WhatsApp 77190 85444",
      salary: "As per industry standards",
    },

    {
      id: 105,
      date: "15-12-2025",
      title: "Billing Executive",
      location: "Porvorim / Panaji / Margao – Goa",
      phone: "7719085444",
      email: "Send CV to 77190 85444",
      company: "Retail / Billing Operations (Goa)",
      qualification: "12th Pass / Any Graduate",
      experience: "Minimum 1 year",
      website: "WhatsApp 77190 85444",
      salary: "As per industry standards",
    },

    {
      id: 106,
      date: "15-12-2025",
      title: "Electrician",
      location: "Sada, Vasco – Goa",
      phone: "7499918377",
      email: "placements@jobexperthr.com",
      company: "Electrical Contracting Company",
      qualification: "ITI – Electrician Trade",
      experience: "1–2 years",
      website: "placements@jobexperthr.com",
      salary: "₹20,000 in hand / month",
    },

    {
      id: 107,
      date: "15-12-2025",
      title: "Chartered Accountant (CA)",
      location: "Goa",
      phone: "7499918377",
      email: "placements@jobexperthr.com",
      company: "Corporate / Finance Organisation",
      qualification: "Chartered Accountant (CA)",
      experience: "5–10 years",
      website: "placements@jobexperthr.com",
      salary: "Senior CA role – as per industry",
    },

    {
      id: 108,
      date: "15-12-2025",
      title: "Executive Assistant to MD/VP",
      location: "Corlim, Old Goa",
      phone: "7499918377",
      email: "placements@jobexperthr.com",
      company: "Corporate Office",
      qualification: "Bachelor’s Degree",
      experience: "3–7 years",
      website: "placements@jobexperthr.com",
      salary: "₹20,000 – ₹50,000",
    },

    {
      id: 109,
      date: "15-12-2025",
      title: "HR Assistant (Hospitality)",
      location: "Goa",
      phone: "8600027887",
      email: "WhatsApp CV → 8600027887",
      company: "Hospitality Company",
      qualification: "HR / Hospitality background",
      experience: "Hospitality experience preferred",
      website: "WhatsApp 8600027887",
      salary: "As per experience",
    },

    {
      id: 110,
      date: "15-12-2025",
      title: "Senior Graphic Designer",
      location: "Goa",
      phone: "8600027887",
      email: "WhatsApp CV & Portfolio → 8600027887",
      company: "Creative / Marketing Company",
      qualification: "Graphic Design / Visual Communication",
      experience: "2–5 years",
      website: "WhatsApp 8600027887",
      salary: "As per experience",
    },

    {
      id: 111,
      date: "15-12-2025",
      title: "Photographer (Real Estate & Hospitality)",
      company: "Real Estate & Hospitality Firm",
      location: "Goa",
      phone: "8600027887",
      email: "WhatsApp CV & Portfolio → 8600027887",
      qualification: "Photography / Media background",
      experience: "2–3 years",
      website: "WhatsApp 8600027887",
      salary: "As per experience",
    },

    {
      id: 112,
      date: "15-12-2025",
      title: "Accounts Executive",
      company: "Accounts / Finance Firm",
      location: "Campal, Panjim – Goa",
      phone: "8600027887",
      email: "WhatsApp CV → 8600027887",
      qualification: "B.Com / Accounting background",
      experience: "2–3 years",
      website: "WhatsApp 8600027887",
      salary: "As per experience",
    },

    {
      id: 113,
      date: "15-12-2025",
      title: "Executive Assistant to Director",
      company: "Creative HR Solutions (Client Company)",
      location: "Sancoale, Vasco – Goa",
      phone: "—",
      email: "riya@creativehrsolutions.in",
      qualification: "Graduate (any stream)",
      experience: "1–3 years",
      website: "riya@creativehrsolutions.in",
      salary: "Up to ₹25,000 / month",
    },

    {
      id: 114,
      date: "15-12-2025",
      title: "Data Entry Executive",
      company: "Sales / Operations Company",
      location: "Porvorim – Goa",
      phone: "7058387273",
      email: "Send CV → 70583 87273",
      qualification: "Any Graduate (Excel / Sheets knowledge)",
      experience: "Experience preferred",
      website: "WhatsApp 70583 87273",
      salary: "Based on experience",
    },

    {
      id: 115,
      date: "15-12-2025",
      title: "Office Assistant",
      company: "Escala Realty – Yes Migration",
      location: "Dona Paula – Goa",
      phone: "—",
      email: "Contact Escala Realty / Yes Migration",
      qualification: "Any Graduate",
      experience: "Freshers / Experience",
      website: "Escala Realty – Yes Migration",
      salary: "As per experience",
    },

    {
      id: 116,
      date: "15-12-2025",
      title: "Business Development Executive",
      company: "Escala Realty – Yes Migration",
      location: "Dona Paula – Goa",
      phone: "—",
      email: "Contact Escala Realty / Yes Migration",
      qualification: "Any Graduate / MBA preferred",
      experience: "1–3 years preferred",
      website: "Escala Realty – Yes Migration",
      salary: "As per experience",
    },

    {
      id: 117,
      date: "16-12-2025",
      title: "Graphic Designer (Freelancer)",
      company: "Xerviz Wlobal",
      location: "Margao",
      phone: "9150805080",
      email: "hr@xervizwlobal.com",
      qualification: "Graphic Design / Visual Arts",
      experience: "1–2 years",
      website: "hr@xervizwlobal.com",
      salary: "Freelance / Project based",
    },

    {
      id: 118,
      date: "16-12-2025",
      title: "Videographer (Freelancer)",
      company: "Xerviz Wlobal",
      location: "Margao",
      phone: "9150805080",
      email: "hr@xervizwlobal.com",
      qualification: "Videography / Media",
      experience: "Basic experience",
      website: "hr@xervizwlobal.com",
      salary: "Freelance / Project based",
    },

    {
      id: 119,
      date: "16-12-2025",
      title: "Video Editor (Freelancer)",
      company: "Xerviz Wlobal",
      location: "Margao",
      phone: "9150805080",
      email: "hr@xervizwlobal.com",
      qualification: "Video Editing / Media",
      experience: "Quick editing skills",
      website: "hr@xervizwlobal.com",
      salary: "Freelance / Project based",
    },

    {
      id: 120,
      date: "16-12-2025",
      title: "Data Analyst Intern (Non-Technical)",
      company: "Xerviz Wlobal",
      location: "Margao",
      phone: "9150805080",
      email: "hr@xervizwlobal.com",
      qualification: "Graduate (Any stream)",
      experience: "Fresher",
      website: "hr@xervizwlobal.com",
      salary: "Stipend + Internship Letter",
    },

    {
      id: 121,
      date: "16-12-2025",
      title: "Customer Support Executive (US Shift – BPO)",
      company: "BPO – Margao",
      location: "Margao",
      phone: "9150805080",
      email: "hr@xervizwlobal.com",
      qualification: "Any Graduate",
      experience: "Freshers / Experience",
      website: "hr@xervizwlobal.com",
      salary: "US Shift",
    },

    {
      id: 122,
      date: "16-12-2025",
      title: "CRE / Receptionist – Automobile",
      company: "Caculo Cars Pvt Ltd",
      location: "Verna",
      phone: "9765550252",
      email: "hr@coastalhonda.net",
      qualification: "12th / Graduate",
      experience: "0–3 years",
      website: "hr@coastalhonda.net",
      salary: "₹18k–23k",
    },

    {
      id: 123,
      date: "16-12-2025",
      title: "Service Advisor – Automobile",
      company: "Caculo Cars Pvt Ltd",
      location: "Verna",
      phone: "9765550252",
      email: "hr@coastalhonda.net",
      qualification: "ITI / Diploma – Auto / Mechanical",
      experience: "1–3 years",
      website: "hr@coastalhonda.net",
      salary: "₹18k–25k",
    },

    {
      id: 124,
      date: "16-12-2025",
      title: "Service Technician – Automobile",
      company: "Caculo Cars Pvt Ltd",
      location: "Verna",
      phone: "9765550252",
      email: "hr@coastalhonda.net",
      qualification: "ITI / Diploma – Auto / Mechanical",
      experience: "2–8 years",
      website: "hr@coastalhonda.net",
      salary: "₹17k–27k",
    },

    {
      id: 125,
      date: "16-12-2025",
      title: "Sales Consultant – Automobile",
      company: "Caculo Cars Pvt Ltd",
      location: "Verna / Panjim",
      phone: "9765550252",
      email: "hr@coastalhonda.net",
      qualification: "12th / Graduate + Driving Licence",
      experience: "1–5 years",
      website: "hr@coastalhonda.net",
      salary: "₹18k–30k",
    },

    {
      id: 126,
      date: "16-12-2025",
      title: "Accounts Executive – Automobile",
      company: "Caculo Cars Pvt Ltd",
      location: "Verna",
      phone: "9765550252",
      email: "hr@coastalhonda.net",
      qualification: "B.Com",
      experience: "6 months – 2 years",
      website: "hr@coastalhonda.net",
      salary: "₹17k–22k",
    },

    {
      id: 127,
      date: "16-12-2025",
      title: "Duty Manager / Team Leader – INOX",
      company: "INOX Cinema",
      location: "Panaji / Porvorim",
      phone: "7719085444",
      email: "Send CV → 77190 85444",
      qualification: "Graduate / Hotel Management",
      experience: "3–5 years",
      website: "WhatsApp 77190 85444",
      salary: "As per industry standards",
    },

    {
      id: 128,
      date: "16-12-2025",
      title: "Captain / GSE – INOX",
      company: "INOX Cinema",
      location: "Panaji / Porvorim",
      phone: "7719085444",
      email: "Send CV → 77190 85444",
      qualification: "Graduate / Hotel Management",
      experience: "2–3 years",
      website: "WhatsApp 77190 85444",
      salary: "As per industry standards",
    },

    {
      id: 129,
      date: "16-12-2025",
      title: "Jio Point Assistant Manager",
      company: "Reliance Jio",
      location: "Bicholim",
      phone: "8411027621",
      email: "trupti.vernekar@ril.com",
      qualification: "Minimum 12th",
      experience: "Fresher",
      website: "trupti.vernekar@ril.com",
      salary: "As per industry standards",
    },

    {
      id: 130,
      date: "16-12-2025",
      title: "Housekeeping Trainer & Marketing",
      company: "Hospitality Training Firm",
      location: "Hyderabad",
      phone: "7499918377",
      email: "placements@jobexperthr.com",
      qualification: "Graduate (Marketing preferred)",
      experience: "2–5 years",
      website: "placements@jobexperthr.com",
      salary: "₹22k–30k",
    },

    {
      id: 131,
      date: "16-12-2025",
      title: "Chartered Accountant (CA)",
      company: "Corporate Organisation",
      location: "Goa",
      phone: "7499918377",
      email: "placements@jobexperthr.com",
      qualification: "CA",
      experience: "5–10 years",
      website: "placements@jobexperthr.com",
      salary: "Senior role",
    },

    {
      id: 132,
      date: "16-12-2025",
      title: "Accounts Executive – Myles High Health",
      company: "Myles High Health Concepts Pvt Ltd",
      location: "Patto, Panjim",
      phone: "7875447484 / 8308838810",
      email: "hr@myleshigh.in / hra@myleshigh.in",
      qualification: "B.Com",
      experience: "Experience preferred",
      website: "hr@myleshigh.in",
      salary: "As per industry standards",
    },

    {
      id: 133,
      date: "16-12-2025",
      title: "HR Manager – Automobile Dealer",
      company: "Automobile Dealer (South Goa)",
      location: "South Goa",
      phone: "—",
      email: "justino12312@gmail.com",
      qualification: "MBA / Graduate",
      experience: "Senior HR",
      website: "justino12312@gmail.com",
      salary: "As per industry",
    },

    {
      id: 134,
      date: "16-12-2025",
      title: "Cafe Supervisor",
      company: "Xpanse Cafe",
      location: "Gogol / Margao / Miramar",
      phone: "9130058861",
      email: "hr@xpansecafe.com",
      qualification: "Hospitality background",
      experience: "Experience preferred",
      website: "hr@xpansecafe.com",
      salary: "As per industry standards",
    },

    {
      id: 135,
      date: "16-12-2025",
      title: "Intern – Franchise Development",
      company: "Xpanse Cafe",
      location: "Panjim",
      phone: "9130058861",
      email: "hr@xpansecafe.com",
      qualification: "Any Graduate",
      experience: "Fresher",
      website: "hr@xpansecafe.com",
      salary: "Paid internship",
    },

    {
      id: 136,
      date: "16-12-2025",
      title: "Audio Engineer",
      company: "Live Events Company",
      location: "Panaji",
      phone: "8806014400",
      email: "Send CV → 8806014400",
      qualification: "Relevant technical skill",
      experience: "Experience preferred",
      website: "8806014400",
      salary: "As per industry standards",
    },

    {
      id: 137,
      date: "16-12-2025",
      title: "Lighting / Video / Audio Technician",
      company: "Live Events Company",
      location: "Panaji",
      phone: "8806014400",
      email: "Send CV → 8806014400",
      qualification: "Relevant technical skill",
      experience: "Experience preferred",
      website: "8806014400",
      salary: "As per industry standards",
    },

    {
      id: 138,
      date: "16-12-2025",
      title: "Event Helper / Stagehand",
      company: "Live Events Company",
      location: "Panaji",
      phone: "8806014400",
      email: "Send CV → 8806014400",
      qualification: "Any",
      experience: "Freshers welcome",
      website: "8806014400",
      salary: "As per industry standards",
    },

    {
      id: 139,
      date: "16-12-2025",
      title: "Truck / Tempo Driver",
      company: "Live Events Company",
      location: "Panaji",
      phone: "8806014400",
      email: "Send CV → 8806014400",
      qualification: "Driving licence",
      experience: "Experience preferred",
      website: "8806014400",
      salary: "As per industry standards",
    },

    {
      id: 140,
      date: "16-12-2025",
      title: "Commi-1 (South Indian)",
      company: "Marquis Beach Resort",
      location: "North Goa",
      phone: "7796626446",
      email: "hr.goa@marquishotels.in",
      qualification: "Hotel Management / Culinary",
      experience: "Trade test required",
      website: "hr.goa@marquishotels.in",
      salary: "Salary + Food + Accommodation",
    },

    {
      id: 141,
      date: "16-12-2025",
      title: "Data Entry Executive",
      company: "Sales / Operations Firm",
      location: "Porvorim",
      phone: "7058387273",
      email: "Send CV → 70583 87273",
      qualification: "Any Graduate",
      experience: "Experience preferred",
      website: "7058387273",
      salary: "Based on experience",
    },

    {
      id: 142,
      date: "16-12-2025",
      title: "Chief Accountant",
      company: "YU Hotel",
      location: "Candolim",
      phone: "8208709113",
      email: "hr@yu-hotel.com",
      qualification: "Commerce / Finance",
      experience: "Experience required",
      website: "hr@yu-hotel.com",
      salary: "As per industry standards",
    },

    {
      id: 143,
      date: "16-12-2025",
      title: "Bartender",
      company: "YU Hotel",
      location: "Candolim",
      phone: "8208709113",
      email: "hr@yu-hotel.com",
      qualification: "Bar / Hospitality",
      experience: "Experience required",
      website: "hr@yu-hotel.com",
      salary: "As per industry standards",
    },

    {
      id: 144,
      date: "16-12-2025",
      title: "F&B Associate",
      company: "YU Hotel",
      location: "Candolim",
      phone: "8208709113",
      email: "hr@yu-hotel.com",
      qualification: "Hospitality",
      experience: "Experience required",
      website: "hr@yu-hotel.com",
      salary: "As per industry standards",
    },

    {
      id: 145,
      date: "16-12-2025",
      title: "DCDP – Indian",
      company: "YU Hotel",
      location: "Candolim",
      phone: "8208709113",
      email: "hr@yu-hotel.com",
      qualification: "Culinary",
      experience: "Experience required",
      website: "hr@yu-hotel.com",
      salary: "As per industry standards",
    },

    {
      id: 146,
      date: "16-12-2025",
      title: "Commis – Chinese",
      company: "YU Hotel",
      location: "Candolim",
      phone: "8208709113",
      email: "hr@yu-hotel.com",
      qualification: "Culinary",
      experience: "Experience required",
      website: "hr@yu-hotel.com",
      salary: "As per industry standards",
    },

    {
      id: 147,
      date: "16-12-2025",
      title: "Commis – South Indian",
      company: "YU Hotel",
      location: "Candolim",
      phone: "8208709113",
      email: "hr@yu-hotel.com",
      qualification: "Culinary",
      experience: "Experience required",
      website: "hr@yu-hotel.com",
      salary: "As per industry standards",
    },

    {
      id: 148,
      date: "16-12-2025",
      title: "Commis – Continental",
      company: "YU Hotel",
      location: "Candolim",
      phone: "8208709113",
      email: "hr@yu-hotel.com",
      qualification: "Culinary",
      experience: "Experience required",
      website: "hr@yu-hotel.com",
      salary: "As per industry standards",
    },

    {
      id: 149,
      date: "16-12-2025",
      title: "Driver (with badge)",
      company: "YU Hotel",
      location: "Candolim",
      phone: "8208709113",
      email: "hr@yu-hotel.com",
      qualification: "Driving licence + badge",
      experience: "Experience required",
      website: "hr@yu-hotel.com",
      salary: "As per industry standards",
    },

    {
      id: 150,
      date: "16-12-2025",
      title: "Engineering Supervisor",
      company: "YU Hotel",
      location: "Candolim",
      phone: "8208709113",
      email: "hr@yu-hotel.com",
      qualification: "Engineering",
      experience: "Experience required",
      website: "hr@yu-hotel.com",
      salary: "As per industry standards",
    },

    {
      id: 151,
      date: "16-12-2025",
      title: "Painter",
      company: "YU Hotel",
      location: "Candolim",
      phone: "8208709113",
      email: "hr@yu-hotel.com",
      qualification: "Trade skill",
      experience: "Experience required",
      website: "hr@yu-hotel.com",
      salary: "As per industry standards",
    },

    {
      id: 152,
      date: "16-12-2025",
      title: "Plumber",
      company: "YU Hotel",
      location: "Candolim",
      phone: "8208709113",
      email: "hr@yu-hotel.com",
      qualification: "Trade skill",
      experience: "Experience required",
      website: "hr@yu-hotel.com",
      salary: "As per industry standards",
    },

    {
      id: 153,
      date: "16-12-2025",
      title: "AC Technician",
      company: "YU Hotel",
      location: "Candolim",
      phone: "8208709113",
      email: "hr@yu-hotel.com",
      qualification: "Trade skill",
      experience: "Experience required",
      website: "hr@yu-hotel.com",
      salary: "As per industry standards",
    },

    {
      id: 154,
      date: "16-12-2025",
      title: "Electrician",
      company: "Consstruct Ten Ventures LLP",
      location: "Candolim",
      phone: "—",
      email: "Career@kilowott.com",
      qualification: "Trade skill",
      experience: "Fresher",
      website: "Career@kilowott.com",
      salary: "₹10k stipend",
    },

    {
      id: 155,
      date: "16-12-2025",
      title: "Trainee Civil Engineer",
      company: "Creative HR Solutions",
      location: "Porvorim",
      phone: "8600027887",
      email: "riya@creativehrsolutions.in",
      qualification: "BE/BTech Civil",
      experience: "1–2 years",
      website: "riya@creativehrsolutions.in",
      salary: "As per industry",
    },

    {
      id: 156,
      date: "16-12-2025",
      title: "Event Manager",
      company: "Blu Resorts",
      location: "Patto, Panjim",
      phone: "8600027887",
      email: "8600027887",
      qualification: "Graduate",
      experience: "1–3 years",
      website: "8600027887",
      salary: "As per industry standards",
    },

    {
      id: 157,
      date: "16-12-2025",
      title: "Front Office Executive",
      company: "—",
      location: "Vagator",
      phone: "",
      email: "",
      qualification: "Graduate",
      experience: "",
      website: "",
      salary: "As per industry standards",
    },

    {
      id: 158,
      date: "17-12-2025",
      title: "HR Assistant",
      company: "Hospitality Company",
      location: "Goa",
      phone: "8600027887",
      email: "WhatsApp 8600027887",
      qualification: "Graduate / HR background",
      experience: "Hospitality experience preferred",
      website: "WhatsApp 8600027887",
      salary: "As per experience",
    },

    {
      id: 159,
      date: "17-12-2025",
      title: "Accounts Executive",
      company: "Myles High Health Concepts Pvt Ltd",
      location: "Patto, Panjim",
      phone: "7875447484 / 8308838810",
      email: "hr@myleshigh.in / hra@myleshigh.in",
      qualification: "B.Com",
      experience: "Experience preferred",
      website: "hr@myleshigh.in",
      salary: "As per industry standards",
    },

    {
      id: 160,
      date: "17-12-2025",
      title: "Service Engineer (Fresher)",
      company: "Pai Kane Group",
      location: "Mapusa",
      phone: "—",
      email: "humancapital@paikane.com",
      qualification: "B.E Mechanical / Electrical",
      experience: "Fresher",
      website: "humancapital@paikane.com",
      salary: "As per industry standards",
    },

    {
      id: 161,
      date: "17-12-2025",
      title: "Office Assistant",
      company: "Distribution Agency (FMCG)",
      location: "Santa Cruz",
      phone: "7741917582",
      email: "WhatsApp 7741917582",
      qualification: "Graduate (Any stream)",
      experience: "Fresher",
      website: "WhatsApp 7741917582",
      salary: "₹15,000 per month",
    },

    {
      id: 162,
      date: "17-12-2025",
      title: "Graphic Designer (Freelancer)",
      company: "Xerviz Wlobal",
      location: "Margao",
      phone: "9150805080",
      email: "hr@xervizwlobal.com",
      qualification: "Graphic Design / Visual Arts",
      experience: "1–2 years",
      website: "hr@xervizwlobal.com",
      salary: "Freelance / Project based",
    },

    {
      id: 163,
      date: "17-12-2025",
      title: "Videographer (Freelancer)",
      company: "Xerviz Wlobal",
      location: "Margao",
      phone: "9150805080",
      email: "hr@xervizwlobal.com",
      qualification: "Videography / Media",
      experience: "Basic experience",
      website: "hr@xervizwlobal.com",
      salary: "Freelance / Project based",
    },

    {
      id: 164,
      date: "17-12-2025",
      title: "Video Editor (Freelancer)",
      company: "Xerviz Wlobal",
      location: "Margao",
      phone: "9150805080",
      email: "hr@xervizwlobal.com",
      qualification: "Video Editing / Media",
      experience: "Quick editing skills",
      website: "hr@xervizwlobal.com",
      salary: "Freelance / Project based",
    },

    {
      id: 165,
      date: "17-12-2025",
      title: "Tandoor Commi II",
      company: "Aralea Beach Resort – Stone Wood Premier",
      location: "Morjim, North Goa",
      phone: "9112007520",
      email: "hr.aralea@stonewoodresorts.com",
      qualification: "Hotel Management / Culinary",
      experience: "Experience required",
      website: "hr.aralea@stonewoodresorts.com",
      salary: "As per industry",
    },

    {
      id: 166,
      date: "17-12-2025",
      title: "Chinese Commi II",
      company: "Aralea Beach Resort – Stone Wood Premier",
      location: "Morjim, North Goa",
      phone: "9112007520",
      email: "hr.aralea@stonewoodresorts.com",
      qualification: "Hotel Management / Culinary",
      experience: "Experience required",
      website: "hr.aralea@stonewoodresorts.com",
      salary: "As per industry",
    },

    {
      id: 167,
      date: "17-12-2025",
      title: "Steward",
      company: "Aralea Beach Resort – Stone Wood Premier",
      location: "Morjim, North Goa",
      phone: "9112007520",
      email: "hr.aralea@stonewoodresorts.com",
      qualification: "Any Hospitality qualification",
      experience: "Experience required",
      website: "hr.aralea@stonewoodresorts.com",
      salary: "As per industry",
    },

    {
      id: 168,
      date: "17-12-2025",
      title: "Housekeeping Manager / Executive Housekeeper",
      company: "Aralea Beach Resort – Stone Wood Premier",
      location: "Morjim, North Goa",
      phone: "9112007520",
      email: "hr.aralea@stonewoodresorts.com",
      qualification: "Hotel Management / Hospitality",
      experience: "Managerial experience",
      website: "hr.aralea@stonewoodresorts.com",
      salary: "As per industry",
    },
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
        <img
          src={bookConsultation}
          alt="Book Consultation"
          className="top-ad-image"
        />
        <img
          src={buildYourFuture}
          alt="Build Your Future"
          className="top-ad-image"
        />
      </div>

      {/* Main job + advertisement container */}
      <div className="job-section-container">
        <div className="job-listings">
          {/* Banner above job cards */}
          <div className="featured-banner">
            <h2 className="banner-text">
              Great Work Starts With Great Company.{" "}
              <span className="highlight-text">Join Them!</span>
            </h2>
          </div>

          {/* Job cards */}
          {jobs.map((job, idx) => (
            <div className="job-card" key={idx}>
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

                <div className="job-actions">
                  <button className="apply-btn">Apply Now</button>
                  <button
                    className="share-btn"
                    onClick={() => handleShare(job.title, job.company)}
                  >
                    <FaShareAlt /> Share
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button className="more-btn" onClick={openModal}>
            Show More
          </button>
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
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="More jobs"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3>More Jobs</h3>
              <button
                className="modal-close-btn"
                onClick={closeModal}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <p className="modal-subtext">
                Here are more jobs you might be interested in:
              </p>

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
                        onClick={() =>
                          alert(`Apply for ${sjob.title} at ${sjob.company}`)
                        }
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <button className="more-btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListingSection;
