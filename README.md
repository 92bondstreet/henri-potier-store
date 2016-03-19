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

### List of books

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

### Order total cart

```js
let store = require('henri-potier-store');
let order = store.order;

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

order(cart)
  .then(total => {
    console.log(total);
  });

// {
//   'was': 130,
//   'now': 100
// }  
```

## Special offers

### Percentage

Apply a deductible percentage value from total

### Minus

Apply a deductible value from total

### Slice

Slice a deductible value by total range

## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)
