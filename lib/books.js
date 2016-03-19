'use strict';

let request = require('superagent');

const BOOKS_STORE_URL = 'http://henri-potier.xebia.fr/books';

/**
 * Get the list of available books
 * @return {Promise}
 */
module.exports = function books () {
  return new Promise((resolve, reject) => {
    request
    .get(BOOKS_STORE_URL)
    .end((err, res) => {
      if (err) {
        return reject(err);
      }
      resolve(res.body);
    });
  });
};
