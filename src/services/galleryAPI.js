import api from './axios';

const galleryAPI = {
  createGalleryItem: (formData) =>
    api.post('/gallery', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),

  getAllGalleryItems: () => api.get('/gallery'),

  deleteGalleryItem: (itemId) => api.delete(`/gallery/${itemId}`),
};

export default galleryAPI;
