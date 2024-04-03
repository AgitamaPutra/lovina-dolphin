import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import terjemahan untuk setiap bahasa
import enTranslation from "./locales/en.json";
import idTranslation from "./locales/id.json";

// Konfigurasi i18next
i18n
  .use(initReactI18next) // Menggunakan plugin untuk React
  .init({
    resources: {
      en: {
        translation: enTranslation, // Terjemahan untuk bahasa Inggris
      },
      id: {
        translation: idTranslation, // Terjemahan untuk bahasa Indonesia
      },
    },
    lng: "en", // Bahasa default
    fallbackLng: "en", // Bahasa fallback jika tidak ditemukan
    interpolation: {
      escapeValue: false, // Menghindari pengkodean karakter HTML
    },
  });

export default i18n;
