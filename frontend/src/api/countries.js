import api from '../utils/axios.js';

const addCountry = async (name) => {
  try {
    const { data } = await api.post('/countries', {
        name
    });

    return data
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data.message);
  }
}
  
const getAllCountries = async () => {
  try {
      const { data: { countries } } = await api.get('/countries');
      return countries

  } catch (error) {
      console.log(error);
  }
}

export {addCountry, getAllCountries};