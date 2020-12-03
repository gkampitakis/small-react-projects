import React from 'react';
import { FetchMock } from 'jest-fetch-mock/types';
import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import Wrapper from './Wrapper';


const fetchMock = (fetch as FetchMock);

describe('Cart', () => {

  beforeEach(fetchMock.disableMocks);

  it('Should render correctly loading', () => {
    const { baseElement } = render(<Wrapper />);

    expect(baseElement).toMatchSnapshot();
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
