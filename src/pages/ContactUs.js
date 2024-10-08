import React, { useRef, useEffect, useState } from "react";
import Hero from "../components/Hero";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Image from "../asset/sebastien-gabriel--IMlv9Jlb24-unsplash.webp";
import { Helmet } from "react-helmet";
import { motion, useAnimation } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  const controls = useAnimation();
  const ref = useRef();
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has occurred

  useEffect(() => {
    const refElement = ref.current;

    const onScroll = () => {
      if (refElement && !hasAnimated) {
        const top = refElement.getBoundingClientRect().top;
        const bottom = refElement.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Trigger animation when the element is in view
        if (top < windowHeight * 0.8 && bottom > windowHeight * 0.2) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          });
          setHasAnimated(true); // Prevent further animations
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [controls, hasAnimated]);

  // Function to open WhatsApp with pre-defined message
  const handleWhatsAppClick = () => {
    const phoneNumber = "6281998348555"; // WhatsApp number
    const message = "Halo, Saya ingin booking tour!"; // Pre-defined message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const handleFindUsClick = () => {
    window.open("https://maps.app.goo.gl/KWQdP8fjGBRQDTiTA");
  };

  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
        <meta name="keywords" content="Lovina" />
        <meta name="author" content="Awix" />
      </Helmet>
      <Hero
        header={t("contact.headerContactUs")}
        text={t("contact.textContact")}
        style="font-semibold text-lg md:text-2xl tracking-[5px] md:tracking-[10px]"
        image={Image}
      />
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 z-0"
          >
            <div>
              <MapContainer
                center={[-8.180499578653599, 114.9865115788152]} // Krisna Water Sports coordinates
                zoom={13}
                style={{
                  height: "400px",
                  width: "100%",
                  borderRadius: "10px",
                  zIndex: 0,
                }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[-8.180499578653599, 114.9865115788152]}>
                  <Popup>Krisna Water Sports, Temukus, Buleleng</Popup>
                </Marker>
              </MapContainer>
            </div>
            <div className="flex flex-col ">
              <p className="text-lg leading-relaxed text-justify">
                {t("contact.paragContact")}
              </p>
              <button
                className="text-lg mb-4 mt-4 text-start underline"
                onClick={handleWhatsAppClick}
              >
                <FaPhone className="inline-block mr-4 text-2xl" />
                +6281998348555
              </button>
              <p className="text-lg leading-relaxed mb-4">
                <FaEnvelope className="inline-block mr-4 text-2xl" />
                awixrock@gmail.com
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <FaMapMarkerAlt className="inline-block mr-4 text-2xl" />
                Krisna Water Sports, Temukus, Singaraja Buleleng
              </p>
              <div className="flex justify-center items-center mt-4">
                <button
                  onClick={handleFindUsClick}
                  className="flex bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  <span className="my-auto mr-1">
                    {" "}
                    <FaLocationDot />
                  </span>
                  <span>{t("contact.buttonContact")}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
