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
  return new Promise((resolve, reject) => {
    //break for empty cart
    if (! cart || ! cart.length) {
      return resolve([]);
    }

    const url = `http://henri-potier.xebia.fr/books/${isbn(cart)}/commercialOffers`;

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
