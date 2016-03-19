/*eslint-disable no-console*/
'use strict';

let books = require('./').books;
let order = require('./').order;
let isbn = require('./lib/helpers/isbn');
let total = require('./lib/helpers/total');

books()
  .then(list => {
    console.log(list);
  })
  .catch(err => {
    console.log(err);
  });

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

console.log(`ISBN from cart: ${isbn(cart)}`);

order(cart)
  .then(value => {
    console.log(`Order total: ${JSON.stringify(value)}`);
  })
  .catch(err => {
    console.log(err);
  });

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
}];

console.log(`TOTAL for current cart: ${JSON.stringify(total(cart, offers))}`);
