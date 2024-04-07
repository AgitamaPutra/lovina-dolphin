import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import { useTranslation } from "react-i18next";
import Image from "../asset/weddings-art-commercial.webp";
export const OurServices = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>Our Packages</title>
      </Helmet>
      <Hero
        header={t("packages.headerPackages")}
        text={t("packages.textPackages")}
        style={
          "font-semibold text-lg md:text-2xl tracking-[5px] md:tracking-[10px]"
        }
        image={Image}
      />
    </div>
  );
};
