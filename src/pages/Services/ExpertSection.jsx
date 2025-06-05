import React from 'react';
import { MessageCircle } from 'lucide-react';
import bg from '../../assets/services/bg2.png';

const ExpertSection = () => {
    return (
        <section className="py-16 bg-gray-50" id="expert">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 text-right md:pr-16 mb-10 md:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">اسأل خبير لمزيد من المعلومات</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            هل لديك أسئلة حول زراعة محصول معين؟ أو استفسارات عن أفضل الممارسات الزراعية؟
                            خبراؤنا متاحون للإجابة على جميع استفساراتك وتقديم النصائح المتخصصة لمساعدتك في تحسين إنتاجك الزراعي.
                        </p>
                        <button className="flex items-center space-x-2 space-x-reverse bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full transition-colors">
                            <MessageCircle className="h-5 w-5" />
                            <span>اسأل خبير</span>
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