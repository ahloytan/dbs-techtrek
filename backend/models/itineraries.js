'use strict';

const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const itineraryTable = 'itinerary';

module.exports = {  
  async getUserItineraries(userID) {
    const { data, error } = await supabase
    .from(itineraryTable)
    .select(`id, country_id, budget, title, title_image, customers (name), country (name)`)
    .eq('user_id', userID)
    if (error) return error;

    return data;
  },
};