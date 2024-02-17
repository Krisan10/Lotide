const assert = require('chai').assert;
const tail = require('../tail')


describe("#tail", () => {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2]), [2]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), [])
  })
}); 
