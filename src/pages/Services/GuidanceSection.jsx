import React from 'react';
import ServiceCard from './ui/ServiceCard';
import SectionHeader from './ui/SectionHeader';

const GuidanceSection = () => {
    const guidanceItems = [
        {
            id: 1,
            title: 'الميكنة الزراعية',
            imageSrc: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=600',
            bgColor: 'bg-green-400',
            variant: 'curved',
            description: 'تعرف على أحدث التقنيات في الميكنة الزراعية وكيفية استخدامها لتحسين الإنتاج الزراعي',
            introduction: 'الميكنة الزراعية هي استخدام الآلات والمعدات في العمليات الزراعية المختلفة',
            conceptDefinition: 'تشمل الميكنة الزراعية استخدام الآلات في الحرث والزراعة والري والحصاد',
            topicImportance: 'تساهم الميكنة الزراعية في زيادة الإنتاجية وتقليل التكاليف وتوفير الوقت والجهد',
            scientificGuidelines: 'خطوات استخدام الميكنة الزراعية:\n1. تحديد نوع المعدات المناسبة\n2. تدريب العمالة\n3. الصيانة الدورية\n4. تطبيق معايير السلامة',
            recommendations: 'يوصى باختيار المعدات المناسبة لحجم المزرعة والمحاصيل المزروعة، والاهتمام بالصيانة الدورية'
        },
        {
            id: 2,
            title: 'استخدام المبيدات الزراعية',
            imageSrc: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=600',
            bgColor: 'bg-green-500',
            description: 'دليلك الشامل لاستخدام المبيدات الزراعية بشكل آمن وفعال',
            introduction: 'المبيدات الزراعية هي مواد كيميائية تستخدم لمكافحة الآفات والأمراض النباتية',
            conceptDefinition: 'يجب فهم أنواع المبيدات وكيفية استخدامها بشكل آمن',
            topicImportance: 'الاستخدام الآمن للمبيدات يحمي المحاصيل والبيئة وصحة الإنسان',
            scientificGuidelines: 'إرشادات استخدام المبيدات:\n1. قراءة التعليمات بعناية\n2. استخدام معدات الوقاية\n3. الالتزام بالجرعات المحددة\n4. مراعاة فترات الأمان',
            recommendations: 'يوصى باستخدام المبيدات الحيوية كلما أمكن، والالتزام بفترات الأمان قبل الحصاد'
        },
        {
            id: 3,
            title: 'طرق توفير المياه والأسمدة',
            imageSrc: 'https://images.pexels.com/photos/1483880/pexels-photo-1483880.jpeg?auto=compress&cs=tinysrgb&w=600',
            bgColor: 'bg-green-400',
            variant: 'curved',
            description: 'تعرف على أفضل الممارسات لترشيد استهلاك المياه واستخدام الأسمدة',
            introduction: 'ترشيد استهلاك المياه والأسمدة من أهم عوامل نجاح الزراعة المستدامة',
            conceptDefinition: 'يشمل ذلك استخدام تقنيات الري الحديثة وإدارة التسميد بكفاءة',
            topicImportance: 'يساهم الترشيد في خفض التكاليف وحماية البيئة وتحسين جودة المحاصيل',
            scientificGuidelines: 'إرشادات الترشيد:\n1. استخدام الري بالتنقيط\n2. جدولة الري\n3. تحليل التربة\n4. استخدام الأسمدة العضوية',
            recommendations: 'يوصى باستخدام أنظمة الري الحديثة وتطبيق برامج التسميد المتوازن'
        },
        {
            id: 4,
            title: 'مكافحة الآفات الزراعية',
            imageSrc: 'https://images.pexels.com/photos/3934115/pexels-photo-3934115.jpeg?auto=compress&cs=tinysrgb&w=600',
            bgColor: 'bg-green-500',
            description: 'تعرف على طرق مكافحة الآفات الزراعية بطريقة فعالة وآمنة',
            introduction: 'الآفات الزراعية من أهم التحديات التي تواجه المزارعين',
            conceptDefinition: 'تشمل المكافحة المتكاملة استخدام عدة طرق للسيطرة على الآفات',
            topicImportance: 'المكافحة الفعالة تحمي المحاصيل وتضمن جودة المنتج',
            scientificGuidelines: 'خطوات المكافحة:\n1. المراقبة المستمرة\n2. التشخيص الدقيق\n3. اختيار طريقة المكافحة\n4. التقييم والمتابعة',
            recommendations: 'يوصى باتباع برنامج المكافحة المتكاملة واستخدام الطرق الطبيعية كلما أمكن'
        }
    ];

    return (
        <section className="py-16 bg-white" id="guidance">
            <div className="container mx-auto px-4">
                <SectionHeader title="مقالات عن التوعية والإرشاد الزراعي" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {guidanceItems.map((item, index) => (
                        <ServiceCard
                            cardIndex={index}
                            key={item.id}
                            title={item.title}
                            imageSrc={item.imageSrc}
                            variant={item.variant}
                            bgColor={item.bgColor}
                            secondaryText={item.secondaryText}
                            linkText="المزيد"
                            item={item}
                            type="article"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GuidanceSection;