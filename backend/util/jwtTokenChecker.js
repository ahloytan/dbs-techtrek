'use strict';
const jwt = require('jsonwebtoken');
const { SECRET } = process.env;

function jwtTokenChecker(req, res, next) {
    const authHeader = req.headers.authorization;
    const [bearer, token] = authHeader.split(' ');
    if (!authHeader || bearer !== "Bearer") return res.status(401).json({ message: 'No token provided' });
    
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Invalid token' });
        
        req.user = decoded;
        next();
    });
}

module.exports = jwtTokenChecker;
