import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';
import backgroundsAPI from '../../services/backgroundAPI';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  const [ourServices, setOurServices] = useState(null);
  const [loadBackground, setLoadBackground] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    async function fetchAllBackground() {
      try {
        const response = await backgroundsAPI.getSection({
          sections: ['ourServices'],
        });
        const data = response?.data?.data || [];
        const found = data.find((item) => item.section === 'ourServices');
        if (found?.url) setOurServices(found.url);
      } catch (error) {
        console.error('Failed to fetch contact info:', error);
      }
    }

    fetchAllBackground();
  }, []);

  // IntersectionObserver to trigger background load
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadBackground(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-green-900 text-white" ref={heroRef}>
      <div className="relative min-h-screen w-full">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ease-in-out"
          style={{
            backgroundImage:
              loadBackground && ourServices
                ? `url(${import.meta.env.VITE_API_URL_FRONT}${ourServices})`
                : 'none',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-black bg-opacity-30 rounded-lg p-8 sm:p-12 backdrop-blur-sm">
              <h1
                className={`text-white text-[1.3rem] leading-relaxed font-thin ${
                  currentLang === 'en' ? 'text-left' : 'text-right'
                }`}
                dir={currentLang === 'en' ? 'ltr' : 'rtl'}
                style={{ maxWidth: '850px', margin: '0 auto' }}
              >
                <Typewriter
                  options={{
                    strings: [
                      t(
                        'The Green Economy Club is a project of the Egyptian Family Development Foundation, which works to spread awareness about the agricultural sector and is a center for creative innovation in the field of agriculture. Through the activities of this project, the Foundation launched its electronic platform (the Green Economy Club Platform)'
                      ),
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
    </div>
  );
};

export default HeroSection;
