/*eslint-disable no-console*/
'use strict';

let books = require('./').books;

books()
  .then(list => {
    console.log(list);
  })
  .catch(err => {
    console.log(err);
  });
