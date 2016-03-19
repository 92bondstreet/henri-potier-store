'use strict';

let isbn = require('../lib/helpers/isbn');
let test = require('ava');

test('should reduce list of isbn', t => {
  const cart = [{
    'isbn': 'a'
  }, {
    'isbn': 'b'
  }, {
    'isbn': 'c'
  }];
  const reduced = isbn(cart);

  t.is(reduced, 'a,b,c', 'not reducing list of isbn');
});

test('should reduce list of isbn according quantity', t => {
  const cart = [{
    'isbn': 'a',
    'quantity': 2
  }, {
    'isbn': 'b',
    'quantity': 1
  }, {
    'isbn': 'c',
    'quantity': 2
  }];
  const reduced = isbn(cart);

  t.is(reduced, 'a,a,b,c,c', 'not reducing list of isbn');
});
