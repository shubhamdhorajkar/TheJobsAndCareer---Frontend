import React from "react";
import HeroSection from "../Components/HeroSection";
import AdvertisementSection from "../Components/AdvertisementSection";
import AdvertisementCarousel  from "../Components/AdvertisementCarousel";
import JobListingSection from "../Components/JobListSection";
import PartnersSection from "../Components/PartnersSection";
import TestimonialsSection from "../Components/TestimonialsSection";


const HomePage: React.FC = () => {

  return (
    <>
      <HeroSection />
      <AdvertisementCarousel />
      <JobListingSection />
      <AdvertisementSection />
      <PartnersSection />
      <TestimonialsSection/>
    </>
  );
};

export default HomePage;
