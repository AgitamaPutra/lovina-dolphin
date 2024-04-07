import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const footer = document.querySelector("footer");
      const top = footer.getBoundingClientRect().top;
      const bottom = footer.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.8 && bottom > windowHeight * 0.2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">
              {t("about.headerAbout").replace(/\b\w/g, (c) => c.toUpperCase())}
            </h3>
            <p className="text-sm">{t("about.textAbout")}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">
              {t("contact.headerContactUs").replace(/\b\w/g, (c) =>
                c.toUpperCase()
              )}
            </h3>
            <p className="text-sm">Email: awixrock@gmail.com</p>
            <p className="text-sm">Phone: +6281998348555</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">
              {t("follow.textFollow")}
            </h3>
            <div className="flex space-x-4">
              <Link to="#" className="text-white text-xl">
                <FaFacebookF />
              </Link>
              <Link to="#" className="text-white text-xl">
                <FaInstagram />
              </Link>
              <Link to="#" className="text-white text-xl">
                <FaWhatsapp />
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 border-t border-gray-700 pt-8"
        >
          <p className="text-center text-sm">
            &copy; 2024 Lovina Private Dolphin Tour. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
