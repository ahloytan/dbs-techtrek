import api from '../utils/axios.js';
  
const getDashboardDetails = async () => {
  try {
      const { data: { dashboard } } = await api.get('/dashboard');
      return dashboard

  } catch (error) {
      console.log(error);
  }
}

export {getDashboardDetails};