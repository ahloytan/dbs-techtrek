'use strict';

const { supabase } = require('../util/db.js');
const countriesTable = 'country';

module.exports = {  
  async addCountry(name) {
    const doesCountryExist = await this.getCountry(name);
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
  async deleteCountries(names) {
    const { error } = await supabase
    .from(countriesTable)
    .delete()
    .in('name', names)

    if (error) throw new Error(error.message);
  }

};