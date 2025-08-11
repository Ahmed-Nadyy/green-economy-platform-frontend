import React, { useEffect, useState, useRef } from 'react';
import { MessageCircle } from 'lucide-react';

import Typewriter from 'typewriter-effect';
<<<<<<< HEAD
import backgroundsAPI from '../../services/BackgroundAPI';
import ContactAPI from '../../services/contactsAPI';
import { useTranslation } from 'react-i18next';
=======
import backgroundsAPI from '../../services/backgroundAPI';
>>>>>>> 188e74f1209066fa08c0f2bfcc627d0605395a38

const ExpertSection = () => {
  const {t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const [askanExpert, setAskanExpert] = useState(null);
  const [whatsappNumber, setWhatsappNumber] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Lazy loading via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Fetch images and WhatsApp number
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await backgroundsAPI.getSection({
          sections: ['ourServices', 'askanExpert'],
        });
        const response2 = await ContactAPI.getAllMedia();
        const data = response?.data?.data || [];
        setWhatsappNumber(response2?.data?.whatsappLink || []);

        data.forEach((item) => {
          if (item.section === 'askanExpert') setAskanExpert(item.url);
          if (item.section === 'whatsapp') ;
        });
      } catch (error) {
        console.error('Failed to fetch background or WhatsApp:', error);
      }
    }

    fetchData();
  }, []);

  // Construct WhatsApp URL
  const openWhatsApp = () => {
    console.log(whatsappNumber);
    
    if (!whatsappNumber) return;
    const phone = whatsappNumber.replace(/[^\d]/g, ''); // Sanitize number
    const message = encodeURIComponent(t('Hello, I need agricultural advice.'));
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 bg-gray-50" id="expert" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div
            className={`w-full md:w-1/2 ${currentLang === 'en' ? 'text-left' : 'text-right'} md:pr-16 mb-10 md:mb-0`}
          >
            <h2
              className={`text-green-800 text-3xl leading-relaxed font-thin ${
                currentLang === 'en' ? 'text-left' : 'text-right'
              }`}
              dir={currentLang === 'en' ? 'ltr' : 'rtl'}
              style={{ maxWidth: '850px', margin: '0 auto' }}
            >
              <Typewriter
                options={{
                  strings: [t('Ask an expert for more information')],
                  autoStart: true,
                  loop: false,
                  delay: 100,
                  deleteSpeed: 0,
                  pauseFor: 999999,
                }}
              />
            </h2>

            <p
              className={`text-gray-600 text-lg leading-relaxed font-thin ${
                currentLang === 'en' ? 'text-left' : 'text-right'
              } mb-8`}
              dir={currentLang === 'en' ? 'ltr' : 'rtl'}
              style={{ maxWidth: '850px', margin: '0 auto 9rem' }}
            >
              <Typewriter
                options={{
                  strings: [
                    t(
                      'Do you have questions about growing a specific crop? Or inquiries about best agricultural practices? Our experts are available to answer all your questions and provide expert advice to help you improve your agricultural production.'
                    ),
                  ],
                  autoStart: true,
                  loop: false,
                  delay: 100,
                  deleteSpeed: 0,
                  pauseFor: 999999,
                }}
              />
            </p>

            {whatsappNumber && (
              <button
                onClick={openWhatsApp}
                className="flex items-center space-x-2 space-x-reverse bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>{t('Ask an expert')}</span>
              </button>
            )}
          </div>

          <div className="w-full md:w-1/2">
            {isVisible && askanExpert && (
              <img
                src={`${import.meta.env.VITE_API_URL_FRONT}${askanExpert}`}
                alt="خبير زراعي"
                className="w-full h-auto rounded-lg shadow-xl"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
