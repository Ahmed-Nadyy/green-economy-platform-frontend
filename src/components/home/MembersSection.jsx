import { useTranslation } from "react-i18next";
import SectionHeader from '../../pages/Services/ui/SectionHeader';
import Typewriter from 'typewriter-effect';

function MembersSection({members,currentLang}) {
      const { t } = useTranslation();
    
  return (
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
  )
}

export default MembersSection