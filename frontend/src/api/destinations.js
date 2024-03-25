import api from '../utils/axios.js';

const addDestination = async (countryId, cost, name, notes, imageName) => {
  try {
    const { data } = await api.post('/destinations', {
      country_id: countryId, 
      cost, 
      name, 
      notes, 
      image_name: imageName
    });

    return data
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data.message);
  }
}

const getAllDestinations = async () => {
    try {
      const { data: { destinations } } = await api.get('/destinations');
      return destinations
  
    } catch (error) {
      console.log(error);
    }
}

const deleteDestinations = async (ids) => {
  try {
    const { data } = await api.delete('/destinations', {
      data: ids
    });

    return data
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data.message);
  }
}

export { addDestination, getAllDestinations, deleteDestinations };