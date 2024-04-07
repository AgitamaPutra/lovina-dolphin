import React, { useContext } from "react";
import { I18nContext } from "../context/I18context";

const LanguageSelector = () => {
  const { changeLanguage } = useContext(I18nContext);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  };

  return (
    <select
      onChange={handleLanguageChange}
      defaultValue="en"
      className=" rounded-lg touch-manipulation p-1 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    >
      <option
        value="en"
        className="md:text-lg text-[10px] rounded-lg " // Menambahkan padding kiri dan kanan
      >
        English
      </option>
      <option
        value="id"
        className="md:text-lg text-[10px] rounded-lg  " // Menambahkan padding kiri dan kanan
      >
        Bahasa Indonesia
      </option>
    </select>
  );
};

export default LanguageSelector;
