import React, { useEffect, useRef } from "react";
import Hero from "../components/Hero";
import { useTranslation } from "react-i18next";
import Image from "../asset/kadek-sutawa-RVCIXnsn3IE-unsplash.webp";
import { Helmet } from "react-helmet";
import { motion, useAnimation } from "framer-motion";
import Image2 from "../asset/pascal-muller-WDBM22JVApk-unsplash.webp";
const AboutUs = () => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const refElement = ref.current;

    const onScroll = () => {
      if (refElement) {
        const top = refElement.getBoundingClientRect().top;
        const bottom = refElement.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // When the element is in view
        if (top < windowHeight * 0.8 && bottom > windowHeight * 0.2) {
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

  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>About Us</title>
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
        header={t("about.headerAbout")}
        text={t("about.textAbout")}
        style={
          "font-semibold text-lg md:text-2xl tracking-[5px] md:tracking-[10px]"
        }
        image={Image}
      />
      <motion.div
        className="bg-gray-100 py-10"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        ref={ref}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
            <strong>Lovina Private Dolphin Tour</strong>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src={Image2}
                alt="Lovina Private Dolphin Tour"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-normal md:text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                {t("about.parag1")}
              </p>
              <p className="text-normal md:text-lg text-gray-700 leading-relaxed text-justify">
                {t("about.parag2")}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
