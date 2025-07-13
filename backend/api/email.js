'use strict';

const { Resend } = require('resend');
const { RESEND_API_KEY } = process.env;
const express = require('express');
const router = express.Router();
const resend = new Resend(RESEND_API_KEY);

router.post('/', async function (req, res, next) {
    const {parentNameKanji, parentNameHiragana, studentNameKanji, studentNameHiragana, address, email, phone, bestTimeToCall, classes, comments } = req.body;

    const data = await resend.emails.send({
        from: 'Ahloy <no-reply@spotonenglishschool.net>',
        to: ['spotonenglish@gmail.com','aloysius.dmit@gmail.com'],
        subject: '体験申し込み依頼がありました',
        html: `
            <p>親の名前 (漢字): <b>${parentNameKanji}</b></p>
            <p>親の名前 (ひらがな): <b>${parentNameHiragana}</b></p>
            <p>生徒の名前 (漢字): <b>${studentNameKanji}</b></p>
            <p>生徒の名前 (ひらがな): <b>${studentNameHiragana}</b></p>
            <p>住所: <b>${address}</b></p>
            <p>メールアドレス: <b>${email}</b></p>
            <p>電話番号: <b>${phone}</b></p>
            <p>電話連絡希望時間帯: <b>${bestTimeToCall}</b></p>
            <p>ご希望のクラス: <b>${classes.join(', ')}</b></p>
            <p>その他: <b>${comments}</b></p>
            `
    });
    console.log(req.body);
    res.json({data})
})


module.exports = router;