const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')

de

let array1 = [3, 5, 7, 9, 11];
let array2 = [3];
let array3 = [2, 4, 6, 8];
console.log(middle(array1));
console.log(middle(array2));
console.log(middle(array3));

let check1 = [7];
assertArraysEqual(middle(array1), check1);

let check2 = [];
assertArraysEqual(middle(array2), check2);

let check3 = ([4, 6])
assertArraysEqual(middle(array3), check3)