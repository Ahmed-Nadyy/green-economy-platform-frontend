import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaTiktok, FaFacebook, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top bar with social media and contact info */}
      <div className="bg-white py-2 px-2 sm:px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center rounded-3xl shadow-xl border-2 w-full py-2 px-2 sm:px-8">
          {/* Contact info - right side in RTL */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-reverse sm:space-x-4 text-center sm:text-right mb-2 sm:mb-0">
            <div className="flex items-center text-green-600">
              <MdEmail className="ml-1" size={18} />
              <span className="text-xs sm:text-sm font-medium">greeneconomy@gmail.com</span>
            </div>
            <div className="flex items-center text-green-600">
              <FaMapMarkerAlt className="ml-1" size={18} />
              <span className="text-xs sm:text-sm font-medium">العنوان - قنا - الشئون - شارع ليبيا</span>
            </div>
          </div>

          {/* Social media icons and language switcher - left side in RTL */}
          <div className="flex items-center space-x-reverse space-x-2 sm:space-x-4">
            <LanguageSwitcher />
            <Link to="#" className="bg-[#2ECC71] text-white p-1 rounded hover:bg-green-600">
              <FaYoutube size={16} />
            </Link>
            <Link to="#" className="bg-[#2ECC71] text-white p-1 rounded hover:bg-green-600">
              <FaTiktok size={16} />
            </Link>
            <Link to="#" className="bg-[#2ECC71] text-white p-1 rounded hover:bg-green-600">
              <FaFacebook size={16} />
            </Link>
            <Link to="#" className="bg-[#2ECC71] text-white p-1 rounded hover:bg-green-600">
              <FaWhatsapp size={16} />
            </Link>
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
          <div className="hidden md:flex items-center space-x-reverse space-x-6 text-right">
            <Link to="/" className="text-white font-medium hover:text-green-200">الرئيسية</Link>
            <Link to="/about" className="text-white font-medium hover:text-green-200">من نحن</Link>
            <Link to="/services" className="text-white font-medium hover:text-green-200">خدماتنا</Link>
            <Link to="/gallery" className="text-white font-medium hover:text-green-200">المعرض</Link>
            <Link to="/jobs" className="text-white font-medium hover:text-green-200">فرص عمل</Link>
            <Link to="/contact" className="text-white font-medium hover:text-green-200">تواصل معنا</Link>
          </div>

          {/* Contact buttons - left side in RTL */}
          <div className="flex items-center space-x-reverse space-x-3">
            <Link to="/contact" className="bg-white rounded-full p-2 text-[#2ECC71] hover:bg-gray-100">
              <FaPhone size={18} />
            </Link>
            <Link to="/contact" className="bg-white rounded-full p-2 text-[#2ECC71] hover:bg-gray-100">
              <FaWhatsapp size={18} />
            </Link>
          </div>
        </div>

        {/* Mobile menu - shown when mobileMenuOpen is true */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-green-600 mt-2 py-3 px-4 rounded-lg">
            <div className="flex flex-col space-y-3 text-right">
              <Link to="/" className="text-white font-medium hover:text-green-200 border-b border-green-500 pb-2">الرئيسية</Link>
              <Link to="/about" className="text-white font-medium hover:text-green-200 border-b border-green-500 pb-2">من نحن</Link>
              <Link to="/services" className="text-white font-medium hover:text-green-200 border-b border-green-500 pb-2">خدماتنا</Link>
              <Link to="/gallery" className="text-white font-medium hover:text-green-200 border-b border-green-500 pb-2">المعرض</Link>
              <Link to="/jobs" className="text-white font-medium hover:text-green-200 border-b border-green-500 pb-2">فرص عمل</Link>
              <Link to="/contact" className="text-white font-medium hover:text-green-200">تواصل معنا</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
