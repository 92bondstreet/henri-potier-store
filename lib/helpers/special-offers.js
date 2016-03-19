'use strict';

module.exports = {
  /**
   * Compute percentage price
   *
   * @param  {Integer} total
   * @param  {Object} value
   * @return {Number}
   */
  'percentage': (total, offer) => {
    const value = offer && offer.value || 0;

    return total - total * value / 100;
  },
  /**
   * Compute minus price
   *
   * @param  {Integer} total
   * @param  {Object} value
   * @return {Number}
   */
  'minus': (total, offer) => {
    const value = offer && offer.value || 0;

    return total - value;
  },
  /**
   * Compute slice price
   *
   * @param  {Integer} total
   * @param  {Object} value
   * @return {Number}
   */
  'slice': (total, offer) => {
    const value = offer && offer.value || 0;
    const slice = offer && offer.sliceValue || 1;

    return total - parseInt(total / slice, 10) * value;
  }
};
