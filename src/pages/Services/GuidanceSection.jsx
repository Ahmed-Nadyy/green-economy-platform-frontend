import React from 'react';
import ServiceCard from './ui/ServiceCard';
import SectionHeader from './ui/SectionHeader';

const GuidanceSection = () => {
    const guidanceItems = [
        {
            title: 'الميكنة الزراعية',
            imageSrc: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=600',
            bgColor: 'bg-green-400',
            variant: 'curved',
        },
        {
            title: 'استخدام المبيدات الزراعية',
            imageSrc: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=600',
            bgColor: 'bg-green-500',
        },
        {
            title: 'طرق توفير المياه والأسمدة',
            imageSrc: 'https://images.pexels.com/photos/2749165/pexels-photo-2749165.jpeg?auto=compress&cs=tinysrgb&w=600',
            bgColor: 'bg-green-400',
            variant: 'curved',
        },
        {
            title: 'المواسم الزراعية',
            imageSrc: 'https://images.pexels.com/photos/8989499/pexels-photo-8989499.jpeg?auto=compress&cs=tinysrgb&w=600',
            bgColor: 'bg-green-500',
            secondaryText: 'للمحاصيل الخضر والفاكهة',
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
                            key={index}
                            title={item.title}
                            imageSrc={item.imageSrc}
                            variant={item.variant}
                            bgColor={item.bgColor}
                            secondaryText={item.secondaryText}
                            linkText="المزيد"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GuidanceSection;