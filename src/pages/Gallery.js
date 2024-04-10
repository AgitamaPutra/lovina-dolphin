import React, { useState } from "react";
import Hero from "../components/Hero";
import { useTranslation } from "react-i18next";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import icons
import { Helmet } from "react-helmet";
import Background from "../asset/melissa-cassar-wJEuwP4aaNU-unsplash.jpg";
import Image1 from "../asset/woman-with-scuba-gear-swimming-ocean.jpg";
import Image2 from "../asset/beautiful-shot-cute-dolphins-hanging-out-underwater-bimini-bahamas.webp";
import Image3 from "../asset/weddings-art-commercial.webp";
import Image4 from "../asset/shooting-underwater.webp";
import Image5 from "../asset/pascal-muller-WDBM22JVApk-unsplash.jpg";
import Image6 from "../asset/steve-douglas-vly_LUoDwPo-unsplash.jpg";
import { Image } from "antd";

const Gallery = () => {
  const { t } = useTranslation();
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-100 text-white">
      <Helmet>
        <title>Our Gallery</title>
      </Helmet>
      <Hero
        header={t("galeri.header")}
        text={t("galeri.text")}
        style="font-semibold text-lg md:text-2xl tracking-[5px] md:tracking-[10px]"
        image={Background}
      />

      <div className="relative">
        <div className="flex justify-between items-center px-2 py-6 md:px-4 lg:px-6 h-52 md:h-screen">
          <button
            onClick={handlePrev}
            className="bg-white bg-opacity-50 z-10 text-black rounded-full p-1 md:p-3 focus:outline-none transition-transform duration-300 hover:bg-gray-200"
          >
            <FiChevronLeft className="w-8 h-8" style={{ opacity: 100 }} />
          </button>
          <div className="w-full md:w-[65%] relative">
            {images.map((image, index) => {
              const isMainImage = index === currentIndex;
              const isLeftImage =
                index ===
                (currentIndex === 0 ? images.length - 1 : currentIndex - 1);
              const isRightImage =
                index ===
                (currentIndex === images.length - 1 ? 0 : currentIndex + 1);

              let imageStyle = {
                position: "absolute",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: isMainImage ? "80%" : "60%",
                zIndex: isMainImage ? 1 : 0,
                transition: "left 0.3s ease", // animasi smooth
              };

              // Tentukan nilai left tergantung pada ukuran layar
              if (window.innerWidth <= 767) {
                imageStyle.left = isMainImage
                  ? "50%"
                  : isLeftImage
                  ? "50%"
                  : "50%";
              } else if (window.innerWidth >= 768) {
                imageStyle.left = isMainImage
                  ? "50%"
                  : isLeftImage
                  ? "-25%"
                  : "125%";
              }
              return (
                <div
                  key={index}
                  style={imageStyle}
                  className={isMainImage ? "slide-in" : ""}
                >
                  <Image
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full rounded-3xl shadow-lg"
                  />
                </div>
              );
            })}
          </div>
          <button
            onClick={handleNext}
            className="bg-white bg-opacity-50 z-10 text-black rounded-full p-1 md:p-3 focus:outline-none transition-transform duration-300 hover:bg-gray-200"
          >
            <FiChevronRight className="w-8 h-8" style={{ opacity: 100 }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
