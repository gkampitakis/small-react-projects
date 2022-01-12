import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GroceryBud from './GroceryBud';

function setMockStorageData() {
  localStorage.setItem(
    'groceryList',
    JSON.stringify([
      { title: 'mockItem1', id: 1 },
      { title: 'mockItem2', id: 2 }
    ])
  );
}

describe('GroceryBud', () => {
  it('Should load correctly', () => {
    const tree = renderer.create(<GroceryBud />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should render data from localstorage', () => {
    setMockStorageData();

    const tree = renderer.create(<GroceryBud />).toJSON();

    expect(tree).toMatchSnapshot();
    localStorage.clear();
  });

  it('Should clear items', () => {
    setMockStorageData();
    const { baseElement } = render(<GroceryBud />);

    userEvent.click(screen.getByText('clear items'));

    expect(baseElement).toMatchSnapshot();
    localStorage.clear();
  });

  it('Should remove one item', () => {
    setMockStorageData();
    const { baseElement } = render(<GroceryBud />);

    userEvent.click(screen.getByTestId('delete-btn-1'));

    expect(baseElement).toMatchSnapshot();
    localStorage.clear();
  });

  it('Should edit one item', () => {
    setMockStorageData();
    const { baseElement } = render(<GroceryBud />);

    userEvent.click(screen.getByTestId('edit-btn-1'));
    const input = screen.getByPlaceholderText('e.g. eggs');

    fireEvent.change(input, { target: { value: 'testItem' } });
    userEvent.click(screen.getByText('edit'));

    expect(baseElement).toMatchSnapshot();
    localStorage.clear();
  });

  it('Should add one item', () => {
    jest.spyOn(global, 'Date').mockImplementation(
      () =>
        ({
          getTime: () => ({ toString: () => '1' })
        } as unknown as string)
    );

    const { baseElement } = render(<GroceryBud />);

    const input = screen.getByPlaceholderText('e.g. eggs');

    fireEvent.change(input, { target: { value: 'testItem' } });
    userEvent.click(screen.getByText('submit'));

    expect(baseElement).toMatchSnapshot();
  });

  it('Should ignore click if no value', () => {
    const { baseElement } = render(<GroceryBud />);

    userEvent.click(screen.getByText('submit'));
    expect(baseElement).toMatchSnapshot();
  });
});
