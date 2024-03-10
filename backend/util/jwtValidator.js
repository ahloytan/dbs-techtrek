'use strict';
const jwt = require('jsonwebtoken');
const { SECRET } = process.env;

function jwtValidator(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(401).json({ message: 'Invalid authorization header format' });
    const [, token] = authHeader.split(' ');

    if (!token) return res.status(401).json({ message: 'No token provided' });

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Invalid token' });

        req.user = decoded;
        next();
    });
}

module.exports = jwtValidator;
