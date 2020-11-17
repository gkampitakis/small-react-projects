import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../NotFound';


describe('NotFound', () => {
  it('Should render correctly', () => {
    const { baseElement } = render(<NotFound />, { wrapper: MemoryRouter });

    expect(baseElement).toMatchSnapshot();
  });
});
