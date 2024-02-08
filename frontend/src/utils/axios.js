import axios from 'axios';
import Router from 'next/router';
import { getCookie, destroyCookie } from '@/utils/cookies';
const BASE_URL = process.env.NEXT_PUBLIC_NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_PROD_URL : 'http://localhost:5000';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(function(config) {
    const token = getCookie('jwt');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      Router.push({
        pathname: '/auth/login', 
        query: { expiredJWT: true }
      });
      destroyCookie('jwt');
      return Promise.reject(error);
    }
);

export default api;