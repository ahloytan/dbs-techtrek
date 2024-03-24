import api from '../utils/axios.js';

const getAllDestinations = async () => {
    try {
      const { data: { destinations } } = await api.get('/destinations');
      return destinations
  
    } catch (error) {
      console.log(error);
    }
  }

export { getAllDestinations };