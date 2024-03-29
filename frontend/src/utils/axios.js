import axios from 'axios';
import Router from 'next/router';
import { getCookie, destroyCookie } from '@/utils/cookies';

const BASE_URL = process.env.NEXT_PUBLIC_URL;

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
      if (error.response && error.response.status === 440) {
        destroyCookie('jwt');
        Router.push({
          pathname: '/auth/login', 
          query: { isJWTExpired: true }
        });
      }
      return Promise.reject(error);
    }
);

export default api;