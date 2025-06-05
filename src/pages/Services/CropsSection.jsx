import React from 'react';
import ServiceCard from './ui/ServiceCard';
import SectionHeader from './ui/SectionHeader';

const CropsSection = () => {
    const crops = [
        {
            title: 'محصول الطماطم',
            imageSrc: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600',
            bgColor: 'bg-green-500',
        },
        {
            title: 'محصول الموز',
            imageSrc: 'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=600',
            bgColor: 'bg-green-400',
            variant: 'curved',
        },
        {
            title: 'محصول القصب',
            imageSrc: 'https://images.pexels.com/photos/17138071/pexels-photo-17138071/free-photo-of-agriculture-farm-field-growth.jpeg?auto=compress&cs=tinysrgb&w=600',
            bgColor: 'bg-green-500',
        }
    ];

    return (
        <section className="py-16 bg-gray-50" id="crops">
            <div className="container mx-auto px-4">
                <SectionHeader title="المحاصيل الزراعية" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {crops.map((crop, index) => (
                        <ServiceCard
                            key={index}
                            cardIndex={index}
                            title={crop.title}
                            imageSrc={crop.imageSrc}
                            variant={crop.variant}
                            bgColor={crop.bgColor}
                            linkText="اقرأ المزيد"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CropsSection;    