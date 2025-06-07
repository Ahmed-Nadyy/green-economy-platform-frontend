import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaTiktok, FaFacebook, FaWhatsapp, FaPhone, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-white text-gray-800 pt-8 pb-4 border-t-4 border-[#2ECC71]">
      <div className="container mx-auto px-2 sm:px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Column 1: نادي الاقتصاد الأخضر */}
          <div className="text-center sm:text-right">
            <h3 className="text-[#2ECC71] font-bold text-2xl sm:text-3xl mb-3 sm:mb-4">نادي الاقتصاد الأخضر</h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              منصة نادي الاقتصاد الأخضر مركزا للابتكار الإبداعي في مجال قطاع الزراعة وهي منصة الكترونية تربط بين مختلف أطراف القطاع الزراعي، مثل المزارعين، والتجار، والموردين، والمستهلكين وتوفر مجموعة متنوعة من الخدمات، مثل تبادل المعلومات، والتجارة الإلكترونية، والتمويل، والإرشاد الزراعي
            </p>
          </div>

          {/* Column 2: الروابط الرئيسية */}
          <div className="text-center sm:text-right">
            <h3 className="text-[#2ECC71] font-bold text-lg sm:text-xl mb-3 sm:mb-4">الروابط الرئيسية</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#2ECC71] text-sm sm:text-base">الرئيسية</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#2ECC71] text-sm sm:text-base">من نحن</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#2ECC71] text-sm sm:text-base">خدماتنا</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#2ECC71] text-sm sm:text-base">المعرض</Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-[#2ECC71] text-sm sm:text-base">فرص عمل</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#2ECC71] text-sm sm:text-base">تواصل معنا</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: خدماتنا */}
          <div className="text-center sm:text-right">
            <h3 className="text-[#2ECC71] font-bold text-lg sm:text-xl mb-3 sm:mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/crops" className="hover:text-[#2ECC71] text-sm sm:text-base">المحاصيل الزراعية</Link>
              </li>
              <li>
                <Link to="/services/awareness" className="hover:text-[#2ECC71] text-sm sm:text-base">التوعية والإرشاد الزراعي</Link>
              </li>
              <li>
                <Link to="/services/climate" className="hover:text-[#2ECC71] text-sm sm:text-base">التغيرات المناخية وتأثيرها</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: تواصل معنا */}
          <div className="text-center sm:text-right">
            <h3 className="text-[#2ECC71] font-bold text-lg sm:text-xl mb-3 sm:mb-4">تواصل معنا</h3>
            <div className="space-y-3 flex flex-col items-center sm:items-end">
              <div className="flex items-center">
                <span className="text-sm sm:text-base">greeneconomy@gmail.com</span>
                <FaEnvelope className="mr-2 text-[#2ECC71]" size={16} />
              </div>
              <div className="flex items-center">
                <span className="text-sm sm:text-base">+201023536355</span>
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
              <Link to="#" className="bg-white ml-4 text-[#2ECC71] p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-transform hover:scale-105">
                <FaYoutube size={16} className="sm:w-5 sm:h-5" />
              </Link>
              <Link to="#" className="bg-white text-[#2ECC71] p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-transform hover:scale-105">
                <FaTiktok size={16} className="sm:w-5 sm:h-5" />
              </Link>
              <Link to="#" className="bg-white text-[#2ECC71] p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-transform hover:scale-105">
                <FaFacebook size={16} className="sm:w-5 sm:h-5" />
              </Link>
              <Link to="#" className="bg-white text-[#2ECC71] p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-transform hover:scale-105">
                <FaWhatsapp size={16} className="sm:w-5 sm:h-5" />
              </Link>
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
