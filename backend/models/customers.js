'use strict';

let { connection: db } = require('../db');

module.exports = {  
    getAllCustomers () {
      return db.promise()
        .query(
          'SELECT * FROM customers',
          []
        )
        .then(([rows]) => rows);
    },
  };