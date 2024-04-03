import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { I18nContext } from "../context/I18context";
import LanguageSelector from "./LanguageSelector";
import Logo from "../asset/Dolphin_Logo.png";
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
    { key: "services", path: "/services", text: t("menu.services") },
    { key: "gallery", path: "/gallery", text: t("menu.gallery") },
    { key: "contact", path: "/contact-us", text: t("menu.contact") },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-24">
        <div>
          <img src={Logo} alt="Logo" className="h-20" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className={`h-6 w-6 ${isScrolled ? "text-black" : "text-white"}`}
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
                    : "text-black hover:bg-blue-700 hover:text-white"
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
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-blue-800 text-white py-2 z-50">
            {menuItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className="block text-center py-2 hover:bg-blue-700 hover:text-white transition-colors"
                onClick={closeMenu}
              >
                {item.text}
              </Link>
            ))}
            <LanguageSelector />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
