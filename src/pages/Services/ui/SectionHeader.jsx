import React from 'react';

const SectionHeader = ({ title, rtl = true }) => {
    return (
        <div className={`w-full flex justify-center items-center my-12 ${rtl ? 'direction-rtl' : ''}`}>
            {/* Section Title */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <div className="flex items-center justify-center">
                    {/* Left decorative lines - Hidden on very small screens */}
                    <div className="hidden sm:flex space-x-reverse space-x-1 mr-2 sm:mr-4">
                        <div className="w-0.5 sm:w-1 h-8 sm:h-10 md:h-12 bg-green-500"></div>
                        <div className="w-0.5 sm:w-1 h-8 sm:h-10 md:h-12 bg-green-500"></div>
                        <div className="w-0.5 sm:w-1 h-8 sm:h-10 md:h-12 bg-green-500"></div>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white bg-green-500 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded" dir="rtl">
                        {title}
                    </h2>

                    {/* Right decorative lines - Hidden on very small screens */}
                    <div className="hidden sm:flex space-x-reverse space-x-1 ml-2 sm:ml-4">
                        <div className="w-0.5 sm:w-1 h-8 sm:h-10 md:h-12 bg-green-500"></div>
                        <div className="w-0.5 sm:w-1 h-8 sm:h-10 md:h-12 bg-green-500"></div>
                        <div className="w-0.5 sm:w-1 h-8 sm:h-10 md:h-12 bg-green-500"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionHeader;