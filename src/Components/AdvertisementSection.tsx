import React from "react";
import { Box} from "@mui/material";
import "./Components CSS/AdvertisementSection.css";

import addAyesha from "../assets/add-ayesha.png";
import addNoshima from "../assets/add-noshima.png";
import tjcAdd1 from "../assets/tjc-add1.png";

const AdvertisementSection: React.FC = () => {
  return (
    <Box className="advertisement-container">
      <Box className="advertisement-row">
        <img src={addAyesha} alt="Ad Ayesha" className="ad-card ad-featured" />
        <img src={tjcAdd1} alt="Ad 1" className="ad-card ad-featured" />
        <img src={addNoshima} alt="Ad Noshima" className="ad-card ad-featured" />
      </Box>
    </Box>
  );
};

export default AdvertisementSection;
