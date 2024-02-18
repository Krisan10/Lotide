const assert = require('chai').assert;
const head = require('../head')

describe("#head", () => {
  it("returns the first item of an array", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns the only item in an array with one item", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});
