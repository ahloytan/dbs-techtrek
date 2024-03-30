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
        const traffic_by_country = groupByCountry(dashboard_details);
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

module.exports = router;