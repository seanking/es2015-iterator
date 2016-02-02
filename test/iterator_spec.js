'use strict';

// const assert = require('chai').assert;

describe('ES2015 Iterators ', () => {
  it('should iterate over an array', () => {
    const arr = [1, 2, 3];

    for (const i of arr) {
      console.log(i);
    }
  });
});
