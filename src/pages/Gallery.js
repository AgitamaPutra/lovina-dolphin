import React from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import slick core CSS (required for functionality)
import "slick-carousel/slick/slick-theme.css"; // Import slick theme (optional, but needed for navigation/pagination)
import Hero from "../components/Hero";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Background from "../asset/melissa-cassar-wJEuwP4aaNU-unsplash.webp";
import Image1 from "../asset/woman-with-scuba-gear-swimming-ocean.webp";
import Image2 from "../asset/beautiful-shot-cute-dolphins-hanging-out-underwater-bimini-bahamas.webp";
import Image3 from "../asset/weddings-art-commercial.webp";
import Image4 from "../asset/shooting-underwater.webp";
import Image5 from "../asset/pascal-muller-WDBM22JVApk-unsplash.webp";
import Image6 from "../asset/steve-douglas-vly_LUoDwPo-unsplash.webp";
import Image7 from "../asset/gambar1.webp";
import Image8 from "../asset/gambar2.webp";
import Image9 from "../asset/gambar3.webp";

const Gallery = () => {
  const { t } = useTranslation();
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
  ];

  // Slick slider settings
  const settings = {
    dots: true, // Pagination dots
    infinite: true, // Infinite loop sliding
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Autoplay slides
    autoplaySpeed: 3000, // Autoplay speed in ms
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 text-white overflow-hidden"> {/* Prevent horizontal scrolling */}
      <Helmet>
        <title>Our Gallery</title>
        <meta name="keywords" content="Lovina" />
        <meta name="author" content="Awix" />
      </Helmet>
      <Hero
        header={t("galeri.header")}
        text={t("galeri.text")}
        style="font-semibold text-lg md:text-2xl tracking-[5px] md:tracking-[10px]"
        image={Background}
      />

      <div className="relative py-10">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center h-full">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-lg max-h-96 md:max-h-[500px] mx-auto" // Tailwind classes for responsive images
                style={{
                  objectFit: "contain", // Adjust the object fit for portrait and landscape images
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
