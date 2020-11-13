import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../NotFound';

describe('NotFound', () => {
  it('Should render correctly', () => {
    render(<NotFound />, { wrapper: MemoryRouter });

    const msg = screen.getByText('The page you requested was not found');
    const img = screen.getByAltText('Not found image');

    expect(msg).toBeTruthy();
    expect(img).toBeTruthy();
  });
});
