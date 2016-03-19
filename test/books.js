'use strict';

let books = require('../').books;
let request = require('superagent');
let mock = require('superagent-mocker')(request);
let test = require('ava');

test('should fetch books array', async t => {
  const list = await books();

  t.ok(list.length > 0, 'not fetching array of books');
});

test('should reject when fetching errors', async t => {
  mock.clearRoutes();
  mock.get('http://henri-potier.xebia.fr/books', () => {
    throw Error('Server unavailble');
  });

  try {
    await books();
    t.fail('not rejecting error');
  } catch (err) {
    t.pass();
  }
});

test.after(() => {
  mock.clearRoutes();
});
