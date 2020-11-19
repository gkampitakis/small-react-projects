import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home';


describe('Home', () => {
  it('Should render correctly', () => {
    const { baseElement } = render(<Home />, { wrapper: MemoryRouter });

    expect(baseElement).toMatchSnapshot();
  });
});
