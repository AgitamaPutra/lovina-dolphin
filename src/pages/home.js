import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Packages } from "../components/Packages";
import { Review } from "../components/Review";
import Hero from "../components/Hero";
import { Poster } from "../components/Poster";
import AboutLovina from "../components/AboutLovina";
import Image from "../asset/beautiful-shot-cute-dolphins-hanging-out-underwater-bimini-bahamas.webp";

export const Home = () => {
  const { t } = useTranslation();
  const handleClickWa = () => {
    const phoneNumber = "6281998348555";
    const message = "Halo Awix, Saya ingin booking packages!";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Explore Lovina, Bali and experience dolphin watching tours. Discover the beauty of Lovina's dolphins and book your dolphin watching adventure today!"
        />
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
        <meta name="keywords" content="Bali Utara" />
        <meta name="keywords" content="Snorkling" />
        <meta name="keywords" content="Snorkling Lovina" />
        <meta name="author" content="Awix" />
      </Helmet>
      <Hero
        header={t("headerHome")}
        text={t("heroTextHome")}
        style={
          "font-semibold text-sm md:text-2xl tracking-[5px] md:tracking-[10px]"
        }
        button={t("buttonHome")}
        showButton={true}
        image={Image}
        fungsi={handleClickWa}
      />
      <Poster />
      <AboutLovina />
      <Packages />
      <Review />
    </div>
  );
};
