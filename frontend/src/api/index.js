import { setCookie } from '@/utils/cookies';
import api from '../utils/axios.js';

const login = async (username, password) => {
  try { 
    
    const { data: { jwt } } = await api.post('/account/login', {
      username, 
      password
    })

    window.sessionStorage.setItem('authenticated', 'true');
    setCookie('jwt', jwt);

  } catch (error) {
    throw new Error('Invalid email or password! Please try again');
  }
}

const logout = async () => {
  try { 
    await api.post('/account/logout');
    
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data.message);
  }
}

const register = async (email, password, fullName) => {
  try { 
    await api.post('/account/register', {
      email, 
      password,
      fullName
    });
    
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data.message);
  }
}

const addCustomer = async (address, avatar, email, name, phoneNumber) => {
  try {
    const { data } = await api.post('/customers', {
      address, 
      avatar,
      email, 
      name, 
      phoneNumber
    });

    return data
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data.message);
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

const getUserItineraries = async (userID) => {
  try {
    const { data: { itineraries } } = await api.get(`/itineraries/${userID}`);
    return itineraries

  } catch (error) {
    console.log(error);
  }
}

export {login, logout, register, addCustomer, getAllCustomers, getUserItineraries};
