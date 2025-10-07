import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Components CSS/AdvertisementCarousel.css";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const AdvertisementCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: true,
    fade: true,
  };

  return (
    <div className="advertisement-carousel">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Advertisement 1" />
        </div>
        <div>
          <img src={image2} alt="Advertisement 2" />
        </div>
        <div>
          <img src={image3} alt="Advertisement 3" />
        </div>
      </Slider>
    </div>
  );
};

export default AdvertisementCarousel;
