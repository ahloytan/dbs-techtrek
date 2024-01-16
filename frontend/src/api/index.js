import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


const login = async (username, password) => {
  try { 
    const {data} = await api.post('/login', {
      username, 
      password
    })
    console.log(data)
    return true;
  } catch (error) {
    throw new Error(error);
  }
}

const getAllCustomers = async () => {
  try {
    const { data: { customers } } = await api.get('/customers');
    return customers
  } catch (error) {
    console.log(error);
    return false
  }
}

export {login, getAllCustomers};
