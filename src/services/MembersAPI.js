import api from './axios';

const MembersAPI = {
  getAllMember: () => api.get('/members'),

  addMember: (data) =>
    api.post('/members/add', data, {
       headers: {
      'Content-Type': 'multipart/form-data',
    },
    }),

    deleteMember: (id) =>
    api.delete(`/members/${id}`),

};

export default MembersAPI;