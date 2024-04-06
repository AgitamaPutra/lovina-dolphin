import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { I18nContext } from "../context/I18context";
import LanguageSelector from "./LanguageSelector";
import Logo from "../asset/Dolphin_Logo.png";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { changeLanguage } = useContext(I18nContext);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { key: "home", path: "/", text: t("menu.home") },
    { key: "about", path: "/about-us", text: t("menu.about") },
    { key: "our packages", path: "/our-packages", text: t("menu.services") },
    { key: "gallery", path: "/gallery", text: t("menu.gallery") },
    { key: "contact", path: "/contact-us", text: t("menu.contact") },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-800 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20 md:h-24">
        <div>
          <Link to={'/'}>
            <img src={Logo} alt="Logo" className="h-16 md:h-20" />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className={`h-6 w-6 ${isScrolled ? "text-white " : "text-white"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke={isScrolled ? "currentColor" : "white"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className={`font-medium px-4 py-2 rounded transition-colors ${
                isScrolled
                  ? location.pathname === item.path
                    ? "text-white bg-blue-700"
                    : "text-white hover:bg-blue-700 hover:text-white "
                  : location.pathname === item.path
                  ? "text-white bg-blue-700"
                  : "text-white hover:bg-blue-700 hover:text-white"
              }`}
              onClick={closeMenu}
            >
              {item.text}
            </Link>
          ))}
          <LanguageSelector />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center z-50 h-screen bg-gray-800"
            >
              <button
                className="absolute top-0 right-0 pt-5 pr-3 focus:outline-none text-white"
                onClick={closeMenu}
              >
                <IoClose className="h-8 w-8" />
              </button>
              <div className="w-full md:max-w-md p-4  text-white relative">
                {menuItems.map((item, index) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    className={`block text-center py-2 hover:bg-blue-700 hover:text-white transition-colors ${
                      index !== menuItems.length - 0
                        ? "border-b-[1px] border-solid border-white mx-20"
                        : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {item.text}
                  </Link>
                ))}
                <div className="flex justify-center items-center mt-4 bg-transparent">
                  <LanguageSelector />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
