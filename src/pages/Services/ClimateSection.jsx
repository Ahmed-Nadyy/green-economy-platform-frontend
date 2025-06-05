import React from 'react';
import ServiceCard from './ui/ServiceCard';
import SectionHeader from './ui/SectionHeader';

const ClimateSection = () => {
    const climateItems = [
        {
            title: 'مناخ مصر والمحاصيل الزراعية',
            imageSrc: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=600',
            bgColor: 'bg-green-400',
            variant: 'curved',
        },
        {
            title: 'التغيرات المناخية وتأثيرها',
            secondaryText: 'على قطاع الزراعة في مصر',
            imageSrc: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
            bgColor: 'bg-green-500',
        }
    ];

    return (
        <section className="py-16 bg-white" id="climate">
            <div className="container mx-auto px-4">
                <SectionHeader title="مقالات عن التغيرات المناخية وتأثيرها على المحاصيل الزراعية" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {climateItems.map((item, index) => (
                        <ServiceCard
                            key={index}
                            cardIndex={index}
                            title={item.title}
                            imageSrc={item.imageSrc}
                            variant={item.variant}
                            secondaryText={item.secondaryText}
                            linkText="اقرأ المزيد"
                        />

                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClimateSection;