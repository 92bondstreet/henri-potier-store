'use strict';

/**
 * Repeat string
 *
 * @param  {String} string - to repeat
 * @param  {Integer} count
 * @return {String}
 */
const repeat = (string, count) => {
  count = count || 1;

  return Array(count).fill(string).join(',');
};

/**
 * Reduce the isbn list according quantity
 *
 * @param  {Array} cart
 * @return {String}
 */
module.exports = function isbn (cart) {
  return cart.reduce((prev, curr) =>{
    return {
      'isbn': `${repeat(prev.isbn, prev.quantity)},${repeat(curr.isbn, curr.quantity)}`,
      'quantity': 1
    };
  }).isbn;
};
