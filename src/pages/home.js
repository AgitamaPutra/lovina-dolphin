import React from "react";
import { useTranslation } from "react-i18next"; // import hook useTranslation
import { Packages } from "../components/Packages";
import { Review } from "../components/Review";
import Hero from "../components/Hero";
import { Poster } from "../components/Poster";
import AboutLovina from "../components/AboutLovina";
import Image from "../asset/beautiful-shot-cute-dolphins-hanging-out-underwater-bimini-bahamas.jpg";
export const Home = () => {
  const { t } = useTranslation(); // gunakan hook useTranslation
  const handleClickWa = () => {
    const phoneNumber = "6281998348555"; // Nomor WhatsApp
    const message = "Halo Awix, Saya ingin booking packages!"; // Pesan yang ingin dikirim
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <div>
      <Hero
        header={t("headerHome")} // Gunakan fungsi t untuk menerjemahkan teks
        text={t("heroTextHome")} // Gunakan fungsi t untuk menerjemahkan teks
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
