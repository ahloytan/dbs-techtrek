'use strict';

// const { supabaseWithRLS } = require('../util/jwt-validator');
const { supabase } = require('../util/db.js');
const itineraryDestinationTable = 'itinerary_destination';
const itineraryTable = 'itinerary';
const { groupByCountry } = require('../util/helper');

module.exports = {  

  async getDashboardDetails() {

    const { data, error } = await supabase
    .from(itineraryDestinationTable)
    .select(`
      itinerary:itinerary_id ( user_id, budget ),
      destination:destination_id ( name, cost, country ( name ) )
    `)

    if (error) throw new Error(error.message);

    const total_budget = data.reduce((total, obj) => total + obj.itinerary.budget, 0);
    const unique_customers = new Set(data.map((x) => x.itinerary.user_id)).size;
    const total_cost = data.reduce((total, obj) => total + obj.destination.cost, 0);

    const country_name_and_count = data.reduce((country, obj) => {
        const { destination: { country : { name } } } = obj;
        if (!country[name]) country[name] = { name, total: 0 };
        country[name].total += 1;
        return country;
    }, {});

    const traffic_by_country = groupByCountry(country_name_and_count);
    
    const dashboard = {
        totalBudget: total_budget,
        uniqueCustomers: unique_customers,
        totalCost: total_cost,
        trafficByCountry: traffic_by_country
    }
    
    return dashboard;
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

    const total_budget = data.reduce((total, obj) => total + obj.budget, 0);
    const unique_countries = new Set(data.map((x) => x.country.name)).size;
    const total_cost = data.reduce((total_cost_of_itineraries, itinerary) => {
        const total_cost_of_each_itinerary = itinerary.itinerary_destination.reduce((total_cost_of_itinerary, destination) => total_cost_of_itinerary + destination.destination_id.cost, 0);
        return total_cost_of_itineraries + total_cost_of_each_itinerary;
    }, 0);

    const country_name_and_count = data.reduce((country, obj) => {
        const { country : { name } } = obj;
        if (!country[name]) country[name] = { name, total: 0 };
        country[name].total += 1;
        return country;
    }, {});

    const traffic_by_country = groupByCountry(country_name_and_count);
    const dashboard = {
        totalBudget: total_budget,
        uniqueCountries: unique_countries,
        totalCost: total_cost,
        trafficByCountry: traffic_by_country
    }

    return dashboard;
  },
};