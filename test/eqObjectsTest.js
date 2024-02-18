const assert = require('chai').assert;
const eqObjects = require('../eqObjects')

describe("#eqObjects", () => {
  it("returns true if both objects are empty)", () => {
    assert.deepEqual(eqObjects({}, {}), true);
  });

  it("returns true if both objects are identical, regardless of the order of the keys", () => {
    assert.deepEqual(eqObjects({firstType: "grass", secondType: "poison"}, {secondType : "poison", firstType: "grass"}), true);
  });
  
  it("returns true if both objects are identical with arrays, regardless of the order of the keys", () => {
    assert.deepEqual(eqObjects({name: "murkrow", type: ["dark", "flying"]}, {type: ["dark", "flying"], name: "murkrow"}), true)
  })
})