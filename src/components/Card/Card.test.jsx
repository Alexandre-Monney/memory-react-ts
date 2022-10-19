import { Card } from './Card';
import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

const card = {
  id: 1,
  image: 'test',
  matched: false,
  name: 'testing',
};

const flippedDefault = false;

const disableFlip = false;

const makeTest = (flipped = flippedDefault) => {
  return render(<Card card={card} flipped={flipped} disableFlip={disableFlip} />);
};

describe('<Card /> component', () => {
  test('Should render two cards with img', () => {
    const { container } = makeTest({});
    const test = [...container.querySelectorAll('img')].map((e) => e.className);
    expect(test[0]).toContain('card-front');
    expect(test[1]).toContain('card-back');
  });

  test('Should add the flipped class, if flipped is true', () => {
    const { container } = makeTest({ flipped: true });
    const testFlipped = container.querySelector('.flipped');
    expect(testFlipped).not.toBe(null);
  });
});
