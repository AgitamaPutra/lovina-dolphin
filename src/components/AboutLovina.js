import React from "react";
import { Image } from "antd";
import Gambar from "../asset/weddings-art-commercial.jpg";
import { useTranslation } from "react-i18next";
import { I18nContext } from "../context/I18context";

const AboutLovina = () => {
  const { t, i18n } = useTranslation(); // Get translation function and i18n instance
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center bg-gray-200 py-10 md:py-20 px-5 md:px-20">
      {/* Penjelasan di kiri */}
      <div className="md:order-1">
        <h2 className="text-3xl font-bold mb-4">{t("aboutLovina.title")}</h2>
        <p className="text-lg mb-4 text-justify">{t("aboutLovina.p1")}</p>
        <p className="text-lg mb-4 text-justify">{t("aboutLovina.p2")}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          {t("aboutLovina.button")}
        </button>
      </div>
      {/* Gambar di kanan */}
      <div className="md:order-2 overflow-visible">
        <Image
          src={Gambar}
          alt="Lovina"
          className="w-full rounded-xl border-8 border-solid border-white drop-shadow-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutLovina;
