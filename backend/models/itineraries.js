'use strict';

const { supabase } = require('../util/db.js');
const itineraryTable = 'itinerary';

module.exports = {  
  async getUserItineraries(userID) {
    const { data, error } = await supabase
    .from(itineraryTable)
    .select(`id, country_id, budget, title, title_image, customers (name), country (name)`)
    .eq('user_id', userID)

    if (error) throw new Error(error.message);
    
    return data;
  },
};