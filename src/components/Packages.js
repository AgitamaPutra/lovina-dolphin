import React, { useState, useEffect, useRef } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { formatPrice } from "../utills/helpers";
import { motion, useAnimation } from "framer-motion";

export const Packages = () => {
  const { t, i18n } = useTranslation();
  const data = require(`../locales/${i18n.language}.json`);
  const controls = useAnimation();
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const refElement = ref.current;

    const onScroll = () => {
      if (refElement) {
        const top = refElement.getBoundingClientRect().top;
        const bottom = refElement.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // When the element is in view
        if (top < windowHeight * 0.8 && bottom > windowHeight * 0.2) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
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
  }, [isVisible, controls]);
  console.log(data.data);
  return (
    <div className="bg-gradient-to-b bg-white">
      <div className="max-w-7xl w-full mx-auto px-4 py-8" ref={ref}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="text-3xl font-bold mb-10 text-center"
        >
          ☆ {t("AWIX LOVINA PRIVATE DOLPHIN TOUR")} ☆
        </motion.h1>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.data.slice(0, 3).map((item, index) => (
            <Link
              key={item.id}
              to={`our-packages/${item.id}`}
              className="focus:outline-none"
            >
              <motion.div
                key={item.id}
                className="mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }} // 1. Animasi kartu saat dihover
              >
                <motion.div
                  animate={isVisible ? "visible" : "hidden"} // 2. Animasi saat masuk ke dalam viewport
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Card
                    hoverable
                    cover={
                      <img alt="Lovina Dolphin" src={item.img[index]} /> // Perbaikan indeks gambar
                    }
                    className="mb-4 cursor-pointer"
                    style={{ transition: "transform 0.3s ease-in-out" }}
                  >
                    <div>
                      <p className="font-bold text-xl mb-2 text-center">
                        {t(item.name.title)}
                      </p>
                      <p className="text-lg md:text-xl mb-2 text-center">
                        Start From -{" "}
                        <strong className="text-xl md:text-3xl">
                          {formatPrice(item.price)}
                        </strong>
                        <span className="text-gray-400 text-sm md:text-lg">
                          {" "}
                          / {item.pax} Pax
                        </span>
                      </p>
                      <div className="text-center mt-8 mb-4">
                        <Link
                          to={`our-packages/${item.id}`}
                          className="bg-blue-500 hover:bg-blue-700 p-3 rounded-lg text-white"
                        >
                          {t("packageBtn")}
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
        <div className="text-center mt-2">
          <Link
            to="/our-packages"
            className="text-blue-500 hover:text-blue-700 font-bold text-lg "
          >
            See More Packages
          </Link>
        </div>
      </div>
    </div>
  );
};
