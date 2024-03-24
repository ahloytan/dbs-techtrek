'use strict';

const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const destinationsTable = 'destination';

module.exports = {  
    async getAllDestinations() {
        const { data, error } = await supabase
        .from(destinationsTable)
        .select()
    
        if (error) throw new Error(error.message);
    
        return data;
    }
}