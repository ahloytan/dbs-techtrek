'use strict';

let { connection: db } = require('../db');

module.exports = {  
    getByUsername (username) {
      return db.promise()
        .query(
          'SELECT username, password FROM user_account WHERE username = ? LIMIT 1;',
          [username]
        )
        .then(([[rows]]) => rows);
    },
  };