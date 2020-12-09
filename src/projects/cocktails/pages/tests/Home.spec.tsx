import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../Home';


jest.mock('../../context', () => ({
  useGlobalContext: jest.fn()
}));

import { useGlobalContext } from '../../context';
import { MemoryRouter } from 'react-router-dom';
const useGlobalContextMock = useGlobalContext as jest.Mock;

describe('Home', () => {

  beforeEach(jest.resetAllMocks);

  it('Should render correctly', () => {
    useGlobalContextMock.mockImplementation(() => ({
      loading: false,
      error: false,
      cocktailList: []
    }));

    const tree = renderer
      .create(<Home />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should render loading prompt', () => {
    useGlobalContextMock.mockImplementation(() => ({
      loading: true,
      error: false,
      cocktailList: []
    }));

    const { baseElement } = render(<Home />);

    expect(baseElement).toMatchSnapshot();
  });

  it('Should not render loading prompt', () => {
    useGlobalContextMock.mockImplementation(() => ({
      loading: true,
      error: false,
      cocktailList: [{
        id: 0,
        name: 'mockCocktail',
        info: 'mockInfo',
        glass: 'mockGlass',
        image: 'mockImg'
      }]
    }));
    const { baseElement } = render(<Home />, { wrapper: MemoryRouter });

    expect(baseElement).toMatchSnapshot();
  });

  it('Should render error prompt', () => {
    useGlobalContextMock.mockImplementation(() => ({
      loading: false,
      error: 'MockError',
      cocktailList: []
    }));

    const { baseElement } = render(<Home />, { wrapper: MemoryRouter });

    expect(baseElement).toMatchSnapshot();
  });
});
