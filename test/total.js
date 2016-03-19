'use strict';

let total = require('../lib/helpers/total');
let test = require('ava');

const cart = [{
  'isbn': 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
  'price': 35,
  'quantity': 2
}, {
  'isbn': 'fcd1e6fa-a63f-4f75-9da4-b560020b6acc',
  'price': 30,
  'quantity': 1
}, {
  'isbn': '78ee5f25-b84f-45f7-bf33-6c7b30f1b502',
  'price': 30,
  'quantity': 1
}];

const offers = [{
  'type': 'percentage',
  'value': 8
}, {
  'type': 'minus',
  'value': 30
}, {
  'type': 'slice',
  'sliceValue': 80,
  'value': 14
}, {
  'type': 'unknown',
  'sliceValue': 80,
  'value': 14
}];

test('should compute the best total value', t => {
  const price = total(cart, offers);

  t.is(price.was, 130, 'not computing the `was` total');
  t.is(price.now, 100, 'not computing the `now` total');
});
