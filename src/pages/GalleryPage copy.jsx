import React from "react";
import bg1 from "../assets/gallery/bg1.png";
const GalleryPage = () => {
  return (
    <>
      <div className="relative min-h-screen w-full">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: bg1 ? `url(${bg1})` : 'none',
          }}
        >
          {/* Dark overlay to reduce brightness */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Content */}
            <div className="bg-black bg-opacity-30 rounded-lg p-8 sm:p-12 backdrop-blur-sm">
              <h1 className="text-white text-xl sm:text-2xl lg:text-2xl leading-relaxed mb-6 font-thin" dir="rtl">
                مرحبًا بك في معرض  نادي الاقتصاد الأخضر
              </h1>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>


      </div>
      {/* Gallery Section - Crop and Field School Images */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center">
              {/* Left decorative lines */}
              <div className="flex space-x-1 mr-4">
                <div className="w-1 h-12 bg-green-500"></div>
                <div className="w-1 h-12 bg-green-500"></div>
                <div className="w-1 h-12 bg-green-500"></div>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-white bg-green-500 px-8 py-3 rounded" dir="rtl">
                صور عن زراعة المحاصيل والمدارس الحقلية
              </h2>

              {/* Right decorative lines */}
              <div className="flex space-x-1 ml-4">
                <div className="w-1 h-12 bg-green-500"></div>
                <div className="w-1 h-12 bg-green-500"></div>
                <div className="w-1 h-12 bg-green-500"></div>
              </div>
            </div>
          </div>

          {/* Main Featured Image */}
          <div className="mb-8">
            <div className="relative bg-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-96">
              {/* Placeholder for main image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">Featured Image</p>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center group hover:bg-green-50">
              <svg className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center group hover:bg-green-50">
              <svg className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Thumbnails Container */}
            <div className="mx-16 overflow-hidden">
              <div className="flex space-x-4 space-x-reverse">
                {/* Thumbnail 1 */}
                <div className="flex-shrink-0 w-32 h-24 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border-2 border-transparent hover:border-green-500">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                    <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Thumbnail 2 */}
                <div className="flex-shrink-0 w-32 h-24 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border-2 border-transparent hover:border-green-500">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                    <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Thumbnail 3 */}
                <div className="flex-shrink-0 w-32 h-24 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border-2 border-transparent hover:border-green-500">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                    <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Thumbnail 4 */}
                <div className="flex-shrink-0 w-32 h-24 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border-2 border-transparent hover:border-green-500">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                    <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Thumbnail 5 */}
                <div className="flex-shrink-0 w-32 h-24 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border-2 border-transparent hover:border-green-500">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                    <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Thumbnail 6 */}
                <div className="flex-shrink-0 w-32 h-24 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border-2 border-transparent hover:border-green-500">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                    <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Gallery Section - Crop and Field School Videos */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center">
              {/* Left decorative lines */}
              <div className="flex space-x-1 mr-4">
                <div className="w-1 h-12 bg-green-500"></div>
                <div className="w-1 h-12 bg-green-500"></div>
                <div className="w-1 h-12 bg-green-500"></div>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-white bg-green-500 px-8 py-3 rounded" dir="rtl">
                فيديوهات عن زراعة المحاصيل والمدارس الحقلية
              </h2>

              {/* Right decorative lines */}
              <div className="flex space-x-1 ml-4">
                <div className="w-1 h-12 bg-green-500"></div>
                <div className="w-1 h-12 bg-green-500"></div>
                <div className="w-1 h-12 bg-green-500"></div>
              </div>
            </div>
          </div>

          {/* Main Featured Video */}
          <div className="mb-8">
            <div className="relative bg-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-96 cursor-pointer group">
              {/* Video placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="text-center">
                  {/* Video player icon */}
                  <div className="w-20 h-20 mx-auto mb-4 bg-green-500 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300 relative">
                    {/* Film strip decoration */}
                    <div className="absolute -top-1 left-0 right-0 h-2 bg-green-400 opacity-60">
                      <div className="flex justify-between h-full px-1">
                        <div className="w-1 h-full bg-white opacity-40"></div>
                        <div className="w-1 h-full bg-white opacity-40"></div>
                        <div className="w-1 h-full bg-white opacity-40"></div>
                        <div className="w-1 h-full bg-white opacity-40"></div>
                        <div className="w-1 h-full bg-white opacity-40"></div>
                        <div className="w-1 h-full bg-white opacity-40"></div>
                        <div className="w-1 h-full bg-white opacity-40"></div>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 left-0 right-0 h-2 bg-green-400 opacity-60">
                      <div className="flex justify-between h-full px-1">
                        <div className="w-1 h-full bg-white opacity-40"></div>
                        <div className="w-1 h-full bg-white opacity-40"></div>
                        <div className="w-1 h-full bg-white opacity-40"></div>
                        <div className="w-1 h-full bg-white opacity-40"></div>
                        <div className="w-1 h-full bg-white opacity-40"></div>
                        <div className="w-1 h-full bg-white opacity-40"></div>
                        <div className="w-1 h-full bg-white opacity-40"></div>
                      </div>
                    </div>

                    {/* Play button */}
                    <svg className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">Featured Video</p>
                </div>
              </div>

              {/* Play overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Thumbnails Gallery */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center group hover:bg-green-50">
              <svg className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center group hover:bg-green-50">
              <svg className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Video Thumbnails Container */}
            <div className="mx-16 overflow-hidden">
              <div className="flex space-x-4 space-x-reverse">
                {/* Video Thumbnail 1 */}
                <div className="flex-shrink-0 w-32 h-24 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border-2 border-transparent hover:border-green-500 group relative">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                    <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center relative group-hover:bg-green-600 transition-colors duration-300">
                      {/* Mini film strip */}
                      <div className="absolute -top-0.5 left-0 right-0 h-1 bg-green-400 opacity-60">
                        <div className="flex justify-between h-full px-0.5">
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                        </div>
                      </div>
                      <div className="absolute -bottom-0.5 left-0 right-0 h-1 bg-green-400 opacity-60">
                        <div className="flex justify-between h-full px-0.5">
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                        </div>
                      </div>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Video Thumbnail 2 */}
                <div className="flex-shrink-0 w-32 h-24 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border-2 border-transparent hover:border-green-500 group relative">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                    <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center relative group-hover:bg-green-600 transition-colors duration-300">
                      <div className="absolute -top-0.5 left-0 right-0 h-1 bg-green-400 opacity-60">
                        <div className="flex justify-between h-full px-0.5">
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                        </div>
                      </div>
                      <div className="absolute -bottom-0.5 left-0 right-0 h-1 bg-green-400 opacity-60">
                        <div className="flex justify-between h-full px-0.5">
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                        </div>
                      </div>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Video Thumbnail 3 */}
                <div className="flex-shrink-0 w-32 h-24 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border-2 border-transparent hover:border-green-500 group relative">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                    <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center relative group-hover:bg-green-600 transition-colors duration-300">
                      <div className="absolute -top-0.5 left-0 right-0 h-1 bg-green-400 opacity-60">
                        <div className="flex justify-between h-full px-0.5">
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                        </div>
                      </div>
                      <div className="absolute -bottom-0.5 left-0 right-0 h-1 bg-green-400 opacity-60">
                        <div className="flex justify-between h-full px-0.5">
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                        </div>
                      </div>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Video Thumbnail 4 */}
                <div className="flex-shrink-0 w-32 h-24 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border-2 border-transparent hover:border-green-500 group relative">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                    <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center relative group-hover:bg-green-600 transition-colors duration-300">
                      <div className="absolute -top-0.5 left-0 right-0 h-1 bg-green-400 opacity-60">
                        <div className="flex justify-between h-full px-0.5">
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                        </div>
                      </div>
                      <div className="absolute -bottom-0.5 left-0 right-0 h-1 bg-green-400 opacity-60">
                        <div className="flex justify-between h-full px-0.5">
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                        </div>
                      </div>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Video Thumbnail 5 */}
                <div className="flex-shrink-0 w-32 h-24 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border-2 border-transparent hover:border-green-500 group relative">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                    <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center relative group-hover:bg-green-600 transition-colors duration-300">
                      <div className="absolute -top-0.5 left-0 right-0 h-1 bg-green-400 opacity-60">
                        <div className="flex justify-between h-full px-0.5">
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                        </div>
                      </div>
                      <div className="absolute -bottom-0.5 left-0 right-0 h-1 bg-green-400 opacity-60">
                        <div className="flex justify-between h-full px-0.5">
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                        </div>
                      </div>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Video Thumbnail 6 */}
                <div className="flex-shrink-0 w-32 h-24 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border-2 border-transparent hover:border-green-500 group relative">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                    <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center relative group-hover:bg-green-600 transition-colors duration-300">
                      <div className="absolute -top-0.5 left-0 right-0 h-1 bg-green-400 opacity-60">
                        <div className="flex justify-between h-full px-0.5">
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                        </div>
                      </div>
                      <div className="absolute -bottom-0.5 left-0 right-0 h-1 bg-green-400 opacity-60">
                        <div className="flex justify-between h-full px-0.5">
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                          <div className="w-0.5 h-full bg-white opacity-40"></div>
                        </div>
                      </div>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;