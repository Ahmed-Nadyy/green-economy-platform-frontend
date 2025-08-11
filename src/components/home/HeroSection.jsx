import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';
import SectionHeader from '../../pages/Services/ui/SectionHeader';
function HeroSection({platformUrl}) {
    const { t,i18n } = useTranslation();
    const currentLang = i18n.language || 'en';
  return (
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
  )
}

export default HeroSection