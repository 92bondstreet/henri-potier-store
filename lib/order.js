'use strict';

let isbn = require('./helpers/isbn');
let request = require('superagent');
let total = require('./helpers/total');

/**
 * Get the order total cart
 *
 * @param {Array} cart
 * @return {Promise}
 */
module.exports = function order (cart) {
  const url = `http://henri-potier.xebia.fr/books/${isbn(cart)}/commercialOffers`;

  return new Promise((resolve, reject) => {
    request
    .get(url)
    .end((err, res) => {
      if (err) {
        return reject(err);
      }
      resolve(total(cart, res.body.offers));
    });
  });
};
