import React from 'react';
import ServiceCard from './ui/ServiceCard';
import SectionHeader from './ui/SectionHeader';

const CropsSection = () => {
    const crops = [
        {
            id: 1,
            title: 'محصول الطماطم',
            imageSrc: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600',
            bgColor: 'bg-green-500',
            name: 'الطماطم',
            type: 'خضروات',
            growthMonths: '4',
            season: 'صيفي',
            description: 'محصول الطماطم من أهم محاصيل الخضر في مصر، يزرع في جميع المواسم ويتميز بقيمته الغذائية العالية.'
        },
        {
            id: 2,
            title: 'محصول الموز',
            imageSrc: 'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=600',
            bgColor: 'bg-green-400',
            variant: 'curved',
            name: 'الموز',
            type: 'فاكهة',
            growthMonths: '12',
            season: 'على مدار العام',
            description: 'الموز من الفواكه الاستوائية المهمة التي تزرع في مصر، يتميز بقيمته الغذائية العالية وإنتاجيته المرتفعة.'
        },
        {
            id: 3,
            title: 'محصول القصب',
            imageSrc: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=600',
            bgColor: 'bg-green-400',
            name: 'قصب السكر',
            type: 'محاصيل سكرية',
            growthMonths: '12',
            season: 'شتوي',
            description: 'قصب السكر من المحاصيل الاستراتيجية في مصر، يستخدم في صناعة السكر ويزرع في صعيد مصر.'
        }
    ];

    return (
        <section className="py-16 bg-white" id="crops">
            <div className="container mx-auto px-4">
                <SectionHeader title="تعرف على المحاصيل الزراعية" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {crops.map((crop, index) => (
                        <ServiceCard
                            key={crop.id}
                            cardIndex={index}
                            title={crop.title}
                            imageSrc={crop.imageSrc}
                            variant={crop.variant}
                            bgColor={crop.bgColor}
                            linkText="اقرأ المزيد"
                            item={crop}
                            type="crop"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CropsSection;