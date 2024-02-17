const assertArraysEqual = require('../assertArraysEqual')
const eqArrays = require('../eqArrays')
const middle = require('../middle')

let array1 = [3, 5, 7, 9, 11];
let array2 = [3];
let array3 = [2, 4, 6, 8];
console.log(middle(array1));
console.log(middle(array2));
console.log(middle(array3));

let check1 = [7];
assertArraysEqual(middle(array1), check1);