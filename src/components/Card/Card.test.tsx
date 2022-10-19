import { Card } from './Card';
import { render } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

interface CardType {
  id: number;
  image: string;
  matched: boolean;
  name: string;
}

const card: CardType = {
  id: 1,
  image: 'test',
  matched: false,
  name: 'testing',
};

const flippedDefault: boolean = false;

const disableFlip: boolean = false;

const handleFlip = vi.fn();

const makeTest = (flipped = flippedDefault) => {
  return render(
    <Card card={card} flipped={flipped} disableFlip={disableFlip} handleFlip={handleFlip} />,
  );
};

describe('<Card /> component', () => {
  test('Should render two cards with img', () => {
    const { container } = makeTest();
    const test: any[] = [...container.querySelectorAll('img')].map((e) => e.className);
    expect(test[0]).toContain('card-front');
    expect(test[1]).toContain('card-back');
  });

  test('Should add the flipped class, if flipped is true', () => {
    const { container } = makeTest(true);
    const testFlipped = container.querySelector('.flipped');
    expect(testFlipped).not.toBe(null);
  });
});
