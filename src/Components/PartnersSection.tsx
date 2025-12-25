// src/components/PartnersSection.tsx
import React, { useEffect, useRef, useState } from "react";
import "./Components CSS/PartnersSection.css";

import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";
import partner6 from "../assets/partner6.png";
import partner7 from "../assets/partner7.png";
import partner8 from "../assets/8.png";
import partner9 from "../assets/Muenzer.png";
import partner10 from "../assets/movingwalls.png";
import partner11 from "../assets/10.png";
import partner12 from "../assets/12.png";

// 🟠 NEW: Import your corner illustration

const PartnersSection: React.FC = () => {
  const logos = [
    { src: partner1, alt: "Partner 1" },
    { src: partner2, alt: "Partner 2" },
    { src: partner3, alt: "Partner 3" },
    { src: partner4, alt: "Partner 4" },
    { src: partner5, alt: "Partner 5" },
    { src: partner6, alt: "Partner 6" },
    { src: partner7, alt: "Partner 7" },
    { src: partner8, alt: "Partner 8" },
    { src: partner9, alt: "Partner 9" },
    { src: partner10, alt: "Partner 10" },
    { src: partner11, alt: "Partner 11" },
    { src: partner12, alt: "Partner 12" },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const measurePillAndGap = () => {
    const el = scrollRef.current;
    if (!el) return { pill: 120, gap: 28 };
    const firstPill = el.querySelector<HTMLElement>(".partner-pill");
    const pill = firstPill
      ? Math.round(firstPill.getBoundingClientRect().width)
      : 120;

    const computed = window.getComputedStyle(el);
    const gapStr =
      computed.getPropertyValue("gap") ||
      computed.getPropertyValue("column-gap") ||
      computed.getPropertyValue("grid-column-gap") ||
      "";
    let gap = 28;
    if (gapStr) {
      const parsed = parseFloat(gapStr);
      if (!Number.isNaN(parsed)) gap = parsed;
    }
    return { pill, gap };
  };

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
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => updateCanScroll();
    const handleResize = () => updateCanScroll();

    updateCanScroll();

    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    const imgs = Array.from(el.querySelectorAll("img"));
    imgs.forEach((img) => {
      if (img.complete) return;
      img.addEventListener("load", updateCanScroll);
    });

    const timer = setTimeout(updateCanScroll, 500);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      imgs.forEach((img) => img.removeEventListener("load", updateCanScroll));
      clearTimeout(timer);
    };
  }, []);

  const scrollByOne = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const { pill, gap } = measurePillAndGap();
    const amount = Math.round(pill + gap);

    if (direction === "right") {
      el.scrollBy({ left: amount, behavior: "smooth" });
    } else {
      el.scrollBy({ left: -amount, behavior: "smooth" });
    }

    setTimeout(updateCanScroll, 220);
  };

  return (
    <section className="partners-section" aria-label="Our partners">
      {/* NEW corner image  */}
      {/* <img src={IMGPartner} alt="Partners illustration" className="partner-corner-img" /> */}

      <div className="partners-inner">
        <div className="partners-content">
          <h2 className="partners-heading">
            OUR <span className="partners-highlight">PARTNERS</span>
          </h2>
          <p className="partners-subtitle">
            We are working with some amazing partners
          </p>

          <div className="partners-carousel-wrap">
            <button
              className={`partners-arrow left ${
                !canScrollLeft ? "disabled" : ""
              }`}
              onClick={() => scrollByOne("left")}
              aria-label="Scroll left"
              disabled={!canScrollLeft}
            >
              ‹
            </button>

            <div
              className="partners-logos"
              ref={scrollRef}
              role="list"
              tabIndex={0}
            >
              {logos.map((logo, idx) => (
                <div
                  className="partner-pill"
                  key={idx}
                  role="listitem"
                  tabIndex={-1}
                >
                  <img src={logo.src} alt={logo.alt} className="partner-logo" />
                </div>
              ))}
            </div>

            <button
              className={`partners-arrow right ${
                !canScrollRight ? "disabled" : ""
              }`}
              onClick={() => scrollByOne("right")}
              aria-label="Scroll right"
              disabled={!canScrollRight}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
