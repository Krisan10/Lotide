const assert = require('chai').assert;
const tail = require('../tail')


describe("#tail", () => {
  it("returns all items except for the first", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("returns an empty array if the array has one item", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns an empty array if the array is empty", () => {
    assert.deepEqual(tail([]), [])
  })
}); 
