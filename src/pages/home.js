import React from "react";
import { useTranslation } from "react-i18next"; // import hook useTranslation
import { Packages } from "../components/Packages";
import { Review } from "../components/Review";
import Hero from "../components/Hero";
import { Poster } from "../components/Poster";
import AboutLovina from "../components/AboutLovina";

export const Home = () => {
  const { t } = useTranslation(); // gunakan hook useTranslation

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
      />
      <Poster />
      <AboutLovina />
      <Packages />
      <Review />
    </div>
  );
};
