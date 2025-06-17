import React from 'react';
import {  useNavigate, } from 'react-router-dom';

const ServiceCard = ({
    title,
    imageSrc,
    linkText = 'اقرأ المزيد',
    variant = 'rounded',
    secondaryText,
    cardIndex,
    item,
    type
}) => {
    const navigate = useNavigate();
    const isEven = cardIndex % 2 !== 0;
    const getCardStyle = () => {
        if (variant === 'curved') {
            return 'rounded-tl-3xl rounded-br-3xl';
        }
        return 'rounded-2xl';
    };

    const handleClick = () => {
        if (type === 'crop') {
            navigate(`/services/crop/${item.id}`, { state: { crop: item } });
        } else if (type === 'article') {
            navigate(`/services/article/${item.id}`, { state: { article: item } });
        }
    };

    return (
        <div
            className={`
                ${isEven ? 'bg-white border-2 border-green-400' : 'bg-green-400'} 
                ${getCardStyle()} 
                px-6 py-16 
                flex flex-col items-center text-center h-full 
                transition-transform duration-300 hover:scale-95 
                rounded-tl-[100px] rounded-br-[100px]
            `}
        >
            <div className={`${isEven ? 'border-green-400' : 'border-white'} w-32 h-32 rounded-full overflow-hidden border-4  mb-6`}>
                <img
                    src={imageSrc}
                    alt={title}
                    className={`w-full h-full object-cover`}
                />
            </div>
            <h3 className={`${isEven ? 'text-green-600' : 'text-white'} text-xl font-bold mb-2`}>
                {title}
            </h3>
            {secondaryText && (
                <p className={`${isEven ? 'text-green-600' : 'text-white'} text-lg mb-4`}>
                    {secondaryText}
                </p>
            )}
            <button 
                onClick={handleClick}
                className={`${isEven ? 'bg-green-600 text-white hover:bg-green-500' : 'bg-white'} mt-auto text-green-600 px-8 py-2 rounded-full font-medium hover:bg-green-50 transition-colors`}
            >
                {linkText}
            </button>
        </div>
    );
};

export default ServiceCard;
