import React from "react";
import HeroSection from "../Components/HeroSection";
import AdvertisementSection from "../Components/AdvertisementSection";
import AdvertisementCarousel  from "../Components/AdvertisementCarousel";
import JobListingSection from "../Components/JobListSection";


const HomePage: React.FC = () => {

  return (
    <>
      <HeroSection />
      <AdvertisementCarousel />
      <JobListingSection />
      <AdvertisementSection />
    </>
  );
};

export default HomePage;
