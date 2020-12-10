import React from 'react';
import { FetchMock } from 'jest-fetch-mock/types';
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup, waitFor, waitForElementToBeRemoved, act } from '@testing-library/react';
import Tours from './Tours';


const fetchMock = (fetch as FetchMock);

describe('Tours', () => {

  afterEach(cleanup);
  beforeEach(fetchMock.resetMocks);

  it('Should start with loading', async () => {
    fetchMock.enableMocks();
    fetchMock.mockResponseOnce(JSON.stringify(
      [{
        id: "rec6d6T3q5EBIdCfD",
        name: "Best of Paris in 7 Days Tour",
        info: "mockInfo",
        image: "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
        price: "1,995"
      }]
    ));

    await act(async () => {
      render(<Tours />);

      const loading = screen.getByText(/Loading/i);

      expect(loading).toBeTruthy();
    });
  });

  it('Should render error', (done) => {
    fetchMock.enableMocks();

    fetchMock.mockRejectOnce(() => Promise.reject('Mock Error'));
    render(<Tours />);

    const loading = screen.getByText(/Loading/i);

    expect(loading).toBeTruthy();

    waitFor(() => {
      const errorMessage = screen.queryByText(/Mock Error/i);
      expect(errorMessage).toBeTruthy();
      done();
    });
  });

  it('Should render tours list', async () => {
    fetchMock.enableMocks();
    fetchMock.mockResponseOnce(JSON.stringify(
      [{
        id: "rec6d6T3q5EBIdCfD",
        name: "Best of Paris in 7 Days Tour",
        info: "mockInfo",
        image: "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
        price: "1,995"
      }]
    ));

    render(<Tours />);

    await waitForElementToBeRemoved(screen.getByText(/Loading/i));

    const toursElements = screen.getAllByText(/not interested/i);
    expect(toursElements.length > 0).toBeTruthy();
  });

  it('Should remove tour from list', async () => {
    fetchMock.enableMocks();
    fetchMock.mockResponseOnce(JSON.stringify(
      [{
        id: "rec6d6T3q5EBIdCfD",
        name: "Best of Paris in 7 Days Tour",
        info: "mockInfo",
        image: "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
        price: "1,995"
      }]
    ));

    render(<Tours />);
    await waitForElementToBeRemoved(screen.getByText(/Loading/i));

    userEvent.click(screen.getByText(/not interested/i));

    const toursElements = screen.queryAllByText(/not interested/i);
    expect(toursElements.length).toBe(0);
  });
})
