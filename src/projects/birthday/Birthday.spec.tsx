import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Birthday from './Birthday';


describe('Birthday', () => {

  it('Should render correctly', () => {
    render(<Birthday />);

    const domElement = screen.queryByText(/Birthdays today/i);
    const buttonElement = screen.queryByText(/clear all/i);
    const listElements = screen.getAllByText(/years/i);

    expect(domElement).toBeTruthy();
    expect(buttonElement).toBeTruthy();
    expect(domElement?.innerHTML.includes('0')).toBeFalsy();
    expect(listElements.length > 0).toBeTruthy();
  });

  it('Should clear list', () => {
    render(<Birthday />);

    userEvent.click(screen.getByText(/clear all/i));

    const domElement = screen.queryByText(/0 Birthdays today/i);
    const listElements = screen.queryByText(/years/i);

    expect(domElement).toBeTruthy();
    expect(listElements).toBeFalsy();
  });
});
