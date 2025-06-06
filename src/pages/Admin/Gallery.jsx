import React from 'react';
import { FaTrash } from 'react-icons/fa';
import banana from '../../assets/banana.png';


const Gallery = () => {
  // Sample image data
  const images = [
    { id: 1, src: banana },
    { id: 2, src: banana },
    { id: 3, src: banana },
    { id: 4, src: banana },
  ];

  // Sample video data
  const videos = [
    { id: 1, src: '/placeholder-video.mp4', thumbnail: '/placeholder-video-thumbnail.jpg' },
    { id: 2, src: '/placeholder-video.mp4', thumbnail: '/placeholder-video-thumbnail.jpg' },
    { id: 3, src: '/placeholder-video.mp4', thumbnail: '/placeholder-video-thumbnail.jpg' },
    { id: 4, src: '/placeholder-video.mp4', thumbnail: '/placeholder-video-thumbnail.jpg' },
  ];

  return (
    <div className="container mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-6 space-y-4 sm:space-y-8">
      {/* Images Gallery Section */}
      <div className="bg-white p-3 sm:p-6 rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">معرض الصور</h2>
          <button className="w-full sm:w-auto px-3 sm:px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center sm:justify-start">
            <span className="ml-2">+</span>
            <span>إضافة صورة جديدة</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
          {images.map((image) => (
            <div key={image.id} className="relative group">
              <div className="bg-green-500 p-2 sm:p-4 rounded-lg overflow-hidden">
                <img 
                  src={image.src} 
                  alt="Gallery Image" 
                  className="w-full h-28 sm:h-32 md:h-40 object-cover rounded-md"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150/2ECC71/FFFFFF?text=صورة';
                  }}
                />
              </div>
              <button 
                className="absolute top-1 sm:top-2 right-1 sm:right-2 bg-red-500 text-white p-1.5 sm:p-2 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Delete image"
              >
                <FaTrash className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Videos Gallery Section */}
      <div className="bg-white p-3 sm:p-6 rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">معرض الفيديوهات</h2>
          <button className="w-full sm:w-auto px-3 sm:px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center sm:justify-start">
            <span className="ml-2">+</span>
            <span>إضافة فيديو جديد</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
          {videos.map((video) => (
            <div key={video.id} className="relative group">
              <div className="bg-green-500 p-2 sm:p-4 rounded-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt="Video Thumbnail" 
                    className="w-full h-28 sm:h-32 md:h-40 object-cover rounded-md"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150/2ECC71/FFFFFF?text=فيديو';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-green-600 bg-opacity-75 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-6 sm:border-t-8 border-b-6 sm:border-b-8 border-l-8 sm:border-l-12 border-transparent border-l-white ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <button 
                className="absolute top-1 sm:top-2 right-1 sm:right-2 bg-red-500 text-white p-1.5 sm:p-2 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Delete video"
              >
                <FaTrash className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;