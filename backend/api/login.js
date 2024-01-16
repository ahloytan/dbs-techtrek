'use strict';

const express = require('express');
const router = express.Router();
let Users = require('../models/users');
const logger = require('../modules/logger');
const bcrypt = require('bcrypt');

router.post('/', async function (req, res, next) {
    try {
        const { username, password } = req.body;
        let user = await Users.getByUsername(username);

        // Acts as temporary register page. Can test password hash
        // bcrypt.hash(password, saltRounds, function(err, hash) {
        //     console.log(passowrd)
        // });

        if (!user || !(await bcrypt.compare(password, user.password))){
            res.status(401).send('Invalid username or password! Please try again');
        } else {
            // user.session = await this.updateSession(user.id);
            res.status(200).send('Login successful!');
        }

    } catch (error) {
        logger.warn(error);
        next(error);
    }
  });

module.exports = router;