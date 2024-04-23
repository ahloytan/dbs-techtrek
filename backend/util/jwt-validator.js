'use strict';

const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function jwt_validator(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(440).json({ message: 'Invalid authorization header format' });
    const [, token] = authHeader.split(' ');

    if (!token) return res.status(440).json({ message: 'No token provided' });

    const { data: { user } } = await supabase.auth.getUser(token);

    if (!user) return res.status(440).json({ message: 'Invalid token' });

    next();
}

module.exports = jwt_validator;
