'use strict';

const express = require('express');
const router = express.Router();
const logger = require('../modules/logger');
const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

router.post('/login', async function (req, res, next) {
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

router.post('/logout', async function (req, res, next) {
    try {
        const { error } = await supabase.auth.signOut();

        if (error) {
            res.status(401).send(error);
            return;
        }

        res.status(200).json({'message': 'Logout successful!'});

    } catch (error) {
        logger.warn(error);
        next(error);
    }
});

router.post('/register', async function (req, res, next) {
    try {
        const { username, password } = req.body;
        const { data, error: signUpError } = await supabase.auth.signUp({
            email: username,
            password,
        })
        if (signUpError) {
            res.status(501).send(signUpError);
            return;
        }

        const { user: { email, created_at, id }} = data;
        
        const { error: rpcError } = await supabase.rpc('register_user_account', {uid: id});
        if (rpcError) {
            res.status(502).send(rpcError);
            return;
        }

        res.status(200).json({'message': `${email} has been signed up successfully`, 'created_at': created_at });

    } catch (error) {
        logger.warn(error);
        next(error);
    }
})

module.exports = router;