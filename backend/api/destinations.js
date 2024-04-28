'use strict';

const express = require('express');
const router = express.Router();
let Destinations = require('../models/destinations');
const logger = require('../modules/logger');

router.post('/', async function (req, res, next) {
    try {
        const { country_id, cost, name, notes, image_name } = req.body;
        await Destinations.addDestination(country_id, cost, name, notes, image_name);

        res.json({ 'message': `Destination: ${name} has been successfully created!` });

    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

router.get('/', async function (req, res, next) {
    try {
        let destinations = await Destinations.getAllDestinations();

        res.json({ destinations });
    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

router.delete('/', async function (req, res, next) {
    try {
        const { ids } = req.body;
        await Destinations.deleteDestination(ids);
        res.json({ 'message': `Destination with id: ${ids} has been successfully deleted!` });
        
    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

module.exports = router;