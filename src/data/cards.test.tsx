import { describe, test, expect } from 'vitest';
import { newBoard } from './cards';

describe('new Board testing function', () => {
  const arrayTesting = [
    {
      image: 'test',
      matched: false,
      name: 'test',
    },
    {
      image: 'test2',
      matched: false,
      name: 'test2',
    },
  ];
  test('Should render a new array', () => {
    expect(Array.isArray(newBoard(arrayTesting))).toBe(true);
  });
  test('Should have a new id property', () => {
    const testBoard = newBoard(arrayTesting);
    const idProperty = testBoard[0].id;
    expect(idProperty).toBe(1);
  });
});
