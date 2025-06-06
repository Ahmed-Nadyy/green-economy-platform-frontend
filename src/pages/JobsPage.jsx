import React, { useState } from "react";
import bg1 from "../assets/jobs/bg1.png";

const JobsPage = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    preferredJobTitle: '',
    yearsOfExperience: '',
    email: '',
    contactNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };
  return (
    <>
      <div className="relative min-h-screen w-full">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: bg1 ? `url(${bg1})` : 'none',
          }}
        >
          {/* Dark overlay to reduce brightness */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Content */}
            <div className="bg-black bg-opacity-30 rounded-lg p-8 sm:p-12 backdrop-blur-sm">
              <h1 className="text-white text-xl sm:text-2xl lg:text-2xl leading-relaxed mb-6 font-thin" dir="rtl">
                نادي الاقتصاد الأخضر يقدم فرص عمل الان
              </h1>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>


      </div>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8" dir="rtl">
              تقدم بطلب الآن
            </h2>
          </div>

          {/* Application Form */}
          <div className="bg-green-500 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="space-y-6">
              {/* First Row - Full Name and Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="الاسم بالكامل"
                    className="w-full px-6 py-4 rounded-xl border-0 bg-white text-gray-800 placeholder-gray-500 text-lg focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300"
                    dir="rtl"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="المحمول"
                    className="w-full px-6 py-4 rounded-xl border-0 bg-white text-gray-800 placeholder-gray-500 text-lg focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300"
                    dir="rtl"
                  />
                </div>
              </div>

              {/* Second Row - Preferred Job Title */}
              <div>
                <input
                  type="text"
                  name="preferredJobTitle"
                  value={formData.preferredJobTitle}
                  onChange={handleInputChange}
                  placeholder="الوظيفة المتقدم لها"
                  className="w-full px-6 py-4 rounded-xl border-0 bg-white text-gray-800 placeholder-gray-500 text-lg focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300"
                  dir="rtl"
                />
              </div>

              {/* Third Row - Years of Experience */}
              <div>
                <textarea
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleInputChange}
                  placeholder="سنوات الخبرات"
                  rows="4"
                  className="w-full px-6 py-4 rounded-xl border-0 bg-white text-gray-800 placeholder-gray-500 text-lg focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 resize-none"
                  dir="rtl"
                />
              </div>

              {/* Fourth Row - Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="البريد الإلكتروني"
                  className="w-full px-6 py-4 rounded-xl border-0 bg-white text-gray-800 placeholder-gray-500 text-lg focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300"
                  dir="rtl"
                />
              </div>

              {/* Fifth Row - Contact Number */}
              <div>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="رقم التواصل"
                  className="w-full px-6 py-4 rounded-xl border-0 bg-white text-gray-800 placeholder-gray-500 text-lg focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300"
                  dir="rtl"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-black text-white font-bold text-xl py-4 px-8 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-300 transform hover:scale-105"
                >
                  إرسال
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobsPage;