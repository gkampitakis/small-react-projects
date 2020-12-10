import React from 'react';
import { FetchMock } from 'jest-fetch-mock/types';
import { BrowserRouter } from 'react-router-dom';
import { render, act } from '@testing-library/react';
import App from './App';

const fetchMock = (fetch as FetchMock);
const mockData = [
  {
    idDrink: 0,
    strDrinkThumb: 'mockImg0',
    strAlcoholic: 'mockInfo0',
    strGlass: 'mockGlass0'
  },
  {
    idDrink: 1,
    strDrinkThumb: 'mockImg1',
    strAlcoholic: 'mockInfo1',
    strGlass: 'mockGlass1'
  },
  {
    idDrink: 2,
    strDrinkThumb: 'mockImg2',
    strAlcoholic: 'mockInfo2',
    strGlass: 'mockGlass2'
  },
  {
    idDrink: 3,
    strDrinkThumb: 'mockImg3',
    strAlcoholic: 'mockInfo3',
    strGlass: 'mockGlass3'
  }
];

describe('Cocktail', () => {

  beforeAll(fetchMock.enableMocks);
  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockResponseOnce(JSON.stringify(mockData));
  });

  it('Should render correctly', async () => {
    await act(async () => {
      const { baseElement } = render(<App />,
        { wrapper: BrowserRouter });

      expect(baseElement).toMatchSnapshot();
    });
  });
});
