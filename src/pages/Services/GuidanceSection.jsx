import React, { useState, useEffect } from 'react';
import ServiceCard from './ui/ServiceCard';
import SectionHeader from './ui/SectionHeader';
import blogAPI from '../../services/blogAPI';

const GuidanceSection = () => {
    const [guidanceItems, setGuidanceItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGuidanceItems = async () => {
            try {
                const response = await blogAPI.getArticlesBySubType("awareness"); // Fetch guidance data
                setGuidanceItems(response.data); // Assuming response contains an array of items
                setLoading(false);
            } catch (err) {
                setError('فشل تحميل التوجيهات');
                setLoading(false);
            }
        };

        fetchGuidanceItems();
    }, []);

    if (loading) {
        return <div>جاري تحميل المقالات...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <section className="py-16 bg-white" id="guidance">
            <div className="container mx-auto px-4">
                <SectionHeader title="مقالات عن التوعية والإرشاد الزراعي" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {guidanceItems.map((item, index) => (
                        <ServiceCard
                            key={index}
                            cardIndex={index}
                            title={item.arabicTitle}
                             imageSrc={`${import.meta.env.VITE_API_URL_FRONT}${item.imageUrl}`}
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
