'use strict';

let order = require('../').order;
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

test('should get the total order according cart', async t => {
  const total = await order(cart);

  t.ok(total, 'not fetching total order ');
  t.ok(total.was, 'not fetching `was` total order ');
  t.ok(total.now, 'not fetching `now` total order ');
});
