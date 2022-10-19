import Board from './Board';
import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('Board component', () => {
  test('Should render the board component', () => {
    const { container } = render(<Board />);
    expect(container).toBeInTheDocument();
  });
});
