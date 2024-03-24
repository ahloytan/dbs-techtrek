'use strict';

const express = require('express');
const router = express.Router();
let Destinations = require('../models/destinations');
const logger = require('../modules/logger');


router.get('/', async function (req, res, next) {
    try {
        let destinations = await Destinations.getAllDestinations();

        res.json({ destinations });
    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

module.exports = router;