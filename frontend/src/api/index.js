import axios from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_PROD_URL : 'http://localhost:5000/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(function(config) {
    const token = sessionStorage.getItem('jwtToken');

    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

const login = async (username, password) => {
  try { 
    
    const { data: { jwtToken } } = await api.post('/login', {
      username, 
      password
    })

    window.sessionStorage.setItem('jwtToken', jwtToken);
    window.sessionStorage.setItem('authenticated', 'true');

  } catch (error) {
    throw new Error('Invalid email or password! Please try again');
  }
}

const addCustomer = async (address, avatar, createdAt, email, name, phoneNumber) => {
  try {
    const { data } = await api.post('/customers', {
      address, 
      avatar, 
      createdAt, 
      email, 
      name, 
      phoneNumber
    });

    return data
  } catch (error) {
    console.log(error);
    return error;
  }
}


const getAllCustomers = async () => {
  try {
    const { data: { customers } } = await api.get('/customers');
    return customers

  } catch (error) {
    console.log(error);
  }
}

export {login, addCustomer, getAllCustomers};
