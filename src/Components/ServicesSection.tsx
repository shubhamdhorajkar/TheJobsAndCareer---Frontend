import React, { useEffect, useRef } from "react";
import { FaBullseye, FaFileAlt, FaHandshake, FaUsers } from "react-icons/fa";
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
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((it, i) => obs.observe(it));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="services-section" ref={rootRef} aria-labelledby="services-heading">
      <div className="services-inner">
        <h2 id="services-heading" className="services-heading">
          Our <span className="accent">Services</span>
        </h2>
        <p className="services-sub">
          We help job seekers and businesses with services tailored to get results — faster, smarter,
          and reliably.
        </p>

        {/* Decorative background circles */}
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
  );
};

export default ServicesSection;
