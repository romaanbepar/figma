import React from "react";

import Slider from "react-slick";
import netflix from "../../assets/images/netflix.png";
import google from "../../assets/images/google.png";
import slack from "../../assets/images/slack.png";
import airbnb from "../../assets/images/airbnb.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./brands.css";
const Brands = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'linear',
    autoplay: true,
    speed : 25000,
    autoplaySpeed:0,
    variableWidth: true,
    infiniteScroll: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <section className="brand">
        <div className="container">
          <div className="logos">
            <Slider {...settings}>
                  <img src={netflix} alt="netflix" />
                  <img src={google} alt="google" />
                  <img src={airbnb} alt="airbnb" />
                  <img src={slack} alt="slack" />
                  <img src={netflix} alt="netflix" />
                  <img src={google} alt="google" />
                  <img src={airbnb} alt="airbnb" />
                  <img src={slack} alt="slack" />
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
