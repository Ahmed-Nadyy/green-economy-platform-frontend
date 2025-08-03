import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';
import backgroundsAPI from '../../services/backgroundAPI';

const ExpertSection = () => {
        const { i18n } = useTranslation();
        const currentLang = i18n.language || 'en';
    const [askanExpert, setAskanExpert] = useState(null);
  useEffect           (() => {
    async function fetchAllBackground() {
      try {
        const response3 = await backgroundsAPI.getSection(
          {
            sections: ['ourServices','askanExpert']
          }
        );
        console.log(response3?.data.data);
        response3?.data?.data.map((bac)=>{
          if(bac.section=="askanExpert") setAskanExpert(bac.url);
        })
      } catch (error) {
        console.error("Failed to fetch contact info:", error);
      }
    }

    fetchAllBackground();
  }, []);
    return (
        <section className="py-16 bg-gray-50" id="expert">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className={`w-full md:w-1/2 ${currentLang == "en" ? "text-left" : "text-right"} md:pr-16 mb-10 md:mb-0`}>
                             <h2
                className={`text-green-800 text-3xl leading-relaxed font-thin ${currentLang == "en" ? "text-left" : "text-right"}`}
                 dir={currentLang == "en" ? "ltr" : "rtl"}
                style={{ maxWidth: '850px', margin: '0 auto' }}
              >
<Typewriter
                  options={{
                    strings: [
                        t("Ask an expert for more information")
                    ],
                    autoStart: true,
                    loop: false,        
                    delay: 100,          
                    deleteSpeed: 0,     
                    pauseFor: 999999,   
                  }}
                />
              </h2>
                        <p 
                        className={`text-gray-600 text-lg leading-relaxed font-thin ${currentLang == "en" ? "text-left" : "text-right"} mb-8`}
                 dir={currentLang == "en" ? "ltr" : "rtl"}
                style={{ maxWidth: '850px', margin: '0 auto 9rem' }}
                        >
                            <Typewriter
                  options={{
                    strings: [
                    t("Do you have questions about growing a specific crop? Or inquiries about best agricultural practices? Our experts are available to answer all your questions and provide expert advice to help you improve your agricultural production.")
                    ],
                    autoStart: true,
                    loop: false,        
                    delay: 100,          
                    deleteSpeed: 0,     
                    pauseFor: 999999,   
                  }}
                />
                        </p>
                        <button className="flex items-center space-x-2 space-x-reverse bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full transition-colors">
                            <MessageCircle className="h-5 w-5" />
                            <span>
                               {t("Ask an expert")}
                            </span>
                        </button>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src={`${import.meta.env.VITE_API_URL_FRONT}${askanExpert}`}
                            alt="خبير زراعي"
                            className="w-full h-auto rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertSection;