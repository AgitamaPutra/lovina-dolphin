import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
import { formatPrice } from "../utills/helpers";
import bgImage from "../asset/bg.png";

export const Packages = () => {
  const { t, i18n } = useTranslation(); // Get translation function and i18n instance

  // Dynamically import the correct translation file based on the selected language
  const data = require(`../locales/${i18n.language}.json`);

  return (
    <div
      className="bg-gradient-to-b from-gray-200 to-blue-100"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl w-full mx-auto px-4 py-8 ">
        <h1 className="text-3xl font-bold mb-8 text-center ">
          ☆ {t("AWIX LOVINA PRIVATE DOLPHIN TOUR")} ☆ {/* Translate title */}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map through data and translate each item */}
          {data.data.map((item) => (
            <Link
              to={`services/${item.id}`}
              key={item.id}
              className="focus:outline-none"
            >
              <Card
                hoverable
                cover={<img alt="example" src={item.img[0]} />}
                className="mb-4 transform hover:-translate-y-1 cursor-pointer"
                style={{ transition: "transform 0.3s ease-in-out" }}
              >
                <div>
                  <p className="font-bold text-xl mb-2 text-center">
                    {t(item.name.title)}
                  </p>{" "}
                  {/* Translate name */}
                  <p className="text-xl mb-2 text-center">
                    Start From{" "}
                    <strong className="text-3xl">
                      {formatPrice(item.price)}
                    </strong>
                  </p>
                  <div className="text-center mt-8 mb-4">
                    <Link
                      to={`services/${item.id}`}
                      className="bg-blue-500 hover:bg-blue-700 p-3 rounded-lg text-white"
                    >
                      {t("packageBtn")}
                    </Link>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
