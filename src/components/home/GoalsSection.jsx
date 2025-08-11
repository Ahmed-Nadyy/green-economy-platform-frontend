import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';
import SectionHeader from '../../pages/Services/ui/SectionHeader';

function GoalsSection({golesUrl}) {
          const { t,i18n } = useTranslation();
    const currentLang = i18n.language || 'en';
  return (
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
  )
}

export default GoalsSection