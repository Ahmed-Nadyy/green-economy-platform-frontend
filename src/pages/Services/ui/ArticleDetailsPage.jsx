import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const ArticleDetailsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const article = location.state?.article;
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'en';
    console.log(article);
    

    if (!article) {
        return navigate('/services');
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
            <div className="max-w-5xl mx-auto">
                <SectionHeader title={currentLang=="en"?article.title:article.arabicTitle} />

                {/* Main Content Container */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Hero Image Section */}
                    <div className="relative h-64 sm:h-80 md:h-96 bg-green-50">
                        <img 
                            src={`${import.meta.env.VITE_API_URL_FRONT}${article.imageUrl}`}
                            alt={article.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8 md:p-10">
                        {/* Description */}
                        <div className="bg-green-50 rounded-xl p-6 mb-8">
                            <h3 className="text-xl font-bold text-green-800 mb-4">{t("Brief summary")}</h3>
                            <p className="text-gray-700 leading-relaxed">{currentLang=="en"?article.description:article.arabicDescription}</p>
                        </div>

                        {/* Article Sections */}
                        <div className="space-y-8">
                            {/* Introduction */}
                            <section className="bg-white rounded-xl border-2 border-green-200 p-6">
                                <h3 className="text-lg font-bold text-green-700 mb-4">{t("Introduction")}</h3>
                                <p className="text-gray-700 leading-relaxed">{currentLang=="en"?article.intro:article.arabicIntro}</p>
                            </section>

                            {/* Concept Definition */}
                            <section className="bg-white rounded-xl border-2 border-green-200 p-6">
                                <h3 className="text-lg font-bold text-green-700 mb-4">
                                    {t("Definition of the agricultural concept or problem")}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">{currentLang=="en"?article.issueDefinition:article.arabicIssueDefinition}</p>
                            </section>

                            {/* Topic Importance */}
                            <section className="bg-white rounded-xl border-2 border-green-200 p-6">
                                <h3 className="text-lg font-bold text-green-700 mb-4">{t("Importance of the topic")}</h3>
                                <p className="text-gray-700 leading-relaxed">{currentLang=="en"?article.importance:article.arabicImportance}</p>
                            </section>

                            {/* Scientific Guidelines */}
                            <section className="bg-green-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-green-800 mb-4">
                                {t("Scientific guidelines and advice")}                                    
                                </h3>
                                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                    {currentLang=="en"?article.practicalSteps:article.arabicPracticalSteps}
                                </p>
                            </section>

                            {/* Recommendations */}
                            <section className="bg-green-100 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-green-800 mb-4">{t("Recommendations")}</h3>
                                <p className="text-gray-700 leading-relaxed">{currentLang=="en"?article.recommendations:article.arabicRecommendations}</p>
                            </section>
                        </div>

                        {/* Back Button */}
                        <div className="flex justify-center mt-12">
                            <button 
                                onClick={() => navigate('/services')}
                                className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors duration-300"
                            >
                               {t("Back to Services")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetailsPage;
