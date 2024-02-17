const assert = require('chai').assert;
const letterPositions = require('../letterPositions')

describe('#letterPositions', () => {
  it('returns {d: [0], 3], o: [1, 4, 6], n: [2], z: [5]} for Dondozo', () => {
    assert.deepEqual(letterPositions("Dondozo"), {d: [0, 3], o: [1, 4, 6], n: [2], z: [5]})
  });

  it('returns {} from a number', () => {
    assert.deepEqual(letterPositions(101), {})
  })
})