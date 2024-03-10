import { setCookie } from '@/utils/cookies';
import api from '../utils/axios.js';

const login = async (username, password) => {
  try { 
    
    const { data: { jwt } } = await api.post('/login', {
      username, 
      password
    })

    window.sessionStorage.setItem('authenticated', 'true');
    setCookie('jwt', jwt);
    
  } catch (error) {
    throw new Error('Invalid email or password! Please try again');
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
    
    data['severity'] = 'success';

    return data
  } catch (error) {
    console.log(error);
    return error.response.data.error;
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

export {login, addCustomer, getAllCustomers, getUserItineraries};
