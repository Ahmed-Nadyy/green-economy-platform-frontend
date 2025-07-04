import React, { useEffect, useState } from "react";
import SectionHeader from "./Services/ui/SectionHeader";
import { useTranslation } from "react-i18next";
import Typewriter from 'typewriter-effect';
import backgroundsAPI from "../services/BackgroundAPI";

const features = [
  {
    id: 1,
    title: "Connect with experts",
    description: "Connecting farmers with agricultural experts for support and advice.",
    highlighted: true,
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Agricultural Solutions",
    description: "Innovative solutions to agricultural problems based on community and expert expertise",
    highlighted: false,
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Knowledge exchange",
    description: "Providing a platform for farmers to exchange knowledge and experiences on best agricultural practices and modern technologies.",
    highlighted: true,
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524a1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Product Marketing",
    description: "A platform for marketing agricultural products and connecting farmers to local and global markets.",
    highlighted: false,
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Technical support",
    description: "Specialized technical support for farmers to help them solve technical and agricultural problems.",
    highlighted: true,
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Training and qualification",
    description: "Providing training and qualification opportunities for farmers to raise their efficiency and capabilities.",
    highlighted: false,
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524a1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    ),
  },
];

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const [aboutUsUrl, setAboutUsUrl] = useState(null);
  useEffect(() => {
    async function fetchAllBackground() {
      try {
        const response3 = await backgroundsAPI.getSection(
          {
            sections: ['aboutUs']
          }
        );
        console.log(response3?.data.data);
        response3?.data?.data.map((bac)=>{
          if(bac.section=="aboutUs") setAboutUsUrl(bac.url);
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
           backgroundImage:aboutUsUrl ? `url(${import.meta.env.VITE_API_URL_FRONT}${aboutUsUrl})` : 'none',
          }}
        >
          {/* Dark overlay to reduce brightness */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Content */}
            <div className="bg-black bg-opacity-30 rounded-lg p-8 sm:p-12 backdrop-blur-sm">
              <h1
                className={`text-white text-[1.3rem] leading-relaxed font-thin ${currentLang == "en" ? "text-left" : "text-right"}`}
                 dir={currentLang == "en" ? "ltr" : "rtl"}
                style={{ maxWidth: '850px', margin: '0 auto' }}
              >
                <Typewriter
                  options={{
                    strings: [
                      t("The Green Economy Club is one of the projects of the Egyptian Family Development Foundation, which works to spread awareness about the agricultural sector and is a center for creative innovation in the agricultural sector. Through the activities of this project, the Foundation launched its electronic platform (the Green Economy Club Platform) for Egyptian farmers. It is a virtual community that brings together farmers and those interested in agriculture to exchange knowledge and experiences, communicate with experts, and cooperate in solving the problems they face. The electronic platform uses interactive methods that connect various parties in the agricultural sector, such as farmers, traders, suppliers, and consumers.")
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

      {/* أهداف النادي الإلكتروني الزراعي Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title={t("Agricultural Electronic Club Objectives")} />

          {/* Goals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`
                relative group cursor-pointer transition-all duration-300 transform hover:-translate-y-2
                ${feature.highlighted
                    ? 'bg-gradient-to-br from-green-500 to-green-600 text-white'
                    : 'bg-white hover:bg-gray-50'
                  }
                rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 
                ${feature.highlighted ? 'border-green-400' : 'border-green-100 hover:border-green-300'}
              `}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-t-2xl"></div>

                {/* Icon */}
                <div className={`
                w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto
                transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3
                ${feature.highlighted
                    ? 'bg-white text-green-500 shadow-lg'
                    : 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-md'
                  }
                ${hoveredCard === feature.id ? 'animate-pulse' : ''}
              `}>
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className={`
                  text-xl font-bold mb-4 transition-colors duration-300
                  ${feature.highlighted ? 'text-white' : 'text-gray-800 group-hover:text-green-600'}
                `}>
                    {t(feature.title)}
                  </h3>

                  <p className={`
                  leading-relaxed transition-colors duration-300
                  ${feature.highlighted
                      ? 'text-green-50'
                      : 'text-gray-600 group-hover:text-gray-700'
                    }
                `}>
                    {t(feature.description)}
                  </p>
                </div>

                {/* Features Grid */}
                <div className={`
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300
                ${feature.highlighted ? 'bg-white' : 'bg-green-500'}
              `}></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* فوائد المنصة الزراعية Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title={t("Benefits of the Agricultural Electronic Club")} />

          {/* Benefits Cards */}
          <div className={`space-y-8 ${currentLang == "en" ? "text-left" : "text-right"}`} dir={currentLang == "en" ? "rtl" : "ltr"}>
            {/* Card 1: تسهيل الوصول إلى الأسواق */}
            <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-xl p-4 sm:p-6 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 bg-white rounded-bl-lg">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="w-full md:w-1/4 mb-4 md:mb-0 flex justify-center md:justify-start">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                    </svg>
                  </div>
                </div>

                <div className={`w-full md:w-3/4 ${currentLang == "en" ? "text-left" : "text-right"} md:mt-5`} dir={currentLang == "en" ? "ltr" : "rtl"} >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" >{t("Facilitating access to markets :")}</h3>
                  <ul className="text-white text-base sm:text-lg space-y-2 justify-start" >
                    <li className="flex items-center justify-start" >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>
                        {t("It provides farmers with access to new markets, increasing sales and marketing opportunities.")}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>
                        {t("Helping traders and consumers find agricultural products easily and transparently.")}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-300 rounded-full opacity-20"></div>
            </div>

            {/* Card 2: تحسين الكفاءة والإنتاجية */}
            <div className="bg-white border-2 border-green-200 rounded-xl p-4 sm:p-6 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 bg-green-500 rounded-bl-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="w-full md:w-1/4 mb-4 md:mb-0 flex justify-center md:justify-start">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className={`w-full md:w-3/4 ${currentLang == "en" ? "text-left" : "text-right"} md:mt-5`} dir={currentLang == "en" ? "ltr" : "rtl"}>
                  <h3 className="text-xl sm:text-2xl font-bold text-green-600 mb-2" dir={currentLang == "en" ? "ltr" : "rtl"}>{t("Improve efficiency and productivity :")}</h3>
                  <ul className="text-gray-700 text-base sm:text-lg space-y-2 justify-start" dir={currentLang == "en" ? "ltr" : "rtl"}>
                    <li className="flex items-center ">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>
                        {t("Provides information on best agricultural practices, modern technologies, and resource management.")}
                      </span>
                    </li>
                    <li className="flex items-center ">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>
                        {t("Helps manage inventory, track agricultural operations, and improve the supply chain.")}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {currentLang == "ar" ? <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-100 rounded-full"></div> : ""}
            </div>

            {/* Card 3: تعزيز الشمول المالي */}
            <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-xl p-4 sm:p-6 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 bg-white rounded-bl-lg">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="w-full md:w-1/4 mb-4 md:mb-0 flex justify-center md:justify-start">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className={`w-full md:w-3/4 ${currentLang == "en" ? "text-left" : "text-right"} md:mt-5`} dir={currentLang == "en" ? "ltr" : "rtl"}>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" dir={currentLang == "en" ? "ltr" : "rtl"}>
                    {t("Promoting financial inclusion :")}
                  </h3>
                  <p className="text-white text-base sm:text-lg" dir={currentLang == "en" ? "ltr" : "rtl"}>
                    {t("It provides agricultural financing solutions, such as offering microfinance providers and agricultural insurance, helping farmers invest and grow their businesses.")}
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-300 rounded-full opacity-20"></div>
            </div>

            {/* Card 4: دعم التنمية المستدامة */}
            <div className="bg-white border-2 border-green-200 rounded-xl p-4 sm:p-6 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 bg-green-500 rounded-bl-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="w-full md:w-1/4 mb-4 md:mb-0 flex justify-center md:justify-start">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className={`w-full md:w-3/4 ${currentLang == "en" ? "text-left" : "text-right"} md:mt-5`} dir={currentLang == "en" ? "ltr" : "rtl"}>
                  <h3 className="text-xl sm:text-2xl font-bold text-green-600 mb-2 " dir={currentLang == "en" ? "ltr" : "rtl"}>
                    {t("Supporting sustainable development :")}
                  </h3>
                  <ul className="text-gray-700 text-base sm:text-lg space-y-2 justify-start" dir={currentLang == "en" ? "ltr" : "rtl"}>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>
                        {t("It encourages the adoption of sustainable agricultural practices, improved management of natural resources, and environmental conservation.")}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>
                        {t("Contributing to reducing food loss and improving food security.")}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {currentLang == "ar" ? <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-100 rounded-full"></div> : ""}

            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;