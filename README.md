# henri-potier-store

[![Build Status](https://travis-ci.org/henri-potier-store/insee.svg?branch=master)](https://travis-ci.org/92bondstreet/henri-potier-store)

> Helpers to fetch books and best cart for Henri Potier bookstore

## Description

To improve books sells, `henri-potier-store` helps to compute the best available special offer for a given cart.

## Features

* Fetch available Henri Potier books
* Fetch special offers according selected books
* Compute the best special offer

## Usage

```js
let store = require('henri-potier-store');
let books = store.books;

books()
  .then(list => {
    console.log(list);
  });

// [
//   {
//   "isbn": "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
//   "title": "Henri Potier à l'école des sorciers",
//   "price": 35,
//   "cover": "http://henri-potier.xebia.fr/hp0.jpg"
//   },
//   ...
// ]
```

## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)
