// src/components/TestimonialsSection.tsx
import React, { useEffect, useRef, useState } from "react";
import "./Components CSS/TestimonialsSection.css";

/* Replace these with your real avatar images (or keep placeholders) */
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar3.png";
import avatar3 from "../assets/avatar2.png";
import avatar4 from "../assets/avatar4.png";

const testData = [
  {
    avatar: avatar1,
    name: "Priya Sharma",
    role: "Product Manager",
    company: "TechVerse",
    rating: 5,
    text:
      "TJC helped me land my dream role — the process was seamless and the team supported me end-to-end. Highly recommend!",
  },
  {
    avatar: avatar2,
    name: "Rohit Singh",
    role: "Frontend Engineer",
    company: "PixelWorks",
    rating: 5,
    text:
      "The job listings are top quality. I applied to two roles and got interviews within a week. Fantastic platform.",
  },
  {
    avatar: avatar3,
    name: "Anita Desai",
    role: "HR Manager",
    company: "InfiniCorp",
    rating: 4,
    text:
      "Great candidates and a smooth hiring process — the booking and ad features are especially useful for outreach.",
  },
  {
    avatar: avatar4,
    name: "Vikram Patel",
    role: "Data Analyst",
    company: "Insight Labs",
    rating: 5,
    text:
      "Easy to use and highly relevant job matches. The site is clean and the team is responsive to feedback.",
  },
];

const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // measure card width + gap
  const measureCardAndGap = () => {
    const el = scrollRef.current;
    if (!el) return { card: 320, gap: 20 }; // sensible defaults
    const first = el.querySelector<HTMLElement>(".testimonial-card");
    const card = first ? Math.round(first.getBoundingClientRect().width) : 320;
    const styles = window.getComputedStyle(el);
    const gapStr = styles.getPropertyValue("gap") || styles.getPropertyValue("column-gap") || "20px";
    const gap = parseFloat(gapStr) || 20;
    return { card, gap };
  };

  // determine if scroller can move left or right
  const updateCanScroll = () => {
    const el = scrollRef.current;
    if (!el) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }
    const { scrollLeft, clientWidth, scrollWidth } = el;
    const tolerance = 2;
    setCanScrollLeft(scrollLeft > tolerance);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - tolerance);
  };

  useEffect(() => {
    updateCanScroll();
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => updateCanScroll();
    const onResize = () => updateCanScroll();

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // update after images load
    const images = Array.from(el.querySelectorAll("img"));
    images.forEach((img) => {
      if (!img.complete) img.addEventListener("load", updateCanScroll);
    });

    // small delayed check for layout shifts
    const t = setTimeout(updateCanScroll, 400);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      images.forEach((img) => img.removeEventListener("load", updateCanScroll));
      clearTimeout(t);
    };
  }, []);

  const scrollByOne = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const { card, gap } = measureCardAndGap();
    const amount = Math.round(card + gap);
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
    setTimeout(updateCanScroll, 220);
  };

  return (
    <section className="testimonials-section" aria-label="User testimonials">
      <div className="testimonials-inner">
        <h2 className="testimonials-title">
          What Our <span className="accent">Users</span> Say
        </h2>
        <p className="testimonials-sub">Real feedback from people who found jobs and talent with TJC</p>

        <div className="testimonials-carousel">
          <button
            className={`test-arrow left ${!canScrollLeft ? "disabled" : ""}`}
            onClick={() => scrollByOne("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll testimonials left"
          >
            ‹
          </button>

          <div className="testimonials-logs" ref={scrollRef} tabIndex={0} role="list">
            {testData.map((t, idx) => (
              <article className="testimonial-card" key={idx} role="listitem">
                <div className="testimonial-top">
                  <img src={t.avatar} alt={`${t.name} avatar`} className="testimonial-avatar" />
                  <div className="testimonial-meta">
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">
                      {t.role} • <span className="testimonial-company">{t.company}</span>
                    </div>
                    <div className="testimonial-rating" aria-hidden>
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="testimonial-text">“{t.text}”</p>
              </article>
            ))}
          </div>

          <button
            className={`test-arrow right ${!canScrollRight ? "disabled" : ""}`}
            onClick={() => scrollByOne("right")}
            disabled={!canScrollRight}
            aria-label="Scroll testimonials right"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
