import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SectionHeader from './SectionHeader';

const ArticleDetailsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const article = location.state?.article;

    if (!article) {
        return navigate('/services');
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
            <div className="max-w-5xl mx-auto">
                <SectionHeader title={article.title} />

                {/* Main Content Container */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Hero Image Section */}
                    <div className="relative h-64 sm:h-80 md:h-96 bg-green-50">
                        <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8 md:p-10">
                        {/* Description */}
                        <div className="bg-green-50 rounded-xl p-6 mb-8">
                            <h3 className="text-xl font-bold text-green-800 mb-4">نبذة مختصرة</h3>
                            <p className="text-gray-700 leading-relaxed">{article.description}</p>
                        </div>

                        {/* Article Sections */}
                        <div className="space-y-8">
                            {/* Introduction */}
                            <section className="bg-white rounded-xl border-2 border-green-200 p-6">
                                <h3 className="text-lg font-bold text-green-700 mb-4">المقدمة</h3>
                                <p className="text-gray-700 leading-relaxed">{article.introduction}</p>
                            </section>

                            {/* Concept Definition */}
                            <section className="bg-white rounded-xl border-2 border-green-200 p-6">
                                <h3 className="text-lg font-bold text-green-700 mb-4">
                                    تعريف المفهوم أو المشكلة الزراعية
                                </h3>
                                <p className="text-gray-700 leading-relaxed">{article.conceptDefinition}</p>
                            </section>

                            {/* Topic Importance */}
                            <section className="bg-white rounded-xl border-2 border-green-200 p-6">
                                <h3 className="text-lg font-bold text-green-700 mb-4">أهمية الموضوع</h3>
                                <p className="text-gray-700 leading-relaxed">{article.topicImportance}</p>
                            </section>

                            {/* Scientific Guidelines */}
                            <section className="bg-green-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-green-800 mb-4">
                                    الخطوات والنصائح الإرشادية العلمية
                                </h3>
                                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                    {article.scientificGuidelines}
                                </p>
                            </section>

                            {/* Recommendations */}
                            <section className="bg-green-100 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-green-800 mb-4">التوصيات</h3>
                                <p className="text-gray-700 leading-relaxed">{article.recommendations}</p>
                            </section>
                        </div>

                        {/* Back Button */}
                        <div className="flex justify-center mt-12">
                            <button 
                                onClick={() => navigate('/services')}
                                className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors duration-300"
                            >
                                العودة للخدمات
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetailsPage;
