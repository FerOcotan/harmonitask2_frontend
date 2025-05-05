import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('AUTH_TOKEN'); // Obtén el token desde localStorage
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`; // Agrega el token al encabezado
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default api;
