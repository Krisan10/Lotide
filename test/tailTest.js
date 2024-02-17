const assert = require('chai').assert;
const tail = require('../tail')
const assertEqual = require('../assertEqual');

describe("#tail", () => {
  it("returns [2] for [1, 2]", () => {
    assert.deepEqual(tail([1, 2]), [2]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), [])
  })
}); 
