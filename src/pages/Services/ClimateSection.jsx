import React, { useEffect, useState } from 'react';
import ServiceCard from './ui/ServiceCard';
import SectionHeader from './ui/SectionHeader';
import blogAPI from '../../services/blogAPI';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const ClimateSection = () => {
    const [climateItems, setclimateItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
        const { i18n } = useTranslation();
        const currentLang = i18n.language || 'en';
    useEffect(() => {
        const fetchclimateItems = async () => {
            try {
                const response = await blogAPI.getArticlesBySubType("climate"); // Fetch guidance data
                setclimateItems(response.data); // Assuming response contains an array of items
                setLoading(false);
            } catch (err) {
                setError(err);
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
                <SectionHeader title={t("Articles on climate change and its impact on agricultural crops")} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {climateItems.map((item, index) => (
                        <ServiceCard
                            key={item.id}
                            cardIndex={index}
                            title={currentLang=="en"?item.title:item.arabicTitle}
                            imageSrc={`${import.meta.env.VITE_API_URL_FRONT}${item.imageUrl}`}
                            variant={item.variant}
                            secondaryText={item.secondaryText}
                            linkText={t("view more")}
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