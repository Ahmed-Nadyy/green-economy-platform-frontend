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
    <footer className="bg-white text-gray-800 pt-10 pb-4">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: نادي الاقتصاد الأخضر */}
          <div className="text-right md:col-span-1">
            <h3 className="text-[#2ECC71] font-bold text-3xl mb-4">نادي الاقتصاد الأخضر</h3>
            <p className="text-sm leading-relaxed text-center">
              منصة نادي الاقتصاد الأخضر مركزا للابتكار الإبداعي في مجال قطاع الزراعة وهي منصة الكترونية تربط بين مختلف أطراف القطاع الزراعي، مثل المزارعين، والتجار، والموردين، والمستهلكين وتوفر مجموعة متنوعة من الخدمات، مثل تبادل المعلومات، والتجارة الإلكترونية، والتمويل، والإرشاد الزراعي
            </p>
          </div>

          {/* Column 2: الروابط الرئيسية */}
          <div className="text-right">
            <h3 className="text-[#2ECC71] font-bold text-xl mb-4">الروابط الرئيسية</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#2ECC71]">الرئيسية</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#2ECC71]">من نحن</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#2ECC71]">خدماتنا</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#2ECC71]">المعرض</Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-[#2ECC71]">فرص عمل</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#2ECC71]">تواصل معنا</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: خدماتنا */}
          <div className="text-right">
            <h3 className="text-[#2ECC71] font-bold text-xl mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/crops" className="hover:text-[#2ECC71]">المحاصيل الزراعية</Link>
              </li>
              <li>
                <Link to="/services/awareness" className="hover:text-[#2ECC71]">التوعية والإرشاد الزراعي</Link>
              </li>
              <li>
                <Link to="/services/climate" className="hover:text-[#2ECC71]">التغيرات المناخية وتأثيرها</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: تواصل معنا */}
          <div className="text-right">
            <h3 className="text-[#2ECC71] font-bold text-xl mb-4">تواصل معنا</h3>
            <div className="space-y-3 flex flex-col items-start">
              <div className="flex items-center justify-end">
                <FaEnvelope className="ml-2 text-[#2ECC71]" size={18} />
                <span>greeneconomy@gmail.com</span>
              </div>
              <div className="flex items-center justify-end">
                <FaPhone className="ml-2 text-[#2ECC71]" size={18} />
                <span>+201023536355</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <div className="flex justify-center mb-4">
          <button 
            onClick={scrollToTop} 
            className="bg-[#2ECC71] text-white p-3 rounded-full hover:bg-green-600 shadow-md"
            aria-label="العودة إلى الأعلى"
          >
            <FaArrowUp size={20} />
          </button>
        </div>

        {/* Social media and copyright */}
        <div className="bg-[#2ECC71] text-white py-3 px-4 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between items-center">
             {/* Copyright */}
             <div className="text-center md:text-right">
              <p>All Rights Reserved © Designed by Dandara Al-Ebdaa3</p>
            </div>
            {/* Social media icons */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link to="#" className="bg-white text-[#2ECC71] mx-4 p-2 rounded-full hover:bg-gray-100">
                <FaYoutube size={20} />
              </Link>
              <Link to="#" className="bg-white text-[#2ECC71] p-2 rounded-full hover:bg-gray-100">
                <FaTiktok size={20} />
              </Link>
              <Link to="#" className="bg-white text-[#2ECC71] p-2 rounded-full hover:bg-gray-100">
                <FaFacebook size={20} />
              </Link>
              <Link to="#" className="bg-white text-[#2ECC71] p-2 rounded-full hover:bg-gray-100">
                <FaWhatsapp size={20} />
              </Link>
            </div>

           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
