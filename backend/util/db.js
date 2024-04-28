const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function supabaseServerWithRLS(jwt) {
    
    if (!jwt) throw new AuthSessionMissingError();
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        db: {
            schema: 'public',
        },
        auth: {
            persistSession: false,
            autoRefreshToken: false,
        },
        global: {
            headers: jwt ? {
                Authorization: `Bearer ${jwt}`,
            } : null,
        },
    });


    return supabaseClient;
}

module.exports = { supabase, supabaseServerWithRLS };