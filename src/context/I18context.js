import React, { createContext, useState } from "react";
import i18n from "../i18n"; // Import konfigurasi i18next

// Buat context untuk i18n
export const I18nContext = createContext();

// Buat provider untuk i18n
export const I18nProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <I18nContext.Provider value={{ selectedLanguage, changeLanguage, i18n }}>
      {children}
    </I18nContext.Provider>
  );
};
