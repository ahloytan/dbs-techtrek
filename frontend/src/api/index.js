import { setCookie, destroyCookie } from '@/utils/cookies';
import { addCountry, getAllCountries } from './countries';
import { addCustomer, getAllCustomers } from './customers';
import { getDashboardDetails } from './dashboard';
import { addDestination, getAllDestinations, deleteDestinations } from './destinations';
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
    destroyCookie('jwt');

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


const getUserItineraries = async (userID) => {
  try {
    const { data: { itineraries } } = await api.get(`/itineraries/${userID}`);
    return itineraries

  } catch (error) {
    console.log(error);
  }
}

export {login, logout, register, getUserItineraries, addCountry, getAllCountries, addCustomer, getAllCustomers, getDashboardDetails, addDestination, getAllDestinations, deleteDestinations};
