import React, { useRef, useEffect } from "react";
import Flyer from "../asset/Poster.png";
import { Image } from "antd";
import { motion, useAnimation } from "framer-motion";

export const Poster = () => {
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

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center py-10 md:py-20 px-5 md:px-20"
      ref={ref}
    >
      {/* Gambar flyer di kiri */}
      <div className="order-1 md:order-1">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="w-full rounded-xl border-8 border-solid border-gray-300 drop-shadow-lg shadow-lg"
        >
          <Image src={Flyer} alt="Poster" />
        </motion.div>
      </div>
      {/* Penjelasan di kanan */}
      <div className="order-1 md:order-2">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="text-2xl md:text-5xl font-black mb-4"
        >
          AWIX LOVINA PRIVATE DOLPHIN TOUR
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="text-lg mb-4"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et ex
          nec metus vehicula scelerisque. Duis sit amet justo nec nisi pulvinar
          lobortis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Aksi
        </motion.button>
      </div>
    </div>
  );
};
