import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = ({ header, text, style, button, showButton, image, fungsi }) => {
  return (
    <div
      className="hero-container relative h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white mx-5 md:mx-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className={`${style} mt-10 md:mt-20`}
          >
            {header.toUpperCase()}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-[20px] md:text-[60px] font-black mt-10"
          >
            {text}
          </motion.p>
          {showButton && (
            <Link to="/">
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                onClick={fungsi}
                className=" bg-blue-500 hover:bg-blue-800 text-white font-bold py-4 px-4 rounded-full transition-colors mt-16"
              >
                {button}
              </motion.button>
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
