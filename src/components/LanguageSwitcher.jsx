import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("ar"); // Default language is Arabic

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
    // Here you would implement the actual language change logic
    // This could involve context API, Redux, or other state management
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center bg-[#2ECC71] text-white px-2 py-1 rounded hover:bg-green-600 transition-colors"
    >
      <FaGlobe className="mr-1" size={14} />
      <span className="text-sm font-medium">{language === "ar" ? "العربية" : "English"}</span>
    </button>
  );
};

export default LanguageSwitcher;