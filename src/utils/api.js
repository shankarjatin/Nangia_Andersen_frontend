import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nangia-andersen-backend.onrender.com/api',
});

export default api;
