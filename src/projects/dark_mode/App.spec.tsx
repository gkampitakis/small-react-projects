import React from 'react';
import { screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import userEvent from '@testing-library/user-event';


describe('Dark Mode', () => {
  it('Should render correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should set lightTheme', () => {
    render(<App />);

    expect(localStorage.getItem('dark-mode')).toBe(JSON.stringify('dark_theme'));
    userEvent.click(screen.getByText(/toggle/i));
    expect(localStorage.getItem('dark-mode')).toBe(JSON.stringify('light_theme'));
  });
});
