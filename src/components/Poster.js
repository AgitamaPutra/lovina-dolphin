import React from "react";
import Flyer from "../asset/Poster.png";
import { Image } from "antd";

export const Poster = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center py-10 md:py-20 px-5 md:px-20">
      {/* Gambar flyer di kiri */}
      <div className="order-1 md:order-1">
        <Image
          src={Flyer}
          alt="Poster"
          className="w-full rounded-xl border-8 border-solid border-gray-300 drop-shadow-lg shadow-lg"
        />
      </div>
      {/* Penjelasan di kanan */}
      <div className="order-1 md:order-2">
        <h2 className="text-2xl md:text-5xl font-black mb-4">
          AWIX LOVINA PRIVATE DOLPHIN TOUR
        </h2>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et ex
          nec metus vehicula scelerisque. Duis sit amet justo nec nisi pulvinar
          lobortis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Aksi
        </button>
      </div>
    </div>
  );
};
