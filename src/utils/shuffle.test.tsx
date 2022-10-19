import { describe, test, expect } from 'vitest';
import shuffle from './shuffle';

describe('shuffle function test', () => {
  test('Should render an array', () => {
    const arrayTesting = [1, 2, 3, 4];
    expect(Array.isArray(shuffle(arrayTesting))).toBe(true);
  });
});
