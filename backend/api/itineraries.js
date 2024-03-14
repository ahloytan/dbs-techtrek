'use strict';

const express = require('express');
const router = express.Router();
let Itineraries = require('../models/itineraries');
const logger = require('../modules/logger');

router.get('/:userID', async function (req, res, next) {
    try {
        let { userID } = req.params;
        let itineraries = await Itineraries.getUserItineraries(userID);

        res.json({ itineraries });
    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

module.exports = router;