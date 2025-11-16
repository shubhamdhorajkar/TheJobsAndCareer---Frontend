import React, { useEffect, useRef } from "react";
import "./AboutPage.css";

/* Replace with your actual images */
import aboutIllustration from "../assets/about-illustration.png";
import founderImg from "../assets/emmanuel.png";

const AboutPage: React.FC = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const animatedItems = Array.from(root.querySelectorAll<HTMLElement>("[data-anim]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    animatedItems.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" ref={rootRef}>
      <div className="about-inner">
        {/* Motto */}
        <div className="motto-wrap" data-anim="motto">
          <div className="motto-card">
            <h3 className="motto-title">
              Our <span>Motto</span>
            </h3>
            <blockquote className="motto-text">
              Committed to eliminating unemployment through strategic career empowerment
            </blockquote>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="about-row">
          <div className="bubble card-left" data-anim="bubble">
            <div className="bubble-inner">
              <h4 className="bubble-title">
                Our <span className="accent-blue">Mission</span>
              </h4>
              <p className="bubble-desc">
                We aim to eliminate unemployment through expert career services, ensuring faster,
                smarter job placement for individuals across all levels.
              </p>
            </div>
            <div className="bubble-tail left-tail" aria-hidden />
          </div>

          <div className="about-illustration" data-anim="illustration">
            <img src={aboutIllustration} alt="About Illustration" />
          </div>

          <div className="bubble card-right" data-anim="bubble">
            <div className="bubble-inner">
              <h4 className="bubble-title">
                Our <span className="accent-green">Vision</span>
              </h4>
              <p className="bubble-desc">
                To create a world where every individual has access to the right job opportunity —
                eliminating unemployment through meaningful career solutions.
              </p>
            </div>
            <div className="bubble-tail right-tail" aria-hidden />
          </div>
        </div>

        {/* Founder Section */}
        <div className="founder-section" data-anim="founder">
          <div className="founder-bg">
            <div className="blob blob-1" aria-hidden />
            <div className="blob blob-2" aria-hidden />
          </div>

          <div className="founder-inner">
            <div className="founder-content">
              <h2 className="founder-heading">
                Meet Our <span className="highlight">Founder</span>
              </h2>

              <h3 className="founder-name">Jaya Dasan Emanuvel</h3>
              <div className="founder-role">Founder &amp; Recruiter</div>

              <p>
                Emanuvel is a passionate career strategist and the founder of{" "}
                <strong>The Jobs &amp; Career (TJC)</strong>. With over 7 years of experience, he brings
                a sharp eye for recruitment trends and a mission to help individuals find meaningful
                work.
              </p>

              <p>
                He has guided hundreds of job seekers—from freshers to experienced professionals—
                towards faster and smarter career moves. His hands-on approach blends practical
                strategies with personalized support, including{" "}
                <strong>resume building, LinkedIn optimization</strong>, and{" "}
                <strong>job search planning</strong>.
              </p>

              <p>
                At TJC, Emanuvel also partners with businesses to streamline hiring, elevate employer
                branding, and bring in the right talent.
              </p>

              <blockquote className="founder-quote">
                “Every individual has unique potential. Our job is to help them discover it and connect
                them with opportunities where they can truly shine.”
              </blockquote>
            </div>

            <div className="founder-visual" aria-hidden>
              <div className="founder-photo-wrap">
                <img src={founderImg} alt="Founder" className="founder-photo" />
                <div className="founder-badge">Founder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
