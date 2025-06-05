import React from 'react';

const SectionHeader = ({ title, rtl = true }) => {
    return (
        <div className={`w-full flex justify-center items-center my-12 ${rtl ? 'direction-rtl' : ''}`}>
            {/* Section Title */}
            <div className="inline-flex items-center">
                {/* Left decorative lines */}
                <div className="flex space-x-1 mr-4">
                    <div className="w-1 h-12 bg-green-500"></div>
                    <div className="w-1 h-12 bg-green-500"></div>
                    <div className="w-1 h-12 bg-green-500"></div>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-white bg-green-500 px-8 py-3 rounded" dir="rtl">
                    {title}
                </h2>

                {/* Right decorative lines */}
                <div className="flex space-x-1 ml-4">
                    <div className="w-1 h-12 bg-green-500"></div>
                    <div className="w-1 h-12 bg-green-500"></div>
                    <div className="w-1 h-12 bg-green-500"></div>
                </div>
            </div>
        </div>
    );
};

export default SectionHeader;