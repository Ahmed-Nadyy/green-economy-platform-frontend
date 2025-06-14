import React, { useEffect, useState } from 'react';
import ServiceCard from './ui/ServiceCard';
import SectionHeader from './ui/SectionHeader';
import blogAPI from '../../services/blogAPI';

const ClimateSection = () => {
    const [climateItems, setclimateItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchclimateItems = async () => {
            try {
                const response = await blogAPI.getArticlesBySubType("climate"); // Fetch guidance data
                setclimateItems(response.data); // Assuming response contains an array of items
                setLoading(false);
            } catch (err) {
                setError('فشل تحميل التوجيهات');
                setLoading(false);
            }
        };

        fetchclimateItems();
    }, []);

    if (loading) {
        return <div>جاري تحميل المقالات...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <section className="py-16 bg-white" id="climate">
            <div className="container mx-auto px-4">
                <SectionHeader title="مقالات عن التغيرات المناخية وتأثيرها على المحاصيل الزراعية" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {climateItems.map((item, index) => (
                        <ServiceCard
                            key={index}
                            cardIndex={index}
                            title={item.arabicTitle}
                            imageSrc={`${import.meta.env.VITE_API_URL_FRONT}${item.imageUrl}`}
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