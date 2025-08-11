import React, { useState, useEffect } from 'react';
import ServiceCard from './ui/ServiceCard';
import SectionHeader from './ui/SectionHeader';
import blogAPI from '../../services/blogAPI';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const GuidanceSection = () => {
    const [guidanceItems, setGuidanceItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'en';

    useEffect(() => {
        const fetchGuidanceItems = async () => {
            try {
                const response = await blogAPI.getArticlesBySubType("awareness");
                setGuidanceItems(response.data || []);
                setLoading(false);
            } catch (err) {
                setError(t("Failed to load guidance articles."));
                setLoading(false);
            }
        };

        fetchGuidanceItems();
    }, []);

    if (loading) {
        return <div className="text-center py-12">{t("Loading articles...")}</div>;
    }

    if (error) {
        return <div className="text-center text-red-600 py-12">{error}</div>;
    }

    // ✅ في حالة عدم وجود أي مقالات
    if (guidanceItems.length === 0) {
        return (
            <section className="py-16 bg-white" id="guidance">
                <div className="container mx-auto px-4 text-center">
                    <SectionHeader title={t("Articles on agricultural awareness and guidance")} />
                    <p className="text-gray-600 text-lg mt-8">
                        {t("No articles available at the moment. Please check back later.")}
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 bg-white" id="guidance">
            <div className="container mx-auto px-4">
                <SectionHeader title={t("Articles on agricultural awareness and guidance")} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {guidanceItems.map((item, index) => (
                        <ServiceCard
                            key={index}
                            cardIndex={index}
                            title={currentLang === "en" ? item.title : item.arabicTitle}
                            imageSrc={`${import.meta.env.VITE_API_URL_FRONT}${item.imageUrl}`}
                            variant={item.variant}
                            bgColor={item.bgColor}
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

export default GuidanceSection;
