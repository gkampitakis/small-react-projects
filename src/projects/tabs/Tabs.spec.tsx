import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { FetchMock } from 'jest-fetch-mock/types';
import Tab from './components/Tab';
import Details from './components/Details';
import Tabs from './Tabs';


const fetchMock = (fetch as FetchMock);

describe('Tabs', () => {
  describe('Tabs', () => {

    beforeEach(fetchMock.resetMocks);

    it('Should render correctly', async () => {
      fetchMock.enableMocks();
      fetchMock.mockResponseOnce(JSON.stringify(
        [{
          id: 'rec6d6T3q5EBIdCfD',
          order: 1,
          title: 'mockTitle',
          dates: 'mockDate',
          duties: ['1', '2', '3'],
          company: 'mockCompany'
        }]
      ));
      const { baseElement } = render(<Tabs />);

      await waitForElementToBeRemoved(screen.getByText(/Loading/i));

      expect(baseElement).toMatchSnapshot();
    });

    it('Should render error', async () => {
      fetchMock.enableMocks();
      fetchMock.mockRejectOnce(() => Promise.reject('Mock Error'));

      const { baseElement } = render(<Tabs />);
      await waitForElementToBeRemoved(screen.getByText(/Loading/i));

      expect(baseElement).toMatchSnapshot();
    });

    it('Should change tab', async () => {
      fetchMock.enableMocks();
      fetchMock.mockResponseOnce(JSON.stringify(
        [{
          id: 'mockId1',
          order: 1,
          title: 'mockTitle',
          dates: 'mockDate',
          duties: ['1', '2', '3'],
          company: 'mockCompany'
        }, {
          id: 'mockId2',
          order: 1,
          title: 'mockTitle2',
          dates: 'mockDate2',
          duties: ['11', '22', '33'],
          company: 'mockCompany2'
        }]
      ));
      const { baseElement } = render(<Tabs />);
      await waitForElementToBeRemoved(screen.getByText(/Loading/i));

      userEvent.click(screen.getByText('mockCompany2'));

      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('Tab', () => {
    it('Should render a selected Tab', () => {
      const tree = renderer
        .create(<Tab handler={() => void (0)} selected title='mockTitle' />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('Should render an unselected Tab', () => {
      const tree = renderer
        .create(<Tab handler={() => void (0)} title='mockTitle' />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('Should invoke prop handler', () => {
      const handlerSpy = jest.fn();

      render(<Tab handler={handlerSpy} title='mockTitle' />);
      userEvent.click(screen.getByText(/mockTitle/i));

      expect(handlerSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('Details', () => {
    it('Should render correctly', () => {
      const data = {
        id: '12345',
        order: 1,
        title: 'mockTitle',
        dates: 'mockDate',
        duties: ['1', '2', '3'],
        company: 'mockCompany'
      };
      const tree = renderer
        .create(<Details data={data} />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
