'use strict';

let { connection: db } = require('../db');
const dateFNS = require('date-fns');

module.exports = {  
  async addCustomer (address, avatar, email, name, phoneNumber) {
    const doesCustomerExist = await this.getCustomer(email);
    if (doesCustomerExist.length > 0) throw new Error("Email already exist!"); 
    
    const createdAt = dateFNS.format(new Date(), 'yyyy-MM-dd HH-mm-ss');
    avatar = `/assets/avatars/${avatar}.webp`;
    return db.promise()
      .query(
        'INSERT INTO customers (address, avatar, created_at, email, name, phone_number) VALUES (?, ?, ?, ?, ?, ?)',
        [address, avatar, createdAt, email, name, phoneNumber]
      )
  },
  getCustomer(email) {
    return db.promise()
      .query(
        'SELECT * FROM customers WHERE email=?',
        [email]
      )
      .then(([rows]) => rows);
  },
  getAllCustomers () {
    return db.promise()
      .query(
        'SELECT * FROM customers',
        []
      )
      .then(([rows]) => rows);
  },
};