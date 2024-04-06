import React, { useContext } from "react";
import { I18nContext } from "../context/I18context";
import { Select } from "antd";
const { Option } = Select;

const LanguageSelector = () => {
  const { changeLanguage } = useContext(I18nContext);

  const handleLanguageChange = (value) => {
    changeLanguage(value);
  };

  return (
    <Select
      onChange={handleLanguageChange}
      defaultValue="en"
      style={{
        width: 175,
        borderRadius: "0.375rem",
      }}
    >
      <Option value="en">
        <div className="flex items-center text-lg">English</div>
      </Option>
      <Option value="id">
        <div className="flex items-center text-lg">Bahasa Indonesia</div>
      </Option>
    </Select>
  );
};

export default LanguageSelector;
