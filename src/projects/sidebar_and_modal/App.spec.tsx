import React from 'react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Should render correctly', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should open modal', () => {
    const { baseElement } = render(<App />);

    userEvent.click(screen.getByText('show modal'));

    expect(baseElement).toMatchSnapshot();
  });
  it('Should open side bar', () => {
    const { baseElement } = render(<App />);

    userEvent.click(screen.getByTestId('open-sidebar'));

    expect(baseElement).toMatchSnapshot();
  });

  it('Should close sidebar on click outside', () => {
    const { baseElement } = render(<App />);

    fireEvent.mouseDown(screen.getByText(/show modal/i));

    expect(baseElement).toMatchSnapshot();
  });
});
