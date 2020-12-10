import React from 'react';
import { FetchMock } from 'jest-fetch-mock/types';
import { screen, render, waitForElementToBeRemoved, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Wrapper from './Wrapper';


const fetchMock = (fetch as FetchMock);

const mockData = [
  {
    id: 0,
    img: 'mockImg0',
    title: 'mockTitle0',
    price: 100,
    amount: 2
  },
  {
    id: 1,
    img: 'mockImg1',
    title: 'mockTitle1',
    price: 170,
    amount: 1
  }
  , {
    id: 2,
    img: 'mockImg2',
    title: 'mockTitle2',
    price: 150,
    amount: 1
  }
];

describe('Cart', () => {

  beforeAll(fetchMock.enableMocks);
  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockResponseOnce(JSON.stringify(mockData));
  });

  it('Should render correctly loading', async () => {
    await act(async () => {
      const { baseElement } = render(<Wrapper />);

      expect(baseElement).toMatchSnapshot();
    });
  });

  it('Should render correctly after loaded', async () => {
    const { baseElement } = render(<Wrapper />);

    await waitForElementToBeRemoved(screen.getByText(/Loading/i));

    expect(baseElement).toMatchSnapshot();
  });

  it('Should clear cart', async () => {
    const { baseElement } = render(<Wrapper />);

    await waitForElementToBeRemoved(screen.getByText(/Loading/i));

    userEvent.click(screen.getByText(/clear cart/i));

    expect(baseElement).toMatchSnapshot();
  });

  it('Should change amount and cart total', async () => {
    const { baseElement } = render(<Wrapper />);

    await waitForElementToBeRemoved(screen.getByText(/Loading/i));

    const increaseBtn = screen.getAllByRole('button', { name: /increase/i });
    const decreaseBtn = screen.getAllByRole('button', { name: /decrease/i });
    const removeBtn = screen.getAllByRole('button', { name: /remove/i });

    userEvent.click(increaseBtn[0]);
    userEvent.click(decreaseBtn[1]);
    userEvent.click(removeBtn[2]);
    expect(baseElement).toMatchSnapshot();
  });
});
