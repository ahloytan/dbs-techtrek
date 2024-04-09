'use strict';

const express = require('express');
const router = express.Router();
let Dashboard = require('../models/dashboard');
const logger = require('../modules/logger');
const { groupByCountry } = require('../util/helper');

router.get('/', async function (req, res, next) {
    try {
        let dashboard_details = await Dashboard.getDashboardDetails();

        const total_budget = dashboard_details.reduce((total, obj) => total + obj.itinerary.budget, 0);
        const unique_customers = new Set(dashboard_details.map((x) => x.itinerary.user_id)).size;
        const total_cost = dashboard_details.reduce((total, obj) => total + obj.destination.cost, 0);

        const country_name_and_count = dashboard_details.reduce((country, obj) => {
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

        res.json({ dashboard });
    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

router.get('/user/:id', async function (req, res, next) {
    try {
        const { id } = req.params;
        let dashboard_details = await Dashboard.getUserDashboardDetails(id);
        const total_budget = dashboard_details.reduce((total, obj) => total + obj.budget, 0);
        const unique_countries = new Set(dashboard_details.map((x) => x.country.name)).size;
        const total_cost = dashboard_details.reduce((total_cost_of_itineraries, itinerary) => {
            const total_cost_of_each_itinerary = itinerary.itinerary_destination.reduce((total_cost_of_itinerary, destination) => total_cost_of_itinerary + destination.destination_id.cost, 0);
            return total_cost_of_itineraries + total_cost_of_each_itinerary;
        }, 0);

        const country_name_and_count = dashboard_details.reduce((country, obj) => {
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

        res.json({ dashboard });
    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

module.exports = router;