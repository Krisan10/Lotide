const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays')

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["cat", "dog", "frog"], ["cat", "dog", "eagle" ]), false);
assertEqual(eqArrays(["yeah"], []), false);
assertEqual(eqArrays([], [],), true);