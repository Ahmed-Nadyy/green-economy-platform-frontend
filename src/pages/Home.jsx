import React, { useEffect, useState } from "react";
import SectionHeader from "./Services/ui/SectionHeader";
import { useTranslation } from "react-i18next";
import Typewriter from 'typewriter-effect';
import PartnersAPI from "../services/partnersAPI";
import { Link } from "react-router-dom";
import MembersAPI from "../services/MembersAPI";
import backgroundsAPI from "../services/BackgroundAPI";
const Home = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  // const members = [
  //   {
  //     name: "محمد أحمد",
  //     job: "مدير التسويق",
  //     imageUrl: "background.png",
  //     description: "يمتلك خبرة واسعة في التسويق الرقمي وإدارة الحملات الإعلانية."
  //   },
  //     {
  //     name: "محمد أحمد",
  //     job: "مدير التسويق",
  //     imageUrl: "background.png",
  //     description: "يمتلك خبرة واسعة في التسويق الرقمي وإدارة الحملات الإعلانية."
  //   },
  //     {
  //     name: "محمد أحمد",
  //     job: "مدير التسويق",
  //     imageUrl: "background.png",
  //     description: "يمتلك خبرة واسعة في التسويق الرقمي وإدارة الحملات الإعلانية."
  //   },
  //     {
  //     name: "محمد أحمد",
  //     job: "مدير التسويق",
  //     imageUrl: "background.png",
  //     description: "يمتلك خبرة واسعة في التسويق الرقمي وإدارة الحملات الإعلانية."
  //   },
  //     {
  //     name: "محمد أحمد",
  //     job: "مدير التسويق",
  //     imageUrl: "background.png",
  //     description: "يمتلك خبرة واسعة في التسويق الرقمي وإدارة الحملات الإعلانية."
  //   },
  //     {
  //     name: "محمد أحمد",
  //     job: "مدير التسويق",
  //     imageUrl: "background.png",
  //     description: "يمتلك خبرة واسعة في التسويق الرقمي وإدارة الحملات الإعلانية."
  //   },  {
  //     name: "محمد أحمد",
  //     job: "مدير التسويق",
  //     imageUrl: "background.png",
  //     description: "يمتلك خبرة واسعة في التسويق الرقمي وإدارة الحملات الإعلانية."
  //   },  {
  //     name: "محمد أحمد",
  //     job: "مدير التسويق",
  //     imageUrl: "background.png",
  //     description: "يمتلك خبرة واسعة في التسويق الرقمي وإدارة الحملات الإعلانية.يمتلك خبرة واسعة في التسويق الرقمي وإدارة الحملات الإعلانية."
  //   },
  // ];
  const [allPartners, setAllPartners] = useState(null);
  const [members, setMembers] = useState(null);
  const [platformUrl, setPlatformUrl] = useState(null);
  const [institutionWordUrl, setInstitutionWordUrl] = useState(null);
  const [golesUrl, setGolesUrl] = useState(null);
  useEffect(() => {
    async function fetchAllPartners() {
      try {
        const response = await PartnersAPI.getAllPartners();
        const response2 = await MembersAPI.getAllMember();
        const response3 = await backgroundsAPI.getSection(
          {
            sections: ['platform', 'institutionWord', 'goles']
          }
        );
        console.log(response3?.data.data);
        
        response3?.data?.data.map((bac)=>{
          if(bac.section=="platform") setPlatformUrl(bac.url);
          if(bac.section=="institutionWord") setInstitutionWordUrl(bac.url);
          if(bac.section=="goles") setGolesUrl(bac.url);
        })
        setAllPartners(response.data);
        setMembers(response2.data)
      } catch (error) {
        console.error("Failed to fetch contact info:", error);
      }
    }

    fetchAllPartners();
  }, []);
  return (
    <>
      <div className="relative min-h-screen w-full">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:platformUrl ? `url(${import.meta.env.VITE_API_URL_FRONT}${platformUrl})` : 'none',
          }}
        >
          {/* Dark overlay to reduce brightness */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content Section */}
        <div className={`relative z-10 flex items-center justify-center min-h-screen px-3 sm:px-4 md:px-6 lg:px-8 `}>
          <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center w-full">
            <div className="bg-black bg-opacity-30 rounded-lg p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm">
              <h1
                className={`text-white text-[1.3rem] leading-relaxed font-thin ${currentLang == "en" ? "text-left" : "text-right"}`}
                dir={currentLang == "en" ? "ltr" : "rtl"}
                style={{ maxWidth: '850px', margin: '0 auto' }}
              >
                <Typewriter
                  options={{
                    strings: [
                      t("The Green Economy Club platform is a hub for creative innovation in the agricultural sector. It is an electronic platform that connects various stakeholders in the agricultural sector, such as farmers, traders, suppliers, and consumers, and provides a variety of services, such as information exchange, e-commerce, financing, and agricultural guidance.")
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
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Partners Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <SectionHeader title={t("Our Partners")} />

          {/* Partners Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center">
            {allPartners?.map((Partner) => (
              <a
                href={Partner?.link}  // Use href for external links
                target="_blank"
                rel="noopener noreferrer"  // For security, always include this when opening in a new tab
                className="bg-white rounded-lg shadow-md p-4 sm:p-6 w-full max-w-xs h-24 sm:h-28 md:h-32 flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-2 bg-gradient-to-br border border-green-500 p-4 rounded-full flex items-center justify-center ">
                    <img src={`${import.meta.env.VITE_API_URL_FRONT}${Partner?.logo}`} alt={Partner?.name} className="object-contain" />
                  </div>
                </div>
              </a>
            ))}


          </div>
        </div>
      </section>
      {/* */}
      <section className={`bg-green-50 py-12 px-6 md:px-16`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 border-b-4 border-green-600 inline-block pb-2">
            {t('sectionTitle')}
          </h2>

          <ul className="space-y-4 text-lg text-green-900 leading-relaxed list-disc pr-5">
            {t('items', { returnObjects: true }).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <div className="mt-10 bg-white rounded-lg shadow p-6 border border-green-200">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">{t('vision')}</h3>
            <p className="text-green-900 text-md mb-6">{t('visionText')}</p>

            <h3 className="text-2xl font-semibold text-green-700 mb-4">{t('mission')}</h3>
            <p className="text-green-900 text-md">{t('missionText')}</p>
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="relative py-12 sm:py-16 md:py-20">
        {/* Background Image with Overlay */}
         <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:institutionWordUrl ? `url(${import.meta.env.VITE_API_URL_FRONT}${institutionWordUrl})` : 'none',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <SectionHeader title={t("Foundation's word")} />

          {/* Message Content */}
          <div className="bg-black bg-opacity-40 rounded-lg p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm">
            <div className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-4 sm:space-y-6" >
              <h1
                className={`text-white text-[1.3rem] leading-relaxed font-thin ${currentLang == "en" ? "text-left" : "text-right"}`}
                dir={currentLang == "en" ? "ltr" : "rtl"}
                style={{ maxWidth: '850px', margin: '0 auto' }}
              >
                <Typewriter
                  options={{
                    strings: [
                      t("In the era of digital transformation, agricultural e-platforms have become indispensable tools for developing the agricultural sector and achieving food security. These platforms connect farmers, traders, and consumers, providing a variety of services that contribute to improving productivity, increasing income, and enhancing sustainability."),
                    ],
                    autoStart: true,
                    loop: false,
                    delay: 10,
                    deleteSpeed: 0,
                    pauseFor: 999999,
                  }}
                />
              </h1>
              <h1
                className={`text-white text-[1.3rem] leading-relaxed font-thin ${currentLang == "en" ? "text-left" : "text-right"}`}
                dir={currentLang == "en" ? "ltr" : "rtl"}
                style={{ maxWidth: '850px', margin: '3rem auto 0' }}
              >
                <Typewriter
                  options={{
                    strings: [
                      t("Agricultural e-platforms represent a golden opportunity to achieve a qualitative shift in the agricultural sector, utilizing the latest available agricultural methods and technologies. This development utilizes mechanisms that support environmental conservation, food safety, and maximize returns from this sector. This requires interconnectedness and cooperation between the government, institutions, and companies to support these platforms and provide an appropriate environment for their development and use, in order to achieve sustainable development and prosperity in the agricultural sector.")
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
      </section>

      {/* Platform Importance Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 sm:w-40 sm:h-40 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-green-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <SectionHeader title={t("The importance of the Green Economy Club platform")} />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            {/* Feature 1 */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 h-32 sm:h-40 md:h-48 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-white opacity-0 rounded-2xl sm:rounded-3xl group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="text-center relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-base md:text-lg leading-tight" dir="rtl">
                    {t("Improve efficiency and productivity")}
                  </h3>
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-green-300 rounded-full opacity-70"></div>
                <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-green-200 rounded-full opacity-50"></div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-green-500 to-green-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 h-32 sm:h-40 md:h-48 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-white opacity-0 rounded-2xl sm:rounded-3xl group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="text-center relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-base md:text-lg leading-tight" dir="rtl">
                    {t("Agricultural Guidance")}
                  </h3>
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-green-300 rounded-full opacity-70"></div>
                <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-green-200 rounded-full opacity-50"></div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 h-32 sm:h-40 md:h-48 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-white opacity-0 rounded-2xl sm:rounded-3xl group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="text-center relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-base md:text-lg leading-tight" dir="rtl">
                    {t("Exchange of information")}
                  </h3>
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-green-300 rounded-full opacity-70"></div>
                <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-green-200 rounded-full opacity-50"></div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-green-500 to-green-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 h-32 sm:h-40 md:h-48 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-white opacity-0 rounded-2xl sm:rounded-3xl group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="text-center relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zM14 6a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h6zM4 11a1 1 0 011-1h4a1 1 0 110 2H5a1 1 0 01-1-1zM4 14a1 1 0 011-1h4a1 1 0 110 2H5a1 1 0 01-1-1z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-base md:text-lg leading-tight" dir="rtl">
                    {t("Facilitating access to markets")}
                  </h3>
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-green-300 rounded-full opacity-70"></div>
                <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-green-200 rounded-full opacity-50"></div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="group sm:col-span-2 lg:col-span-1">
              <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 h-32 sm:h-40 md:h-48 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-white opacity-0 rounded-2xl sm:rounded-3xl group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="text-center relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4zM3 8a1 1 0 000 2v3a1 1 0 001 1h12a1 1 0 001-1v-3a1 1 0 100-2H3z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-base md:text-lg leading-tight" dir="rtl">
                    {t("Promoting financial inclusion")}
                  </h3>
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-green-300 rounded-full opacity-70"></div>
                <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-green-200 rounded-full opacity-50"></div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="group sm:col-span-2 lg:col-span-1">
              <div className="relative bg-gradient-to-br from-green-500 to-green-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 h-32 sm:h-40 md:h-48 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-white opacity-0 rounded-2xl sm:rounded-3xl group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="text-center relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-base md:text-lg leading-tight" dir="rtl">
                    {t("Supporting sustainable development")}
                  </h3>
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-green-300 rounded-full opacity-70"></div>
                <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-green-200 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goals Section */}
      <section className="relative py-16 sm:py-20 md:py-24">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: golesUrl ? `url(${import.meta.env.VITE_API_URL_FRONT}${golesUrl})` : 'none',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-65"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Section Title */}
          {/* <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-10 md:mb-12 tracking-wide" dir="rtl">
              أهدافنا
            </h2>
          </div> */}
          <SectionHeader title={t("Our Goals")} />

          {/* Goals Content */}
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-16 backdrop-blur-md max-w-5xl border border-white border-opacity-10 w-full">
              <h1
                className={`text-white text-base sm:text-lg md:text-[1.2rem] lg:text-2xl leading-relaxed text-center font-medium ${currentLang == "en" ? "text-left" : "text-right"}`}
                dir={currentLang == "en" ? "ltr" : "rtl"}
                style={{ maxWidth: '850px', margin: '0 auto' }}
              >
                <Typewriter
                  options={{
                    strings: [
                      t("Contributing to achieving integration between the green economy, sustainable development, and social empowerment by bringing about positive change in Arab societies among various stakeholders in the agricultural sector.")
                    ],
                    autoStart: true,
                    loop: false,
                    delay: 10,
                    deleteSpeed: 0,
                    pauseFor: 999999,
                  }}
                />
              </h1>
              {
              }

              {/* Decorative elements */}
              <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 space-x-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse delay-75"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-600 rounded-full animate-pulse delay-150"></div>
              </div>
            </div>
          </div>

          {/* Additional decorative elements - Responsive positioning */}
          <div className="absolute top-10 sm:top-16 md:top-20 left-4 sm:left-6 md:left-10 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-2 border-green-400 border-opacity-100 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 right-4 sm:right-6 md:right-10 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 border-2 border-green-500 border-opacity-100 rounded-full animate-pulse delay-100"></div>
          <div className="absolute top-1/2 left-8 sm:left-12 md:left-20 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-green-400 bg-opacity-100 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-6 sm:right-10 md:right-16 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-green-500 bg-opacity-100 rounded-full animate-bounce delay-200"></div>
        </div>
      </section>
      {/*Club members */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 sm:w-40 sm:h-40 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-green-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <SectionHeader title={t("Club members")} />
          </div>
          <div className="bg-white bg-opacity-30 rounded-lg px-4 sm:px-6 md:px-8 lg:px-12 backdrop-blur-sm mb-9">
            <h1
              className={`text-black text-[1.3rem] leading-relaxed font-thin ${currentLang == "en" ? "text-left" : "text-right"}`}
              dir={currentLang == "en" ? "ltr" : "rtl"}
              style={{ maxWidth: '850px', margin: '0 auto' }}
            >
              <Typewriter
                options={{
                  strings: [
                    t("They are a team of agricultural experts working to unify goals and are the fruit of the continuity of supporting farmers and exchanging experiences and innovation in the field of agriculture.")
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
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            {members?.map((member, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300 group h-80"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={`${import.meta.env.VITE_API_URL_FRONT}${member?.image}`}
                    alt={member?.name}
                    className="w-32 h-32 rounded-full object-cover border border-green-500 shadow-md"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-green-600 transition">
                  {member?.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2 font-medium">{member?.role}</p>
                <p className="text-sm text-gray-600 line-clamp-4">{member?.bio}</p>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;