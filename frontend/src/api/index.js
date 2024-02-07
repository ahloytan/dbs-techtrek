import { setCookie } from '@/utils/cookies';
import api from '../utils/axios.js';

const login = async (username, password) => {
  try { 
    
    const { data: { jwtToken } } = await api.post('/login', {
      username, 
      password
    })

    window.sessionStorage.setItem('authenticated', 'true');
    setCookie('jwtToken', jwtToken);
    
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
