import React from 'react';
import ServiceCard from './ui/ServiceCard';
import SectionHeader from './ui/SectionHeader';

const ClimateSection = () => {
    const climateItems = [
        {
            id: 1,
            title: 'مناخ مصر والمحاصيل الزراعية',
            imageSrc: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=600',
            bgColor: 'bg-green-400',
            variant: 'curved',
            description: 'دراسة تفصيلية عن مناخ مصر وتأثيره على المحاصيل الزراعية المختلفة',
            introduction: 'يتميز مناخ مصر بخصائص فريدة تؤثر على الزراعة',
            conceptDefinition: 'العلاقة بين المناخ والزراعة علاقة وثيقة تحدد نجاح المحاصيل',
            topicImportance: 'فهم المناخ يساعد في اختيار المحاصيل المناسبة ومواعيد الزراعة',
            scientificGuidelines: 'إرشادات التعامل مع المناخ:\n1. دراسة الظروف المناخية\n2. اختيار المحاصيل المناسبة\n3. تحديد مواعيد الزراعة\n4. تطبيق أساليب الحماية',
            recommendations: 'يوصى بمتابعة النشرات الجوية واختيار المحاصيل المناسبة للمنطقة'
        },
        {
            id: 2,
            title: 'التغيرات المناخية وتأثيرها',
            secondaryText: 'على قطاع الزراعة في مصر',
            imageSrc: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
            bgColor: 'bg-green-500',
            description: 'تحليل شامل لتأثير التغيرات المناخية على الزراعة المصرية وسبل التكيف',
            introduction: 'التغيرات المناخية تمثل تحدياً كبيراً للقطاع الزراعي',
            conceptDefinition: 'تشمل التغيرات المناخية ارتفاع درجات الحرارة وتغير أنماط الأمطار',
            topicImportance: 'التكيف مع التغيرات المناخية ضروري لاستدامة الزراعة',
            scientificGuidelines: 'استراتيجيات التكيف:\n1. استخدام أصناف مقاومة\n2. تعديل مواعيد الزراعة\n3. تطوير نظم الري\n4. تنويع المحاصيل',
            recommendations: 'يوصى بتبني ممارسات الزراعة المستدامة وتطوير نظم الإنذار المبكر'
        }
    ];

    return (
        <section className="py-16 bg-white" id="climate">
            <div className="container mx-auto px-4">
                <SectionHeader title="مقالات عن التغيرات المناخية وتأثيرها على المحاصيل الزراعية" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {climateItems.map((item, index) => (
                        <ServiceCard
                            key={item.id}
                            cardIndex={index}
                            title={item.title}
                            imageSrc={item.imageSrc}
                            variant={item.variant}
                            secondaryText={item.secondaryText}
                            linkText="اقرأ المزيد"
                            item={item}
                            type="article"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClimateSection;