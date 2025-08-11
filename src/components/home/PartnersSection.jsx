import React from 'react'
import { useTranslation } from 'react-i18next';
import SectionHeader from '../../pages/Services/ui/SectionHeader';

function PartnersSection({allPartners}) {
    const { t } = useTranslation();
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <SectionHeader title={t("Our Partners")} />

          {/* Partners Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center">
            {allPartners?.map((Partner) => (
              <a
                href={Partner?.link}  // Use href for external links
                target="_blank"
                rel="noopener noreferrer"  // For security, always include this when opening in a new tab
                className="bg-white rounded-lg shadow-md p-4 sm:p-6 w-full max-w-xs h-24 sm:h-28 md:h-32 flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-2 bg-gradient-to-br border border-green-500 p-4 rounded-full flex items-center justify-center ">
                    <img src={`${import.meta.env.VITE_API_URL_FRONT}${Partner?.logo}`} alt={Partner?.name} className="object-contain" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
  )
}

export default PartnersSection