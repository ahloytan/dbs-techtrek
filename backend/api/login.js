'use strict';

const express = require('express');
const router = express.Router();
let Users = require('../models/customers');
const logger = require('../modules/logger');
const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

router.post('/', async function (req, res, next) {
    try {
        const { username, password } = req.body;
        const { data, error } = await supabase.auth.signInWithPassword({
            email: username,
            password
        });

        if (error) {
            res.status(401).send(error);
            return;
        }

        const { session: { access_token: jwt }} = data;
        res.status(200).json({'message': 'Login successful!', 'jwt': jwt});

    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

router.post('/register', async function (req, res, next) {
    try {
        const { username, password } = req.body;
        const { data, error } = await supabase.auth.signUp({
            email: username,
            password,
        })

        if (error) {
            res.status(401).send(error);
            return;
        }

        const {user: { email, created_at }} = data;

        res.status(200).json({'message': `${email} has been signed up successfully`, 'created_at': created_at });

    } catch (error) {
        logger.warn(error);
        next(error);
    }
})

module.exports = router;