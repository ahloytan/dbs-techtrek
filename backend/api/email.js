'use strict';

const { Resend } = require('resend');
require('dotenv').config();
const { RESEND_API_KEY } = process.env;
const express = require('express');
const router = express.Router();

router.post('/', async function (req, res, next) {
    const resend = new Resend(RESEND_API_KEY);
    const {parentNameKanji, parentNameHiragana, studentNameKanji, studentNameHiragana, address, email, phone, bestTimeToCall, classes, comments } = req.body;

    const data = await resend.emails.send({
        from: 'Ahloy <no-reply@spotonenglishschool.net>',
        to: ['jackcobbett12@gmail.com','aloysius.dmit@gmail.com','chewinggum222@hotmail.com'],
        subject: 'WEBSITE CONTACT FORM',
        html: `
            <p>Parent Name (Kanji): <b>${parentNameKanji}</b></p>
            <p>Parent Name (Hiragana): <b>${parentNameHiragana}</b></p>
            <p>Student Name (Kanji): <b>${studentNameKanji}</b></p>
            <p>Student Name (Hiragana): <b>${studentNameHiragana}</b></p>
            <p>Current Address: <b>${address}</b></p>
            <p>Email Address: <b>${email}</b></p>
            <p>Phone Number: <b>${phone}</b></p>
            <p>Best time to call: <b>${bestTimeToCall}</b></p>
            <p>Selected Class: <b>${classes.join(', ')}</b></p>
            <p>Anything else: <b>${comments}</b></p>
            `
    });
    console.log(req.body);
    res.json({data})
})


module.exports = router;