import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SectionHeader from './SectionHeader';

const CropDetailsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const crop = location.state?.crop;

    if (!crop) {
        return navigate('/services');
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
            <div className="max-w-5xl mx-auto">
                <SectionHeader title={crop.title} />
                
                {/* Main Content Container */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Hero Image Section */}
                    <div className="relative h-64 sm:h-80 md:h-96 bg-green-50">
                        <img 
                            src={crop.image} 
                            alt={crop.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8 md:p-10 space-y-8">
                        {/* Description */}
                        <div className="bg-green-50 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-green-800 mb-4">وصف المحصول</h3>
                            <p className="text-gray-700 leading-relaxed">{crop.description}</p>
                        </div>

                        {/* General Information */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white rounded-xl border-2 border-green-200 p-6">
                                <h3 className="text-lg font-bold text-green-700 mb-4">معلومات عامة</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center text-gray-700">
                                        <span className="font-semibold ml-2">اسم المحصول:</span>
                                        <span>{crop.name}</span>
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <span className="font-semibold ml-2">نوع المحصول:</span>
                                        <span>{crop.type}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl border-2 border-green-200 p-6">
                                <h3 className="text-lg font-bold text-green-700 mb-4">معلومات الزراعة</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center text-gray-700">
                                        <span className="font-semibold ml-2">مدة النمو:</span>
                                        <span>{crop.growthMonths} شهر</span>
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <span className="font-semibold ml-2">الموسم:</span>
                                        <span>{crop.season}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Back Button */}
                        <div className="flex justify-center mt-8">
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

export default CropDetailsPage;
