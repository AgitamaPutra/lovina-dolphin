import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Image from "../asset/kenny-febrian-nR1dI28cH58-unsplash.jpg";
import { formatPrice } from "../utills/helpers";
import { motion } from "framer-motion";

export const OurServices = () => {
  const { t, i18n } = useTranslation();
  const data = require(`../locales/${i18n.language}.json`);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const bottom = top + window.innerHeight;
      const section = document.getElementById("packages");
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (bottom > sectionTop && top < sectionBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Our Packages</title>
        <meta name="keywords" content="Lovina" />
        <meta name="keywords" content="Bali" />
        <meta name="keywords" content="Lovina Bali" />
        <meta name="keywords" content="Dolphin Lovina" />
        <meta name="keywords" content="Lovina Dolphin" />
        <meta name="keywords" content="Lovina Privte Dolphin Tour" />
        <meta name="keywords" content="North Bali" />
        <meta name="keywords" content="Dolphin" />
        <meta name="keywords" content="Lumba-lumba Bali" />
        <meta name="keywords" content="Lumba-lumba lovina" />
        <meta name="keywords" content="Lumba-lumba" />
        <meta name="keywords" content="Bali Utara" />
        <meta name="keywords" content="Snorkling" />
        <meta name="keywords" content="Snorkling Lovina" />
        <meta name="author" content="Awix" />
      </Helmet>
      <Hero
        header={t("packages.headerPackages")}
        text={t("packages.textPackages")}
        style={
          "font-semibold text-lg md:text-2xl tracking-[5px] md:tracking-[10px]"
        }
        image={Image}
      />
      <div id="packages" className="container mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
          {t("packages.headerPackages")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.data.map((item, i) => (
            <motion.div
              key={item.id}
              className="hover:transform hover:-translate-y-4 transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Perubahan durasi animasi hover
            >
              <Link to={`/our-packages/${item.id}`} className="block">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    src={require(`../${i === 0 ? item.img[0] : item.img[i]}`)} // Gunakan indeks 0 hanya untuk kartu pertama
                    alt={item.name.title}
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center">
                      {t(item.name.title)}
                    </h3>
                    <p className="mb-2 text-center">
                      Start From -{" "}
                      <strong className="text-xl md:text-3xl">
                        {formatPrice(item.price)}
                      </strong>
                      <span className="text-gray-400 text-sm md:text-lg">
                        {" "}
                        / {item.pax} Pax
                      </span>
                    </p>
                  </div>
                  <div className="text-center pb-4 mb-4">
                    <Link
                      to={`/our-packages/${item.id}`}
                      className="bg-blue-500 hover:bg-blue-700 p-3 rounded-lg text-white"
                    >
                      {t("packageBtn")}
                    </Link>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
