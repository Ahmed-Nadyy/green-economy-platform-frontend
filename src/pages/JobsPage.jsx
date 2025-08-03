import React, { useEffect, useState } from "react";
import jobRequestAPI from "../services/jobRequestAPI";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import Typewriter from 'typewriter-effect';
import backgroundsAPI from "../services/backgroundAPI";

const JobsPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    role: '',
    qualification: '',
    email: '',
    experience: ''
  });
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const { t } = useTranslation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // دالة للتحقق من الحقول
  const isFormValid = () => {
    return Object.values(formData).every(value => value.trim() !== '');
  };

  const handleSubmit = async () => {
    if (!isFormValid()) {
      toast.error(
        <div>
          <AiOutlineCloseCircle className="inline-block mr-2 text-white" />
          {t("Please fill out all fields")}
        </div>,
        {
          position: "top-center",
          className: "bg-red-500 text-white font-bold rounded-lg shadow-lg p-4"
        }
      );
      return;
    }

    try {
      await jobRequestAPI.createJobRequest(formData);
      toast.success(
        <div>
          <AiOutlineCheckCircle className="inline-block mr-2 text-white" />
          {t("Request sent successfully")}
        </div>,
        {
          position: "top-right",
          className: "bg-green-500 text-white font-bold rounded-lg shadow-lg p-10"
        }
      );
      // إعادة تعيين النموذج
      setFormData({
        fullName: '',
        phoneNumber: '',
        role: '',
        qualification: '',
        email: '',
        experience: ''
      });
    } catch (error) {
      toast.error(
        <div>
          <AiOutlineCloseCircle className="inline-block mr-2 text-white" />
          {t(error.response.data.message)}
        </div>,
        {
          position: "top-center",
          className: "bg-red-500 text-white font-bold rounded-lg shadow-lg p-4"
        }
      );
    }
  };
  const [careerOpportunities, setCareerOpportunities] = useState(null);
    useEffect(() => {
      async function fetchAllBackground() {
        try {
          const response3 = await backgroundsAPI.getSection(
            {
              sections: ['careerOpportunities']
            }
          );
          console.log(response3?.data.data);
          response3?.data?.data.map((bac)=>{
            if(bac.section=="careerOpportunities") setCareerOpportunities(bac.url);
          })
        } catch (error) {
          console.error("Failed to fetch contact info:", error);
        }
      }
  
      fetchAllBackground();
    }, []);
  return (
    <>
      <div className="relative min-h-screen w-full">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:careerOpportunities ? `url(${import.meta.env.VITE_API_URL_FRONT}${careerOpportunities})` : 'none',
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
               <h1 className={`text-white text-[1.3rem] leading-relaxed font-thin ${currentLang == "en" ? "text-left" : "text-right"}`}
                 dir={currentLang == "en" ? "ltr" : "rtl"}
                style={{ maxWidth: '850px', margin: '0 auto' }}>
                                  <Typewriter
                  options={{
                    strings: [
                      t("Green Economy Club is now offering job opportunities.")
                    ],
                    autoStart: true,
                    loop: false,        
                    delay: 10,          
                    deleteSpeed: 0,     
                    pauseFor: 999999,   
                  }}
                />
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
              {t("Apply now")}
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
                    placeholder={t("Full name")}
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
                    placeholder={t("Mobile")}
                    className="w-full px-6 py-4 rounded-xl border-0 bg-white text-gray-800 placeholder-gray-500 text-lg focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300"
                    dir="rtl"
                  />
                </div>
              </div>

              {/* Second Row - Preferred Job Title */}
              <div>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  placeholder={t("The Position applied for")}
                  className="w-full px-6 py-4 rounded-xl border-0 bg-white text-gray-800 placeholder-gray-500 text-lg focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300"
                  dir="rtl"
                />
              </div>

              {/* Fifth Row - Contact Number */}
              <div>
                <input
                  type="tel"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder={t("Number of years of experience")}
                  className="w-full px-6 py-4 rounded-xl border-0 bg-white text-gray-800 placeholder-gray-500 text-lg focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300"
                  dir="rtl"
                />
              </div>
              {/* Third Row - Years of Experience */}
              <div>
                <textarea
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  placeholder={t("Qualifications")}
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
                  placeholder={t("Email")}
                  className="w-full px-6 py-4 rounded-xl border-0 bg-white text-gray-800 placeholder-gray-500 text-lg focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300"
                  dir="rtl"
                />
              </div>


              {/* Submit Button */}
             <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  disabled={!isFormValid()} // تعطيل الزر إذا كانت الحقول فارغة
                  className={`w-full bg-black text-white font-bold text-xl py-4 px-8 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-300 transform hover:scale-105 ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {t("Send")}
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