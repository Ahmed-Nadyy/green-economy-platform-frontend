import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaTiktok, FaFacebook, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from 'react-i18next';
import ContactAPI from "../services/contactsAPI";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactInfo, setContactInfo] = useState(null);  
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchContactInfo() {
      try {
        const response = await ContactAPI.getAllMedia(); 
        setContactInfo(response.data); 
      } catch (error) {
        console.error("Failed to fetch contact info:", error);
      }
    }

    fetchContactInfo();
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top bar with social media and contact info */}
      <div className="bg-white py-2 px-2 sm:px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center rounded-3xl shadow-xl border-2 w-full py-2 px-2 sm:px-8">
          {/* Contact info - right side in RTL */}
          <div className="hidden sm:flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-reverse sm:space-x-4 text-center sm:text-right mb-2 sm:mb-0">
            {contactInfo && (
              <>
                <div className="flex items-center text-green-600">
                  <MdEmail className="ml-1" size={18} />
                  <span className="text-xs sm:text-sm font-medium">{contactInfo.email}</span>
                </div>
                <div className="flex items-center text-green-600">
                  <FaMapMarkerAlt className="ml-1" size={18} />
                  <span className="text-xs sm:text-sm font-medium">{contactInfo.address}</span>
                </div>
              </>
            )}
          </div>

          {/* Social media icons and language switcher - left side in RTL */}
          <div className="flex items-center justify-between space-x-2 sm:space-x-1">
            <LanguageSwitcher />
            <Link to={contactInfo?.youtubeLink} className="bg-[#2ECC71] text-white p-1 rounded hover:bg-green-600">
              <FaYoutube size={16} />
            </Link>
            <Link to={contactInfo?.tiktokLink} className="bg-[#2ECC71] text-white p-1 rounded hover:bg-green-600">
              <FaTiktok size={16} />
            </Link>
            <Link to={contactInfo?.facebookLink} className="bg-[#2ECC71] text-white p-1 rounded hover:bg-green-600">
              <FaFacebook size={16} />
            </Link>
            <a href={`https://wa.me/+2${contactInfo?.whatsappLink}`} className="bg-[#2ECC71] text-white p-1 rounded hover:bg-green-600" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-[#2ECC71] py-3 px-2 sm:px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Navigation links - right side in RTL - hidden on mobile */}
<div className="hidden md:flex items-center space-x-4"> {/* تعديل لإضافة مساحة بين العناصر */}
  {/* إضافة اللوجو */}
  <Link to="/" className="flex items-center">
    <img 
      src="logo.png"  // قم بتغيير المسار إلى مسار اللوجو الخاص بك
      alt="Logo" 
      className="w-12 h-12 sm:w-16 sm:h-16 mr-2 border border-white rounded-[50%] mx-4"  // تأكد من ضبط الحجم
    />
  </Link>

  {/* الروابط الأخرى */}
  <Link to="/" className="text-white font-medium hover:text-green-200 mx-2">{t("Home")}</Link>
  <Link to="/about" className="text-white font-medium hover:text-green-200 mx-2">{t("About Us")}</Link>
  <Link to="/services" className="text-white font-medium hover:text-green-200 mx-2">{t("Our services")}</Link>
  <Link to="/gallery" className="text-white font-medium hover:text-green-200 mx-2">{t("Exhibition")}</Link>
  <Link to="/jobs" className="text-white font-medium hover:text-green-200 mx-2">{t("Job")}</Link>
  <Link to="/contact" className="text-white font-medium hover:text-green-200 mx-2">{t("Contact US")}</Link>
</div>


          {/* Contact buttons - left side in RTL */}
          <div className="flex items-center ">
            {/* رابط الاتصال */}
            <a href={`tel:+2${contactInfo?.phoneNumber}`} className="bg-white rounded-full p-2 text-[#2ECC71] hover:bg-gray-100 mx-2">
              <FaPhone size={24} />
            </a>
            {/* رابط الواتساب */}
            <a href={`https://wa.me/+2${contactInfo?.whatsappLink}`} className="bg-white rounded-full p-2 text-[#2ECC71] hover:bg-gray-100 mx-2" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        {/* Mobile menu - shown when mobileMenuOpen is true */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-green-600 mt-2 py-3 px-4 rounded-lg">
            <div className="flex flex-col space-y-3 text-right">
              <Link to="/" className="text-white font-medium hover:text-green-200 border-b border-green-500 pb-2">{t("Home")}</Link>
              <Link to="/about" className="text-white font-medium hover:text-green-200 border-b border-green-500 pb-2">{t("About Us")}</Link>
              <Link to="/services" className="text-white font-medium hover:text-green-200 border-b border-green-500 pb-2">{t("Our services")}</Link>
              <Link to="/gallery" className="text-white font-medium hover:text-green-200 border-b border-green-500 pb-2">{t("Exhibition")}</Link>
              <Link to="/jobs" className="text-white font-medium hover:text-green-200 border-b border-green-500 pb-2">{t("Job")}</Link>
              <Link to="/contact" className="text-white font-medium hover:text-green-200">{t("Contact US")}</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
