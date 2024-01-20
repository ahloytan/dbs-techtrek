import axios from 'axios';
const { NODE_ENV, PROD_URL } = process.env;
const BASE_URL = NODE_ENV === 'production' ? PROD_URL : 'http://localhost:5000/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


const login = async (username, password) => {
  try { 
    await api.post('/login', {
      username, 
      password
    })
    window.sessionStorage.setItem('authenticated', 'true');

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

const getItineraries = async () => {
  const response = await api.get('/itineraries')
  const data = await response.data
  return data
}

const getItinerary = async () => {
  const response = await api.get('/itineraries/1')
  const data = await response.data
  return data
}

const createItinerary = async(country, budget, title) => {
    try{
        await api.post('/itineraries/create', {
            country, budget, title
        })
        return {
            "message": "GOOD ADD",
            "severity": "success"
        }
    }
    catch(error){
        console.log(error)
        return error;
    }
}

const createDestination = async (cost, name, notes) => {
  try {
    // await api.post('/destinations/create', {
    //   cost, name, notes
    // });
    console.log(cost, name, notes)
    return {
      'message': 'GOOD ADD',
      'severity': 'success'
    }    
  } catch (error) {
    console.log(error)
    return error;
  }
}

const getAllDestinations = async () => {
  try {
    // await api.post('/destinations');
    const data = [
      {
        "name": "Paris",
        "countryName": "France",
        "cost": 2000,
        "notes": "City of Love",
        "id": "1"
      },
      {
        "name": "HK",
        "countryName": "HONGKONG",
        "cost": 3000,
        "notes": "CHA CHAN TING",
        "id": "2"
      },
      {
        "name": "SK",
        "countryName": "SOUTH KOREA",
        "cost": 11000,
        "notes": "City of KPOP",
        "id": "3"
      }
    ]
    
    return data  
  } catch (error) {
    console.log(error)
    return error;
  }
}

const editDestination = async (id, cost, name, notes) => {
  try {
    console.log(id, cost, name, notes, 'HAAH');
    // await api.put('/destinations/edit', {
    //   cost, name, notes
    // });
    return {
      'message': 'GOOD EDIT',
      'severity': 'success'
    }    
  } catch (error) {
    console.log(error)
    return error;
  }
}

const deleteDestination = async (id) => {
  try {
    console.log(id, 'DELETO');
    // await api.delete('/destinations/edit', {
    //   id
    // });
    return {
      'message': 'OK',
      'severity': 'success'
    }    
  } catch (error) {
    console.log(error)
    return error;
  }
}

export {login, addCustomer, getAllCustomers, getItineraries, getItinerary, createDestination, getAllDestinations, editDestination, deleteDestination};
