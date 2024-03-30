'use strict';

const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const itineraryDestinationTable = 'itinerary_destination';

module.exports = {  

  async getDashboardDetails() {
    const { data, error } = await supabase
    .from(itineraryDestinationTable)
    .select(`
      itinerary:itinerary_id ( user_id, budget ),
      destination:destination_id ( name, cost, country ( name ) )
    `)

    if (error) throw new Error(error.message);

    return data;
  },
};