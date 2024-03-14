'use strict';

const dateFNS = require('date-fns');
const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const customersTable = 'customers';

module.exports = {  
  async addCustomer(address, avatar, email, name, phoneNumber) {
    const doesCustomerExist = await this.getCustomer(email);
    if (doesCustomerExist.length > 0) throw new Error("Email already exist!"); 

    const createdAt = dateFNS.format(new Date(), 'yyyy-MM-dd HH-mm-ss');    
    avatar = `${avatar}.webp`;
    const { error } = await supabase
    .from(customersTable)
    .insert({ address, avatar, createdAt, email, name, phoneNumber })

    if (error) return error;

    return data;
  },  
  async getCustomer(email) {
    const { data, error } = await supabase
    .from(customersTable)
    .select()
    .eq('email', email)

    if (error) return error;

    return data;
  },

  async getAllCustomers() {
    const { data, error } = await supabase
    .from(customersTable)
    .select()

    if (error) return error;

    return data;
  },
};