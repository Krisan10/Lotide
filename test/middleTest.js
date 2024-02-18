const assert = require('chai').assert;
const middle = require('../middle')

describe("#middle", () => {
it("returns one number if the length of the array is an odd number", () => {
  assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
});

it("returns two numbers if the length of the array is an even number", () => {
  assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
});

it("returns an empty array if there is only one item", () => {
  assert.deepEqual(middle([1]), [])
})

it("returns an empty array if there are only two values", () => {
  assert.deepEqual(middle([1, 2]), [])
})

it("returns an empty array from an empty array", () => {
  assert.deepEqual(middle([]), [])
})

it("makes sure the original array was not altered by the middle function", () => {
  const words = ["hello", "world", "lighthouse"];
  const result = middle(words);
  assert.deepEqual(result, ["world"]);
  assert.strictEqual(words.length, 3);
});

});

