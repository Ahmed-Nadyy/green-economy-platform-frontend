import api from './axios';

const PartnersAPI = {
  getAllPartners: () => api.get('/partners'),

  addPartner: (formData) =>
    api.post('/partners', formData, {
     headers: {
      'Content-Type': 'multipart/form-data',
    },
    }),

  deletePartner: (id) =>
    api.delete(`/partners/${id}`),

};

export default PartnersAPI;