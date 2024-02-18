# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @krisan10/lotide`

**Require it:**

`const _ = require('@krisan10/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array) `: Takes an array as an arguement and returns the first element.
* `tail(array)`: Takes an array as an arguement and returns all but the first element.
* `middle(array)`: Takes an array as an arguement and returns the middle (one or two) element.
* `countLetters(sentence)`: Takes a sentence as an argument and returns an objects with letters as keys and their occurences as values.
* `countOnly(allItems, itemsToCount)`: Takes an array and object as arguements and returns an object with the number of times the item has occured.
* `eqArrays(actual, expected)`: Takes two arrays as  arguements and compares the two to check if they are identical.
* `eqObjects(actual, expected)`: Takes two objects as arguements and compares the two to check if they are identical.
* `findKeyByValue(object, value)`: Takes and object and value as arguements and returns the key of the object that matches the value.
* `findKey(object, callback)`: Takes an object and function as arguements and returns the key of the object which matches the callback.
* `flatten(array)`: Takes an array (with or without nested arrays), and reduces them to one level.
* `letterPositions(sentence)`: Takes a string and returns an object where the keys are the letters in the sentence and the values are the positions of the letters in the string.
* `map(array, callback)`: Takes an array and a function and applies the callback to each item of the array.
* `takeUntil(array, callback)`: Takes an array and applies a callback to return a new array which slices the elements that do not meet the callback.
* `without(array, itemsToRemove)`: Takes an array and removes elements according to the itemsToRemove.
* `assertEqual(actual, expected)`: Asserts whether two values are equal or not.
* `assertArraysEqual(actual, expected)`: Asserts whether two arrays are equal or not.
* `assertObjectsEqual(actual, expected)`: Asserts whether two objects are equal or not.
