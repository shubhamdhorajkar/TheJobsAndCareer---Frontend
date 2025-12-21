import React, { useEffect, useRef } from "react";
import {
  FaBullseye,
  FaFileAlt,
  FaHandshake,
  FaUsers,
  FaUserTie,
  FaLinkedin,
  FaComments,
  FaChalkboardTeacher,
  FaMoneyCheckAlt,
  FaBullhorn,
  FaProjectDiagram,
  FaPaintBrush,
} from "react-icons/fa";
import "./Components CSS/ServicesSection.css";

const SERVICES = [
  {
    id: 1,
    icon: <FaBullseye />,
    title: "Career Guidance",
    desc: "Personalized career counseling and professional development guidance to help you navigate your career path with confidence.",
  },
  {
    id: 2,
    icon: <FaFileAlt />,
    title: "Resume Building",
    desc: "Professional resume writing and optimization services that make you stand out to potential employers.",
  },
  {
    id: 3,
    icon: <FaHandshake />,
    title: "Job Placement",
    desc: "Direct connections with top employers and exclusive job opportunities across various industries.",
  },
  {
    id: 4,
    icon: <FaUsers />,
    title: "Talent Acquisition",
    desc: "Comprehensive recruitment solutions for businesses looking to hire the right talent for their growth.",
  },
];

const candidateServices = [
  {
    icon: <FaUserTie />,
    title: "Resume Writing",
    desc: "Get a resume that highlights your strengths & attracts recruiters.",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn Profiling & Optimization",
    desc: "Boost your visibility & job opportunities with a strong LinkedIn profile.",
  },
  {
    icon: <FaComments />,
    title: "1:1 Job Search Consultation",
    desc: "Personalized guidance to land jobs faster.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Personality Development Consultation",
    desc: "Improve communication & confidence.",
  },
  {
    icon: <FaComments />,
    title: "Interview Consultation",
    desc: "Ace your interviews with expert coaching & feedback.",
  },
];

const businessServices = [
  {
    icon: <FaUsers />,
    title: "Hiring Talents",
    desc: "Find skilled candidates for your roles, from freshers to experienced professionals.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Payment Management",
    desc: "Simplify your payroll with compliant, secure, and accurate solutions.",
  },
  {
    icon: <FaBullhorn />,
    title: "Employer Branding",
    desc: "Attract top talent by building a strong online presence and reputation.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Project-Based Consultants",
    desc: "Access professionals for short-term, flexible projects.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Exhibition & Job Fair Content + Designs",
    desc: "Get creative, compelling designs and content for your job fairs.",
  },
];

const ServicesSection: React.FC = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-anim='service']"));

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((it, i) => obs.observe(it));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Original Our Services Section */}
      
      <section className="services-section" ref={rootRef} aria-labelledby="services-heading">
        <div className="services-inner">
          <h2 id="services-heading" className="services-heading">
            Our <span className="accent">Services</span>
          </h2>
          <p className="services-sub">
            We help job seekers and businesses with services tailored to get results — faster,
            smarter, and reliably.
          </p>

          <div className="services-bg" aria-hidden>
            <div className="bg-circle c1" />
            <div className="bg-circle c2" />
            <div className="bg-circle c3" />
          </div>

          <div className="services-grid">
            {SERVICES.map((s, idx) => (
              <article
                className="service-card"
                key={s.id}
                data-anim="service"
                style={{ transitionDelay: `${idx * 90}ms` }}
              >
                <div className="service-icon">{s.icon}</div>
                <div className="service-body">
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* New Extended Structured Section */}
      <section className="extended-services">
        <div className="services-wrapper">
          <div className="services-header">
            <span className="services-badge">OUR SERVICES</span>
          </div>

          <div className="services-container">
            {/* For Candidates */}
            <div className="services-block">
              <h3 className="services-title">
                <span className="highlight-orange">For Candidates</span> – Build Your Career With
                Confidence
              </h3>
              <div className="services-grid">
                {candidateServices.map((service, index) => (
                  <div key={index} className="service-card extra">
                    <div className="service-icon">{service.icon}</div>
                    <h4>{service.title}</h4>
                    <p>{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* For Businesses */}
            <div className="services-block">
              <h3 className="services-title">
                <span className="highlight-blue">For Businesses</span> – Your Talent & HR Partner
              </h3>
              <div className="services-grid">
                {businessServices.map((service, index) => (
                  <div key={index} className="service-card extra">
                    <div className="service-icon">{service.icon}</div>
                    <h4>{service.title}</h4>
                    <p>{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
