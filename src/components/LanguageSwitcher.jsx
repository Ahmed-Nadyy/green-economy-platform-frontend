import React from "react";
import { FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  const toggleLanguage = () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr'; // هذا اختياري إذا لم تضبطه في App.jsx
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center ml-4 bg-[#2ECC71] text-white px-2 py-1 rounded hover:bg-green-600 transition-colors"
    >
      <FaGlobe className="mr-1" size={14} />
      <span className="text-sm font-medium">
        {currentLang === "ar" ? "العربية" : "English"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
