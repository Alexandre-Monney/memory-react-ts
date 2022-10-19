import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home Component Test', () => {
  test('Should render the title all the times', () => {
    render(<Home />, { wrapper: MemoryRouter });
    expect(screen.getByText('Jouez au Memory Game sur le thème de Star Wars !')).toBeDefined();
  });

  test('Should have a button for launching game', () => {
    render(<Home />, { wrapper: MemoryRouter });
    expect(screen.getAllByRole('button')).toBeDefined();
  });
});
