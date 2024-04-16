'use strict';

const express = require('express');
const router = express.Router();
let Dashboard = require('../models/dashboard');
const logger = require('../modules/logger');


router.get('/', async function (req, res, next) {
    try {
        const dashboard = await Dashboard.getDashboardDetails();

        res.json({ dashboard });
    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

router.get('/user/:id', async function (req, res, next) {
    try {
        const { id } = req.params;
        const dashboard = await Dashboard.getUserDashboardDetails(id);

        res.json({ dashboard });
    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

module.exports = router;