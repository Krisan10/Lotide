const assert = require('chai').assert;
const takeUntil = require('../takeUntil')

describe('#takeUntil', () => {
  it('should take elements until the callback condition is met', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const callback = (x) => x >= 4;

    const result = takeUntil(inputArray, callback);

    assert.deepEqual(result, [1, 2, 3]);
  });

  it('should handle an empty input array', () => {
    const inputArray = [];
    const callback = (x) => x >= 4;

    const result = takeUntil(inputArray, callback);

    assert.deepEqual(result, []);
  });

  it('should handle a callback that never returns true', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const callback = (x) => false;

    const result = takeUntil(inputArray, callback);

    assert.deepEqual(result, [1, 2, 3, 4, 5]);
  });

  it('should handle a callback that always returns true', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const callback = (x) => true;

    const result = takeUntil(inputArray, callback);

    assert.deepEqual(result, []);
  });

  it('should not modify the original array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const callback = (x) => x >= 4;

    const result = takeUntil(inputArray, callback);

   assert.deepEqual(inputArray, [1, 2, 3, 4, 5]);
  });

  // Add more test cases as needed
});