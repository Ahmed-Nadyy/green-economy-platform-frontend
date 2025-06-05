import api from './axios';

const cropAPI = {
  createCrop: (formData) =>
    api.post('/crops', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),

  updateCrop: (cropId, formData) =>
    api.patch(`/crops/${cropId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),

  getAllCrops: () => api.get('/crops'),

  getCropById: (cropId) => api.get(`/crops/${cropId}`),

  deleteCrop: (cropId) => api.delete(`/crops/${cropId}`),
};

export default cropAPI;
