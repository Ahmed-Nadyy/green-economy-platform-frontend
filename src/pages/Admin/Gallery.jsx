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
    <div className="container mx-auto p-6 space-y-8">
      {/* Images Gallery Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">معرض الصور</h2>
          <button className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center">
            <span className="mr-2">+</span>
            <span>إضافة صورة جديدة</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image) => (
            <div key={image.id} className="relative group">
              <div className="bg-green-500 p-4 rounded-lg overflow-hidden">
                <img 
                  src={image.src} 
                  alt="Gallery Image" 
                  className="w-full h-40 object-cover rounded-md"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150/2ECC71/FFFFFF?text=صورة';
                  }}
                />
              </div>
              <button 
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Delete image"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Videos Gallery Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">معرض الفيديوهات</h2>
          <button className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center">
            <span className="mr-2">+</span>
            <span>إضافة فيديو جديد</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="relative group">
              <div className="bg-green-500 p-4 rounded-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt="Video Thumbnail" 
                    className="w-full h-40 object-cover rounded-md"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150/2ECC71/FFFFFF?text=فيديو';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-green-600 bg-opacity-75 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <button 
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Delete video"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;