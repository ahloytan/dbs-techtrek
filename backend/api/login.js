'use strict';

const express = require('express');
const router = express.Router();
let Users = require('../models/users');
let Firebase = require('../models/firebase');
const logger = require('../modules/logger');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = process.env;

//Can explore google login https://developers.google.com/identity/sign-in/web/sign-in

router.post('/', async function (req, res, next) {
    try {
        const { username, password } = req.body;
        let user = await Users.getByUsername(username);

        // const saltRounds = 10;
        // Acts as temporary register page. Can test password hash
        // bcrypt.hash(password, saltRounds, function(err, hash) {
        //     console.log(passowrd)
        // });

        if (!user || !(await bcrypt.compare(password, user.password))){
            res.status(401).send('Invalid username or password! Please try again');
        } else {
            const seconds = 5 * 1;
            const token = jwt.sign({
                data: 'foobar'
            }, SECRET, { expiresIn: seconds });

            res.status(200).json({'message': 'Login successful!', 'jwt': token});
        }
        
    } catch (error) {
        logger.warn(error);
        next(error);
    }
  });

module.exports = router;