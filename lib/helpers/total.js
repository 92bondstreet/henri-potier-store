'use strict';

let special = require('./special-offers');

/**
 * Original total order
 *
 * @param  {Array} cart
 * @return {Integer}
 */
const was = cart => {
  return cart.reduce((price, item) => {
    return price + item.price * (item.quantity || 1);
  }, 0);
};

/**
 * Get the best special offer for total order
 *
 * @param  {Integer} total - from  original order
 * @param  {Array} offers
 * @return {Number}
 */
const now = (total, offers) => {
  let totals = offers.map(offer => {
    const compute = special[offer.type];

    //compute only if the special price is defined
    //else return the origina total itself
    return compute && compute(total, offer) || total;
  });

  return Math.min.apply(Math, totals);
};

/**
 * Get the total order with the best special offer
 *
 * @param  {Array} cart
 * @param  {Array} offers - list of special offers
 * @return {Object}
 */
module.exports = function total (cart, offers) {
  //From cart and special offers
  //compute the total order where
  //* was, is the original total order
  //* now, the total order with the best offers
  //* offer, the applied special offer
  const original = was(cart);
  const best = now(original, offers);

  return {
    'was': original,
    'now': best
  };
};
