const assert = require('chai').assert;
const letterPositions = require('../letterPositions')

describe('#letterPositions', () => {
  it('returns an object with a key containing a letter, and values according to the position in the array', () => {
    assert.deepEqual(letterPositions("Dondozo"), {d: [0, 3], o: [1, 4, 6], n: [2], z: [5]})
  });

  it('returns an empty object if using anything but a string', () => {
    assert.deepEqual(letterPositions(101), {})
  });
  it('returns an empty object if the string is white space ', () => {
    assert.deepEqual(letterPositions(""), {})
  it
});
});