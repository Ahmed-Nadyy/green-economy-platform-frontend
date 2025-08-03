import api from './axios';

const backgroundsAPI = {
  getAllBackgrounds: () => api.get('/backgrounds'),

  addBackground: (data) =>
    api.post('/backgrounds/add', data, {
      headers: {
      'Content-Type': 'multipart/form-data',
    },
    }),

  selectBackground: (data) =>
    api.post('/backgrounds/select', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    }),
      getSection: (sections) =>
    api.post('/backgrounds/get-backgrounds-by-sections', sections, {
      headers: {
        'Content-Type': 'application/json',
      },
    }),
};

export default backgroundsAPI;
