import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Bantuan = () => {
  const { t } = useTranslation();
  const handleClickWa = () => {
    const phoneNumber = "6281998348555"; // Nomor WhatsApp
    const message = "Halo Awix, Saya ingin booking packages!"; // Pesan yang ingin dikirim
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <div className="fixed bottom-0 right-0  p-4 rounded-lg flex items-center font-manrope">
      <span className="px-2 py-1 bg-white rounded-lg font-bold mr-2 drop-shadow-md shadow-md text-sm md:text-lg">
        {t('needHelp')}
      </span>

      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <div
          className="bg-green-500 rounded-full p-1.5 hover:drop-shadow-lg hover:shadow-lg text-xl hover:text-2xl"
          onClick={handleClickWa}
        >
          <FaWhatsapp size={52} className="text-white" />
        </div>
      </motion.button>
    </div>
  );
};
