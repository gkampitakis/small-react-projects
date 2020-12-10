import React from 'react';
import { render, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../NotFound';


describe('NotFound', () => {
  it('Should render correctly', async () => {
    await act(async () => {
      const { baseElement } = render(<NotFound />, { wrapper: MemoryRouter });

      expect(baseElement).toMatchSnapshot();
    });
  });
});
