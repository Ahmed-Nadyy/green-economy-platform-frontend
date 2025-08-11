import React from 'react'
import { useTranslation } from 'react-i18next';

function VisionSection() {
    const { t } = useTranslation();
    
  return (
   <section className={`bg-green-50 py-12 px-6 md:px-16`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 border-b-4 border-green-600 inline-block pb-2">
            {t('sectionTitle')}
          </h2>

          <ul className="space-y-4 text-lg text-green-900 leading-relaxed list-disc pr-5">
            {t('items', { returnObjects: true }).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <div className="mt-10 bg-white rounded-lg shadow p-6 border border-green-200">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">{t('vision')}</h3>
            <p className="text-green-900 text-md mb-6">{t('visionText')}</p>

            <h3 className="text-2xl font-semibold text-green-700 mb-4">{t('mission')}</h3>
            <p className="text-green-900 text-md">{t('missionText')}</p>
          </div>
        </div>
      </section>
  )
}

export default VisionSection