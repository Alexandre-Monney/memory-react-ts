import Board from './Board';
import { render, getByTestId } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('Board component', () => {
  test('Should render the board component', () => {
    const { container } = render(<Board />);
    console.log(container);
    expect(container).toBeInTheDocument();
  });
});
