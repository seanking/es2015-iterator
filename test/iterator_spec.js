'use strict';

const assert = require('chai').assert;

describe('ES2015 Iterators ', () => {
  it('should iterate over an array', () => {
    // Given
    const expectedArr = [1, 2, 3];
    const actualArr = [];

    // When
    for (const i of expectedArr) {
      actualArr.push(i);
    }

    // Then
    assert.deepEqual(actualArr, expectedArr);
  });

  it('should iterate over a string', () => {
    // Given
    const expectedString = 'test';
    let actualStr = '';

    // When
    for (const i of expectedString) {
      actualStr += i;
    }

    // Then
    assert.equal(actualStr, expectedString);
  });

  it('should iterate over a map', () => {
    // Given
    const expectedMap = new Map([['one', 1], ['two', 2]]);
    const actualMap = new Map();

    // When
    for (const i of expectedMap) {
      actualMap.set(i);
    }

    // Then
    assert.deepEqual(actualMap, expectedMap);
  });

  it('should iterate over a set', () => {
    // Given
    const expectedSet = new Set([1, 2]);
    const actualSet = new Set();

    // When
    for (const i of expectedSet) {
      actualSet.add(i);
    }

    // Then
    assert.deepEqual(actualSet, expectedSet);
  });

  it('should print iterator contents', () => {
    // Given
    const set = new Set([1, 2, 3]);

    // When
    const iterator = set[Symbol.iterator]();

    // Then
    assert.deepEqual(iterator.next(), { value: 1, done: false });
    assert.deepEqual(iterator.next(), { value: 2, done: false });
    assert.deepEqual(iterator.next(), { value: 3, done: false });
    assert.deepEqual(iterator.next(), { value: undefined, done: true });
  });


  it('should iterate over over custom aggregate', () => {
    // Given
    const agg = new Aggregate();
    const values = [];

    // When
    for (const i of agg) {
      values.push(i);
    }

    // Then
    assert.deepEqual(values, agg.values);
  });
});

class Aggregate {
  constructor() {
    this.values = ['one', 'two', 'three'];
  }

  [Symbol.iterator]() { // implements iterable protocol
    let index = 0;
    return {
      next: () => { // implements iterator protocol
        const value = this.values[index];
        const done = index >= this.values.length;
        index++;
        return { value, done };
      },
    };
  }
}
