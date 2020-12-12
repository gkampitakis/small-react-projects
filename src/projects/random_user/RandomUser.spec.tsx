import React from 'react';
import { FetchMock } from 'jest-fetch-mock/types';
import { render, screen, act, waitFor, waitForDomChange } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RandomUser from './RandomUser';


const fetchMock = (fetch as FetchMock);

describe('Random User', () => {
  beforeAll(fetchMock.enableMocks);
  beforeEach(fetchMock.resetMocks);

  it('Should render correctly', async () => {
    await act(async () => {
      const { baseElement } = render(<RandomUser />);

      expect(baseElement).toMatchSnapshot();
    });
  });

  it('Should change details displayed', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({
      results: [{
        phone: 'mockPhone',
        email: 'mockEmail',
        picture: { large: 'mockImage' },
        login: { password: 'mockPassword' },
        name: {
          first: 'mockFirst',
          last: 'mockLast'
        },
        dob: {
          age: '26'
        },
        location: {
          street: {
            number: '123',
            name: 'mockStreet'
          }
        }
      }]
    }));

    const { baseElement } = render(<RandomUser />);

    const btn = screen.getByTestId('change-btn');

    await waitFor(() => btn);

    userEvent.hover(screen.getByTestId('email'));

    expect(baseElement).toMatchSnapshot();
  });
});
