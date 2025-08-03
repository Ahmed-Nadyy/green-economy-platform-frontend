import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Typewriter from 'typewriter-effect';
import ContactAPI from "../services/contactsAPI";
import backgroundsAPI from "../services/backgroundAPI";

const Contact = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'en';
      const [contactInfo, setContactInfo] = useState(null);  

  useEffect(() => {
    async function fetchContactInfo() {
      try {
        const response = await ContactAPI.getAllMedia(); 
        setContactInfo(response.data); 
      } catch (error) {
        console.error("Failed to fetch contact info:", error);
      }
    }

    fetchContactInfo();
  }, []);
  const handleSocialClick = (platform) => {
    console.log(`Clicked on ${platform}`);
    switch (platform) {
      case 'youtube':
        window.open(contactInfo.youtubeLink, '_blank');
        break;
      case 'tiktok':
        window.open(contactInfo.tiktokLink, '_blank');
        break;
      case 'facebook':
        window.open(contactInfo.facebookLink, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/+2${contactInfo.whatsappLink}`, '_blank');
        break;
      default:
        break;
    }
  };
  const [contactUs, setContactUs] = useState(null);
    useEffect(() => {
      async function fetchAllBackground() {
        try {
          const response3 = await backgroundsAPI.getSection(
            {
              sections: ['contactUs']
            }
          );
          console.log(response3?.data.data);
          response3?.data?.data.map((bac)=>{
            if(bac.section=="contactUs") setContactUs(bac.url);
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
            backgroundImage:contactUs ? `url(${import.meta.env.VITE_API_URL_FRONT}${contactUs})` : 'none',
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
                      t("Contact us anytime, we are always here to help you.")
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

      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Social Media Icons */}
          <div className="flex justify-center items-center ">
            {/* YouTube */}
            <button
              onClick={() => handleSocialClick('youtube')}
              className="group relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl mx-4"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-300 rounded-full opacity-70 group-hover:animate-ping"></div>
            </button>

            {/* TikTok */}
            <button
              onClick={() => handleSocialClick('tiktok')}
              className="group relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl mx-4"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-300 rounded-full opacity-70 group-hover:animate-ping"></div>
            </button>

            {/* Facebook */}
            <button
              onClick={() => handleSocialClick('facebook')}
              className="group relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl mx-4"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-300 rounded-full opacity-70 group-hover:animate-ping"></div>
            </button>

            {/* WhatsApp */}
            <button
              onClick={() => handleSocialClick('whatsapp')}
              className="group relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl mx-4"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
              </svg>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-300 rounded-full opacity-70 group-hover:animate-ping"></div>
            </button>
          </div>

          {/* Bottom decorative line */}
          <div className="mt-16 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;