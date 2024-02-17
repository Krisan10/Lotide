const assert = require('chai').assert;
const eqObjects = require('../eqObjects')

describe("#eqObjects", () => {
  it("returns true for ({}, {})", () => {
    assert.deepEqual(eqObjects({}, {}), true);
  });

  it("returns true for ({firstType: 'grass', secondType: 'poison'}, {scondType: 'poison', firstType: 'grass'})", () => {
    assert.deepEqual(eqObjects({firstType: "grass", secondType: "poison"}, {secondType : "poison", firstType: "grass"}), true);
  });
  
  it("returns true for ({name: 'murkrow', type: ['dark', 'flying']},' {type: ['dark', 'flying'], name: 'murkrow'", () => {
    assert.deepEqual(eqObjects({name: "murkrow", type: ["dark", "flying"]}, {type: ["dark", "flying"], name: "murkrow"}), true)
  })
})