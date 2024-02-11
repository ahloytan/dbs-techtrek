'use strict';

const express = require('express');
const router = express.Router();
let Itineraries = require('../models/itineraries');
let Firebase = require('../models/firebase');
const logger = require('../modules/logger');


router.get('/:userID', async function (req, res, next) {
    try {
        let { userID } = req.params;
        userID = parseInt(userID);
        let itineraries = await Firebase.getUserItineraries(userID);

        res.json({ itineraries });
    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

module.exports = router;