'use strict';

// const assert = require('chai').assert;

describe('ES2015 Iterators ', () => {
  it('should iterate over an array', () => {
    const arr = [1, 2, 3];

    for (const i of arr) {
      console.log(i);
    }
  });

  it('should iterate over a string', () => {
    const str = 'test';

    for (const i of str) {
      console.log(i);
    }
  });

  it('should iterate over a map', () => {
    const map = new Map([['one', 1], ['two', 2]]);

    for (const i of map) {
      console.log(i);
    }
  });

  it('should iterate over a set', () => {
    const set = new Set([1, 2]);

    for (const i of set) {
      console.log(i);
    }
  });

  it('should print iterator contents', () => {
    const set = new Set([1, 2, 3]);

    const iterator = set[Symbol.iterator]();

    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
  });
});
