import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // import useLocation
import backgroundImg1 from "../asset/shooting-underwater.jpg";
import backgroundImg2 from "../asset/beautiful-shot-cute-dolphins-hanging-out-underwater-bimini-bahamas.jpg";
import backgroundImg3 from "../asset/weddings-art-commercial.jpg";
import backgroundImg4 from "../asset/woman-with-scuba-gear-swimming-ocean.jpg";

const Hero = ({ header, text, style, button, showButton }) => {
  // tambahkan prop showButton
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgroundImages = [
    backgroundImg1,
    backgroundImg2,
    backgroundImg3,
    backgroundImg4,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Ganti gambar setiap 2.5 detik

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="hero-container relative h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImages[backgroundIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 5s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white mx-5 md:mx-20">
          <h1 className={`${style} mt-10 md:mt-20`}>{header}</h1>
          <p className="text-[20px] md:text-[60px] font-black mt-10">{text}</p>
          {/* Tampilkan tombol hanya jika prop showButton bernilai true */}
          {showButton && (
            <Link to="/">
              {" "}
              {/* Ganti link dengan sesuai rute home Anda */}
              <button className=" bg-blue-500 hover:bg-blue-800 text-white font-bold py-4 px-4 rounded-full transition-colors mt-16">
                {button}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
