import React, { useState, useEffect } from 'react';
import ServiceCard from './ui/ServiceCard';
import SectionHeader from './ui/SectionHeader';
import cropAPI from '../../services/cropAPI';

const CropsSection = () => {
    const [crops, setCrops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCrops = async () => {
            try {
                const response = await cropAPI.getAllCrops();
                console.log(response);
                
                setCrops(response.data); // Assuming response contains an array of crops
                setLoading(false);
            } catch (err) {
                setError('Failed to load crops');
                setLoading(false);
            }
        };

        fetchCrops();
    }, []);

    if (loading) {
        return <div>جاري تحميل المحاصيل...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <section className="py-16 bg-gray-50" id="crops">
            <div className="container mx-auto px-4">
                <SectionHeader title="المحاصيل الزراعية" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {crops.map((crop, index) => (
                        <ServiceCard
                            key={crop.id || index} // Assuming crop object has an 'id' field
                            cardIndex={index}
                            title={crop.arabicTitle}
                            imageSrc={`${import.meta.env.VITE_API_URL_FRONT}${crop.imageUrl}`}
                            bgColor="bg-green-500" // Or dynamic bgColor based on crop
                            linkText="اقرأ المزيد"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CropsSection;
