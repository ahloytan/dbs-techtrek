'use strict';

const dateFNS = require('date-fns');
const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const countriesTable = 'country';

module.exports = {  
  async addCountry(name) {
    const doesCountryExist = await this.getCustomer(name);
    if (doesCountryExist.length > 0) throw new Error("Country already exist!"); 

    const { data, error } = await supabase
    .from(countriesTable)
    .insert({ name })
    .select()

    if (error) throw new Error(error.message);

    return data;
  },  
  async getCountry(name) {
    const { data, error } = await supabase
    .from(countriesTable)
    .select()
    .eq('name', name)

    if (error) throw new Error(error.message);

    return data;
  },
  async getAllCountries() {
    const { data, error } = await supabase
    .from(countriesTable)
    .select()

    if (error) throw new Error(error.message);

    return data;
  },
};