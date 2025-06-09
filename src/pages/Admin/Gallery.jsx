import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import galleryAPI from '../../services/galleryAPI';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    try {
      const response = await galleryAPI.getAllGalleryItems();

      // فصل الصور عن الفيديوهات
      const imageItems = response.data.filter(item => item.type === 'image');
      const videoItems = response.data.filter(item => item.type === 'video');
      console.log(response.data);
      
      setImages(imageItems);
      setVideos(videoItems);
    } catch (error) {
      console.error('Error fetching gallery items:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await galleryAPI.deleteGalleryItem(id);
      setImages(prev => prev.filter(item => item.id !== id));
      setVideos(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type); // backend لازم يدعم هذا الحقل

    try {
      const response = await galleryAPI.createGalleryItem(formData);
      console.log(response);
      
      if (type === 'image') {
        setImages(prev => [...prev, response.data.galleryItem]);
      } else {
        setVideos(prev => [...prev,  response.data.galleryItem]);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* الصور */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
          <h2 className="text-2xl font-semibold text-gray-800">معرض الصور</h2>
          <label className="cursor-pointer w-full sm:w-auto">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleUpload(e, 'image')}
            />
            <div className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 flex items-center justify-center">
              <span className="ml-2">+</span>
              <span>إضافة صورة جديدة</span>
            </div>
          </label>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">جاري التحميل...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div key={image._id} className="relative group">
                <div className="bg-green-500 p-2 rounded-lg overflow-hidden">
                  <img
                    src={image.url}
                    alt="Gallery"
                    className="w-full h-32 object-cover rounded-md"
                  />
                </div>
                <button
                  onClick={() => handleDelete(image.id)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Delete image"
                >
                  <FaTrash className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* الفيديوهات */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
          <h2 className="text-2xl font-semibold text-gray-800">معرض الفيديوهات</h2>
          <label className="cursor-pointer w-full sm:w-auto">
            <input
              type="file"
              accept="video/*"
              className="hidden"
              onChange={(e) => handleUpload(e, 'video')}
            />
            <div className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 flex items-center justify-center">
              <span className="ml-2">+</span>
              <span>إضافة فيديو جديد</span>
            </div>
          </label>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">جاري التحميل...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {videos.map((video) => (
              <div key={video._id} className="relative group">
                <div className="bg-green-500 p-2 rounded-lg overflow-hidden">
                  <video
                    src={video.url}
                    controls
                    className="w-full h-32 object-cover rounded-md"
                  />
                </div>
                <button
                  onClick={() => handleDelete(video.id)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Delete video"
                >
                  <FaTrash className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
