'use strict';

const { Resend } = require('resend');
require('dotenv').config();
const { RESEND_API_KEY } = process.env;
const express = require('express');
const router = express.Router();

const resend = new Resend(RESEND_API_KEY);

router.post('/', async function (req, res, next) {
    const {parentNameKanji, parentNameHiragana, studentNameKanji, studentNameHiragana, address, email, phone, bestTimeToCall, classes, comments } = req.body;

    const data = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['chewinggum222@hotmail.com', 'jackcobbett12@gmail.com'],
        subject: 'Spot On English School Registration',
        html: `
            <p>Parent Name (Kanji): ${parentNameKanji}</p>
            <p>Parent Name (Hiragana): ${parentNameHiragana}</p>
            <p>Student Name (Kanji): ${studentNameKanji}</p>
            <p>Student Name (Hiragana): ${studentNameHiragana}</p>
            <p>Current Address: ${address}</p>
            <p>Email Address: ${email}</p>
            <p>Phone Number: ${phone}</p>
            <p>Best time to call: ${bestTimeToCall}</p>
            <p>Selected Class: ${classes.join(', ')}</p>
            <p>Anything else: ${comments}</p>
            `
    });
    console.log(req.body);
    res.json({data})
})


module.exports = router;