import React from 'react';
import { MessageCircle } from 'lucide-react';
import bg from '../../assets/services/bg2.png';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const ExpertSection = () => {
        const { i18n } = useTranslation();
        const currentLang = i18n.language || 'en';
    return (
        <section className="py-16 bg-gray-50" id="expert">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className={`w-full md:w-1/2 ${currentLang == "en" ? "text-left" : "text-right"} md:pr-16 mb-10 md:mb-0`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                            {t("Ask an expert for more information")}
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            {t("Do you have questions about growing a specific crop? Or inquiries about best agricultural practices? Our experts are available to answer all your questions and provide expert advice to help you improve your agricultural production.")}
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
                            src={bg}
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