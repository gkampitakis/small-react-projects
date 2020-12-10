import React from 'react';
import { render, act, screen, waitForElementToBeRemoved } from '@testing-library/react';
import Details from '../Details';
import { MemoryRouter } from 'react-router-dom';
import { FetchMock } from 'jest-fetch-mock/types';


const fetchMock = (fetch as FetchMock);
const mockData = {
  drinks: [
    {
      strDrink: 'mockDrink',
      strDrinkThumb: 'mockThumb',
      strAlcoholic: 'mockInfo',
      strCategory: 'mockCategory',
      strGlass: 'mockGlass',
      strInstructions: 'mockInstructions',
      strIngredient1: 'mockIngredient1',
      strIngredient2: 'mockIngredient2',
      strIngredient3: 'mockIngredient3',
      strIngredient4: 'mockIngredient4',
    }
  ]
};

describe('Details', () => {
  beforeAll(fetchMock.enableMocks);
  beforeEach(fetchMock.resetMocks);

  it('Should load correctly', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockData));
    await act(async () => {
      const { baseElement } = render(<Details />,
        { wrapper: MemoryRouter });

      expect(baseElement).toMatchSnapshot();
    });
  });

  it('Should load data after loading', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockData));
    const { baseElement } = render(<Details />,
      { wrapper: MemoryRouter });

    await waitForElementToBeRemoved(screen.getByAltText(/Loading/i));

    expect(baseElement).toMatchSnapshot();
  });

  it('Should show message if no cocktails found', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ drinks: [] }));
    const { baseElement } = render(<Details />,
      { wrapper: MemoryRouter });

    await waitForElementToBeRemoved(screen.getByAltText(/Loading/i));

    expect(baseElement).toMatchSnapshot();
  });

  it('Should show error', async () => {
    fetchMock.mockRejectOnce(() => Promise.reject('Mock Error'));

    const { baseElement } = render(<Details />,
      { wrapper: MemoryRouter });

    await waitForElementToBeRemoved(screen.getByAltText(/Loading/i));

    expect(baseElement).toMatchSnapshot();
  });
});
