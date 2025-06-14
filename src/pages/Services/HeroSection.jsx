import React from 'react';
import bg1 from "../../assets/services/bg1.png";
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const { t } = useTranslation();
    
    return (
        <div className="relative overflow-hidden bg-green-900 text-white">
            <div className="relative min-h-screen w-full">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: bg1 ? `url(${bg1})` : 'none',
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
                            <h1 className="text-white text-xl sm:text-2xl lg:text-2xl leading-relaxed mb-6 font-thin">
                            {t("The Green Economy Club is a project of the Egyptian Family Development Foundation, which works to spread awareness about the agricultural sector and is a center for creative innovation in the field of agriculture. Through the activities of this project, the Foundation launched its electronic platform (the Green Economy Club Platform)")}
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