import React from "react";
import Hero from "../components/Hero";
import { useTranslation } from "react-i18next";
import Image from "../asset/weddings-art-commercial.webp";
const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Hero
        header={t("about.headerAbout")}
        text={t("about.textAbout")}
        style={
          "font-semibold text-lg md:text-2xl tracking-[5px] md:tracking-[10px]"
        }
        image={Image}
      />
      <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
            About Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://via.placeholder.com/600x400"
                alt="About Us Image"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                consectetur risus a libero pretium, sit amet varius mi
                consectetur. Sed feugiat, dolor sed sollicitudin fringilla, elit
                libero ultrices quam, nec gravida quam magna in est. Phasellus
                quis sem ut velit volutpat consequat. Cras vestibulum, elit ac
                efficitur mollis, elit lorem tincidunt magna, eu facilisis dui
                quam et metus. Curabitur id erat sed eros tincidunt cursus.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nulla vehicula mi eu lorem eleifend, eu aliquet nulla mattis.
                Nunc eget erat ac libero venenatis condimentum. Etiam vitae nisi
                quis mi bibendum fringilla sit amet a nulla. Vivamus vitae magna
                sed ligula commodo auctor. Integer sodales metus et justo
                porttitor, et tincidunt urna tempus. Sed posuere tempus velit,
                vel efficitur nisi pellentesque sed. Curabitur lobortis
                scelerisque libero nec accumsan. Maecenas interdum enim id nunc
                tincidunt fermentum. Phasellus vestibulum eleifend nunc, in
                tincidunt lectus sodales nec.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
