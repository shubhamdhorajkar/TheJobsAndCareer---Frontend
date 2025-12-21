import React from "react";
import { Box, Button } from "@mui/material";
import "./Components CSS/AdvertisementSection.css";

import addAyesha from "../assets/add-ayesha.png";
import addNoshima from "../assets/add-noshima.png";
import tjcAdd1 from "../assets/tjc-add1.png";

const AdvertisementSection: React.FC = () => {
  const ads = [
    { img: addAyesha, alt: "Ad Ayesha" },
    { img: tjcAdd1, alt: "TJC Ad 1" },
    { img: addNoshima, alt: "Ad Noshima" },
  ];

  const handleBookNow = (adTitle: string) => {
    alert(`Booking started for ${adTitle}`);
    // You can replace this with navigation to a booking page or modal
  };

  return (
    <Box className="advertisement-container">
      <Box className="advertisement-row">
        {ads.map((ad, index) => (
          <Box key={index} className="ad-card-wrapper">
            <img src={ad.img} alt={ad.alt} className="ad-card ad-featured" />
            <Button
              variant="contained"
              color="warning"
              className="book-now-btn"
              onClick={() => handleBookNow(ad.alt)}
            >
              Connect Now !
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AdvertisementSection;
