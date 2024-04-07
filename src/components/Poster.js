import React, { useRef, useEffect } from "react";
import Flyer from "../asset/Poster.png";
import { Image } from "antd";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Poster = () => {
  const controls = useAnimation();
  const ref = useRef();
  const { t } = useTranslation(); // Get translation function and i18n instance
  useEffect(() => {
    const refElement = ref.current;
    const onScroll = () => {
      if (refElement) {
        const top = refElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.8) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          });
        } else {
          controls.start({
            opacity: 0,
            y: 50,
          });
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [controls]);
  const handleClickWa = () => {
    const phoneNumber = "6281998348555"; // Nomor WhatsApp
    const message = "Halo Awix, Saya ingin booking packages promo dolphin!"; // Pesan yang ingin dikirim
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center py-10 md:py-20 px-5 md:px-20"
      ref={ref}
    >
      {/* Gambar flyer di kiri */}
      <div className="order-1 md:order-1">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="w-full rounded-xl border-8 border-solid border-gray-300 drop-shadow-lg shadow-lg"
        >
          <Image src={Flyer} alt="Poster" />
        </motion.div>
      </div>
      {/* Penjelasan di kanan */}
      <div className="order-1 md:order-2">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="text-2xl md:text-5xl font-black mb-4"
        >
          AWIX LOVINA PRIVATE DOLPHIN TOUR
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="text-lg mb-4 text-justify"
        >
          {t("poster.text")}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          onClick={handleClickWa}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {t("needHelp")}
        </motion.button>
      </div>
    </div>
  );
};
