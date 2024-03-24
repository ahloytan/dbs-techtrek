import api from '../utils/axios.js';

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

export {addCustomer, getAllCustomers};