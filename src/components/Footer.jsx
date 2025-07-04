import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaTiktok, FaFacebook, FaWhatsapp, FaPhone, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ContactAPI from "../services/contactsAPI";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
    const [contactInfo, setContactInfo] = useState(null);  

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
  const { t } = useTranslation();

  return (
    <footer className="bg-white text-gray-800 pt-8 pb-4 border-t-4 border-[#2ECC71]">
      <div className="container mx-auto px-2 sm:px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Column 1: نادي الاقتصاد الأخضر */}
          <div className="text-center sm:text-right">
            <h3 className="text-[#2ECC71] font-bold text-2xl sm:text-3xl mb-3 sm:mb-4">
              {t("name")}
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              {t("The Green Economy Club platform is a hub for creative innovation in the agricultural sector. It is an electronic platform that connects various stakeholders in the agricultural sector, such as farmers, traders, suppliers, and consumers, and provides a variety of services, such as information exchange, e-commerce, financing, and agricultural guidance.")}
            </p>
          </div>

          {/* Column 2: الروابط الرئيسية */}
          <div className="text-center sm:text-right">
            <h3 className="text-[#2ECC71] font-bold text-lg sm:text-xl mb-3 sm:mb-4">{t("Main Links")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#2ECC71] text-sm sm:text-base">{t("Home")}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#2ECC71] text-sm sm:text-base">{t("About Us")}</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#2ECC71] text-sm sm:text-base">{t("Our services")}</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#2ECC71] text-sm sm:text-base">{t("Exhibition")}</Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-[#2ECC71] text-sm sm:text-base">{t("Job")}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#2ECC71] text-sm sm:text-base">{t("Contact US")}</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: خدماتنا */}
          <div className="text-center sm:text-right">
            <h3 className="text-[#2ECC71] font-bold text-lg sm:text-xl mb-3 sm:mb-4">{t("Our services")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/crops" className="hover:text-[#2ECC71] text-sm sm:text-base">{t("Agricultural Crops")}</Link>
              </li>
              <li>
                <Link to="/services/awareness" className="hover:text-[#2ECC71] text-sm sm:text-base">{t("Agricultural awareness and guidance")}</Link>
              </li>
              <li>
                <Link to="/services/climate" className="hover:text-[#2ECC71] text-sm sm:text-base">{t("Climate change and its impact")}</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: تواصل معنا */}
          <div className="text-center sm:text-right">
            <h3 className="text-[#2ECC71] font-bold text-lg sm:text-xl mb-3 sm:mb-4">{t("Contact US")}</h3>
            <div className="space-y-3 flex flex-col items-center sm:items-end">
              <div className="flex items-center">
                <span className="text-sm sm:text-base">{contactInfo?.email}</span>
                <FaEnvelope className="mr-2 text-[#2ECC71]" size={16} />
              </div>
              <div className="flex items-center">
                <span className="text-sm sm:text-base">2{contactInfo?.phoneNumber}+</span>
                <FaPhone className="mr-2 text-[#2ECC71]" size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <div className="flex justify-center mb-4">
          <button 
            onClick={scrollToTop} 
            className="bg-[#2ECC71] text-white p-2 sm:p-3 rounded-full hover:bg-green-600 shadow-md transition-transform hover:scale-105"
            aria-label="العودة إلى الأعلى"
          >
            <FaArrowUp size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Social media and copyright */}
        <div className="bg-[#2ECC71] text-white py-3 px-4 rounded-lg">
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
            {/* Social media icons */}
            <div className="flex space-x-3 sm:space-x-4 mt-3 sm:mt-0">
              <Link to={contactInfo?.youtubeLink} className="bg-white ml-4 text-[#2ECC71] p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-transform hover:scale-105">
                <FaYoutube size={16} className="sm:w-5 sm:h-5" />
              </Link>
              <Link to={contactInfo?.tiktokLink} className="bg-white text-[#2ECC71] p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-transform hover:scale-105">
                <FaTiktok size={16} className="sm:w-5 sm:h-5" />
              </Link>
              <Link to={contactInfo?.facebookLink} className="bg-white text-[#2ECC71] p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-transform hover:scale-105">
                <FaFacebook size={16} className="sm:w-5 sm:h-5" />
              </Link>
              <a href={`https://wa.me/+2${contactInfo?.whatsappLink}`} className="bg-white text-[#2ECC71] p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-transform hover:scale-105">
                <FaWhatsapp size={16} className="sm:w-5 sm:h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center sm:text-right">
              <p className="text-xs sm:text-sm">All Rights Reserved © Designed by Dandara Al-Ebdaa3</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
