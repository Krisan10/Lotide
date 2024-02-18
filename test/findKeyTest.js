const assert = require('chai').assert;
const findKey = require('../findKey')

describe('#findKey', () => {
  it('should find the first key for which the callback condition is true', () => {
    const exampleObject = {
      a: 1,
      b: 2,
      c: 3
    };

    const result = findKey(exampleObject, (value) => value % 2 === 0);

    assert.deepEqual(result, 'b');
  });

  it('should return undefined if no key satisfies the callback condition', () => {
    const exampleObject = {
      a: 1,
      b: 3,
      c: 5
    };

    const result = findKey(exampleObject, (value) => value % 2 === 0);

    assert.deepEqual(result, undefined);
  });

  it('should handle an empty object', () => {
    const emptyObject = {};

    const result = findKey(emptyObject, (value) => value === 42);

    assert.deepEqual(result, undefined);
  });

  it('should handle a callback that always returns true', () => {
    const exampleObject = {
      a: 1,
      b: 2,
      c: 3
    };

    const result = findKey(exampleObject, () => true);

    assert.deepEqual(result, 'a');
  });
});