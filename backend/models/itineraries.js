'use strict';

let { connection: db } = require('../db');

module.exports = {  
    getUserItineraries(userID) {
      return db.promise()
        .query(
          `SELECT i.id, i.country_id, i.budget, i.title, i.title_image, cs.name, c.name as country_name
          FROM itinerary i
          LEFT JOIN customers cs
          ON i.user_id = cs.id
          LEFT JOIN country c
          ON i.country_id=c.id
          WHERE user_id = ?`,
          [userID]
        )
        .then(([rows]) => rows);
    },
  };