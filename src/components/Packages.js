import React, { useRef, useEffect } from "react";
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

  useEffect(() => {
    const refElement = ref.current;
    const onScroll = () => {
      if (refElement) {
        const top = refElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.8) {
          controls.start({
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 },
          });
        } else {
          controls.start({
            opacity: 0,
            x: -100,
          });
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [controls]);

  return (
    <div className="bg-gradient-to-b bg-white">
      <div className="max-w-7xl w-full mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          className="text-3xl font-bold mt-14 text-center"
        >
          ☆ {t("AWIX LOVINA PRIVATE DOLPHIN TOUR")} ☆
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          ref={ref}
        >
          {data.data.map((item) => (
            <Link
              key={item.id}
              to={`services/${item.id}`}
              className="focus:outline-none"
            >
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={controls}
                transition={{ duration: 0.5 }}
                className="mb-4"
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
                    </p>
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
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
