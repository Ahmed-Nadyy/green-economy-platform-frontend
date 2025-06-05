import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("ar");

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");

  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center ml-4 bg-[#2ECC71] text-white px-2 py-1 rounded hover:bg-green-600 transition-colors"
    >
      <FaGlobe className="mr-1" size={14} />
      <span className="text-sm font-medium">{language === "ar" ? "العربية" : "English"}</span>
    </button>
  );
};

export default LanguageSwitcher;