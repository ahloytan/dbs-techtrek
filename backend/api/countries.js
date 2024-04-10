'use strict';

const express = require('express');
const router = express.Router();
let Countries = require('../models/countries');
const logger = require('../modules/logger');

router.post('/', async function (req, res, next) {
    try {
        const { name } = req.body;
        await Countries.addCountry(name);

        res.json({ 'message': `Country: ${name} has been successfully created!` });

    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

router.get('/', async function (req, res, next) {
    try {
        let countries = await Countries.getAllCountries();

        res.json({ countries });
    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

router.delete('/', async function (req, res, next) {
    try {
        const { names } = req.body;
        await Countries.deleteCountries(names);
        res.json({ 'message': `Countries with names: ${names} has been successfully deleted!` });
        
    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

module.exports = router;