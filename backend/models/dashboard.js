'use strict';

const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const itineraryDestinationTable = 'itinerary_destination';
const itineraryTable = 'itinerary';

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

  async getUserDashboardDetails(user_id) {
    const { data, error } = await supabase
    .from(itineraryTable)
    .select(`
      user_id, budget,
      itinerary_destination:id ( id, destination_id ( cost )),
      country:country_id ( name )
    `)
    .eq('user_id', user_id)

    if (error) throw new Error(error.message);

    return data;
  },
};