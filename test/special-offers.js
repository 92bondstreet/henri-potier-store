'use strict';

let special = require('../lib/helpers/special-offers');
let test = require('ava');

const offers = [{
  'type': 'percentage',
  'value': 10
}, {
  'type': 'minus',
  'value': 50
}, {
  'type': 'slice',
  'sliceValue': 80,
  'value': 15
}];

test('should compute percentage value', t => {
  t.is(special.percentage(100, offers[0]), 90, 'not computing percentage');
  t.is(special.percentage(100), 100, 'not computing percentage');
});

test('should compute minus value', t => {
  t.is(special.minus(100, offers[1]), 50, 'not computing minus');
  t.is(special.minus(100), 100, 'not computing minus');
});

test('should compute slice value', t => {
  t.is(special.slice(100, offers[2]), 85, 'not computing slice');
  t.is(special.slice(100), 100, 'not computing slice');
});
