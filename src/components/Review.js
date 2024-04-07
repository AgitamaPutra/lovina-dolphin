import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

const Review = () => {
  const { t, i18n } = useTranslation();
  const controls = useAnimation();
  const ref = useRef();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data =
          i18n.language === "en"
            ? require("../locales/en.json")
            : require("../locales/id.json");
        setReviews(data.reviews); // Set the reviews data
      } catch (error) {
        console.error("Error fetching reviews data: ", error);
      }
    };

    fetchData();
  }, [i18n.language]);

  useEffect(() => {
    const refElement = ref.current;

    const onScroll = () => {
      if (refElement) {
        const top = refElement.getBoundingClientRect().top;
        const bottom = refElement.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // When the element is in view
        if (top < windowHeight * 0.8 && bottom > windowHeight * 0.2) {
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
    <section className="bg-gray-100 py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          {t("review.header")}
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={review.image}
                alt={review.name}
                className="rounded-full h-24 w-24 mb-4 object-cover"
                style={{ width: "100px", height: "100px" }}
              />
              <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
              <div className="flex items-center mb-2">
                {[...Array(review.rating)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0l2.472 6.027H18.94l-5.888 4.464 2.473 6.026L10 12.839 4.473 16.517l2.473-6.026L1.061 6.027h6.468L10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-center">{review.review}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Review;
