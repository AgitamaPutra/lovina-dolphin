import React from "react";
import Hero from "../components/Hero";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../asset/woman-with-scuba-gear-swimming-ocean.jpg";
import Image2 from "../asset/beautiful-shot-cute-dolphins-hanging-out-underwater-bimini-bahamas.webp";
import Image3 from "../asset/weddings-art-commercial.webp";
import Image4 from "../asset/shooting-underwater.webp";
import { Image } from "antd";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import icons
import { Helmet } from "react-helmet";

const Gallery = () => {
  const { t } = useTranslation();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: (
      <button className="slick-prev" aria-label="Previous" type="button">
        <FiChevronLeft />
      </button>
    ),
    nextArrow: (
      <button className="slick-next" aria-label="Next" type="button">
        <FiChevronRight />
      </button>
    ),
  };

  return (
    <div className="bg_dark">
      <Helmet>
        <title>Our Gallery</title>
      </Helmet>
      <Hero
        header={t("gallery.headerGallery")}
        text={t("gallery.textGallery")}
        style="font-semibold text-lg md:text-2xl tracking-[5px] md:tracking-[10px]"
        image={Image1}
      />

      <div className="container-fluid p-lg-0">
        <Slider {...settings}>
          <div>
            <img src={Image1} alt="Image 1" className="w-full rounded-lg" />
          </div>
          <div>
            <img src={Image2} alt="Image 2" className="w-full rounded-lg" />
          </div>
          <div>
            <img src={Image3} alt="Image 3" className="w-full rounded-lg" />
          </div>
          <div>
            <img src={Image4} alt="Image 4" className="w-full rounded-lg" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
