import React, { useState, useEffect } from "react";
import galleryAPI from "../services/galleryAPI";
import SectionHeader from "./Services/ui/SectionHeader";
import { useTranslation } from "react-i18next";
import Typewriter from 'typewriter-effect';
import backgroundsAPI from "../services/backgroundAPI";

const GalleryPage = () => {
  // State for images
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagesLoading, setImagesLoading] = useState(true);
  const [imagesError, setImagesError] = useState(null);
  const [imageStartIndex, setImageStartIndex] = useState(0);

  // State for videos
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videosLoading, setVideosLoading] = useState(true);
  const [videosError, setVideosError] = useState(null);
  const [videoStartIndex, setVideoStartIndex] = useState(0);

  // Configuration
const isSmallScreen = window.innerWidth < 768;
const THUMBNAILS_PER_VIEW = isSmallScreen ? 3 : 6;


  // API Functions
  const fetchGallery = async () => {
    try {
      setImagesLoading(true);
      setVideosLoading(true);
      setImagesError(null);
      setVideosError(null);

      const { data } = await galleryAPI.getAllGalleryItems();

      const allItems = data || [];

      const imageItems = allItems.filter(item => item.type === "image");
      const videoItems = allItems.filter(item => item.type === "video");

      setImages(imageItems);
      setVideos(videoItems);
      console.log(videoItems);


      if (imageItems.length > 0) {
        setSelectedImage(imageItems[0]);
      }

      if (videoItems.length > 0) {
        setSelectedVideo(videoItems[0]);
      }

    } catch (error) {
      console.error('Error fetching gallery data:', error);
      setImagesError(error.message);
      setVideosError(error.message);
    } finally {
      setImagesLoading(false);
      setVideosLoading(false);
    }
  };


  // Load data on component mount
  useEffect(() => {
    fetchGallery();
  }, []);
    const { t } = useTranslation();

  // Navigation handlers for images
  const handleImagePrevious = () => {
    if (imageStartIndex > 0) {
      setImageStartIndex(imageStartIndex - 1);
    }
  };

  const handleImageNext = () => {
    if (imageStartIndex + THUMBNAILS_PER_VIEW < images.length) {
      setImageStartIndex(imageStartIndex + 1);
    }
  };

  // Navigation handlers for videos
  const handleVideoPrevious = () => {
    if (videoStartIndex > 0) {
      setVideoStartIndex(videoStartIndex - 1);
    }
  };

  const handleVideoNext = () => {
    if (videoStartIndex + THUMBNAILS_PER_VIEW < videos.length) {
      setVideoStartIndex(videoStartIndex + 1);
    }
  };

  // Get visible thumbnails
  const visibleImages = images.slice(imageStartIndex, imageStartIndex + THUMBNAILS_PER_VIEW);
  const visibleVideos = videos.slice(videoStartIndex, videoStartIndex + THUMBNAILS_PER_VIEW);

  // Retry handlers
  const retryGallery = () => {
    fetchGallery();
  };
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'en';
    const [gallery, setGallery] = useState(null);
  useEffect(() => {
    async function fetchAllBackground() {
      try {
        const response3 = await backgroundsAPI.getSection(
          {
            sections: ['gallery']
          }
        );
        console.log(response3?.data.data);
        response3?.data?.data.map((bac)=>{
          if(bac.section=="gallery") setGallery(bac.url);
        })
      } catch (error) {
        console.error("Failed to fetch contact info:", error);
      }
    }

    fetchAllBackground();
  }, []);
  return (
    <>
      <div className="relative min-h-screen w-full">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:gallery ? `url(${import.meta.env.VITE_API_URL_FRONT}${gallery})` : 'none',
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
              <h1 className={`text-white text-[1.3rem] leading-relaxed font-thin ${currentLang == "en" ? "text-left" : "text-right"}`}
                 dir={currentLang == "en" ? "ltr" : "rtl"}
                style={{ maxWidth: '850px', margin: '0 auto' }}>
                                  <Typewriter
                  options={{
                    strings: [
                      t("Welcome to the Green Economy Club Exhibition")
                    ],
                    autoStart: true,
                    loop: false,        
                    delay: 10,          
                    deleteSpeed: 0,     
                    pauseFor: 999999,   
                  }}
                />
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

      {/* Gallery Section - Images */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">          <SectionHeader title={t("Photos of crop cultivation and field schools")} />

          {/* Images Loading State */}
          {imagesLoading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
              <p className="mt-4 text-gray-600">جاري تحميل الصور...</p>
            </div>
          )}

          {/* Images Error State */}
          {imagesError && (
            <div className="text-center py-12">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-red-700 mb-4">خطأ في تحميل الصور: {imagesError}</p>
                <button
                  onClick={retryGallery}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                >
                  إعادة المحاولة
                </button>
              </div>
            </div>
          )}

          {/* Images Content */}
          {!imagesLoading && !imagesError && (
            <>
              {/* Main Featured Image */}
              <div className="mb-8">
                <div className="relative bg-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ height: "30rem" }}>
                  {selectedImage ? (
                    <img
                      src={selectedImage.url}
                      alt={selectedImage.title || 'Gallery Image'}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}

                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300" style={{ display: selectedImage ? 'none' : 'flex' }}>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-sm">لا توجد صور متاحة</p>
                    </div>
                  </div>

                  {/* Image info overlay */}
                  {selectedImage && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                      {/* <h3 className="text-white text-lg font-semibold" dir="rtl">
                        {selectedImage.title || 'صورة من المعرض'}
                      </h3> */}
                      {selectedImage.description && (
                        <p className="text-gray-200 text-sm mt-1" dir="rtl">
                          {selectedImage.description}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {images.length > 0 && (
                <div className="relative">
                  {/* Navigation Arrows */}
                  <button
                    onClick={handleImagePrevious}
                    disabled={imageStartIndex === 0}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center group hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={handleImageNext}
                    disabled={imageStartIndex + THUMBNAILS_PER_VIEW >= images.length}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center group hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Thumbnails Container */}
                  <div className="mx-16 overflow-hidden">
                    <div className="flex space-x-4 space-x-reverse justify-center">
                      {visibleImages.map((image, index) => (
                        <div
                          key={image.id || index}
                          onClick={() => setSelectedImage(image)}
                          className={`flex-shrink-0 w-32 h-24 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-2 ${selectedImage?.id === image.id ? 'border-green-500' : 'border-transparent hover:border-green-500'
                            }`}
                        >
                          <img
                            src={image.thumbnail || image.url}
                            alt={image.title || 'Thumbnail'}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          {/* Fallback for failed thumbnails */}
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300" style={{ display: 'none' }}>
                            <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">          <SectionHeader title={t("Videos on crop cultivation and field schools")}/>

          {/* Videos Loading State */}
          {videosLoading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
              <p className="mt-4 text-gray-600">جاري تحميل الفيديوهات...</p>
            </div>
          )}

          {/* Videos Error State */}
          {videosError && (
            <div className="text-center py-12">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-red-700 mb-4">خطأ في تحميل الفيديوهات: {videosError}</p>
                <button
                  onClick={retryGallery}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                >
                  إعادة المحاولة
                </button>
              </div>
            </div>
          )}

          {/* Videos Content */}
          {!videosLoading && !videosError && (
            <>
              {/* Main Featured Video */}
              <div className="mb-8">
                <div className="relative bg-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300  cursor-pointer group" style={{ height: "30rem" }}>
                  {selectedVideo ? (
                    <video
                      key={selectedVideo.url} // 👈 إجبار الفيديو على إعادة التحميل عند التغيير
                      controls
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    >
                      <source src={selectedVideo.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : null}


                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300" style={{ display: selectedVideo ? 'none' : 'flex' }}>
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-green-500 rounded-lg flex items-center justify-center relative">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-sm">لا توجد فيديوهات متاحة</p>
                    </div>
                  </div>

                  {/* Video info overlay */}
                  {selectedVideo && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                      {/* <h3 className="text-white text-lg font-semibold" dir="rtl">
                        {selectedVideo.title || 'فيديو من المعرض'}
                      </h3> */}
                      {selectedVideo.description && (
                        <p className="text-gray-200 text-sm mt-1" dir="rtl">
                          {selectedVideo.description}
                        </p>
                      )}
                      {selectedVideo.duration && (
                        <span className="inline-block bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded mt-2">
                          {selectedVideo.duration}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Video Thumbnails Gallery */}
              {videos.length > 0 && (
                <div className="relative">
                  {/* Navigation Arrows */}
                  <button
                    onClick={handleVideoPrevious}
                    disabled={videoStartIndex === 0}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center group hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={handleVideoNext}
                    disabled={videoStartIndex + THUMBNAILS_PER_VIEW >= videos.length}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center group hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Video Thumbnails Container */}
                  <div className="mx-16 overflow-hidden">
                    <div className="flex space-x-4 space-x-reverse justify-center">
                      {visibleVideos.map((video, index) => (
                        <div
                          key={video.id || index}
                          onClick={() => setSelectedVideo(video)}
                          className={`flex-shrink-0 w-32 h-24 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-2 group relative ${selectedVideo?.id === video.id ? 'border-green-500' : 'border-transparent hover:border-green-500'
                            }`}
                        >
                          <img
                            src={video.url}
                            alt={video.title || 'Video Thumbnail'}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />

                          {/* Fallback for failed thumbnails */}
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300" style={{ display: 'none' }}>
                            <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center relative">
                              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                              </svg>
                            </div>
                          </div>

                          {/* Play overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                              </svg>
                            </div>
                          </div>

                          {/* Duration overlay */}
                          {video.duration && (
                            <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 rounded">
                              {video.duration}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default GalleryPage;