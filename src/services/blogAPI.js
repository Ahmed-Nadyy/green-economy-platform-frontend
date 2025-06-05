import api from './axios';

const blogAPI = {
  createArticle: (formData) =>
    api.post('/articles', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),

  updateArticle: (articleId, formData) =>
    api.patch(`/articles/${articleId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),

  getArticlesBySubType: (subType) => api.get(`/articles/subtype/${subType}`),

  getArticleById: (articleId) => api.get(`/articles/${articleId}`),

  deleteArticle: (articleId) => api.delete(`/articles/${articleId}`),
};

export default blogAPI;
