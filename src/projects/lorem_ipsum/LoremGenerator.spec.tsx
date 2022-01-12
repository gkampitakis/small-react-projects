import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoremGenerator from './LoremGenerator';

describe('LoremGenerator', () => {
  it('Should render correctly', () => {
    const tree = renderer.create(<LoremGenerator />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should show alert for wrong input', () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation();
    render(<LoremGenerator />);

    const input = screen.getByLabelText('Paragraphs:');

    fireEvent.change(input, { target: { value: -1 } });

    userEvent.click(screen.getByText('generate'));
    expect(alertSpy).toHaveBeenCalledWith('Please provide correct input');
  });

  it('Should render ipsum paragraphs', () => {
    const { baseElement } = render(<LoremGenerator />);

    const input = screen.getByLabelText('Paragraphs:');

    fireEvent.change(input, { target: { value: 5 } });

    userEvent.click(screen.getByText('generate'));

    expect(baseElement).toMatchSnapshot();
  });

  it('Should render 9 paragraphs at most', () => {
    const { baseElement } = render(<LoremGenerator />);

    const input = screen.getByLabelText('Paragraphs:');

    fireEvent.change(input, { target: { value: 20 } });

    userEvent.click(screen.getByText('generate'));

    expect(baseElement).toMatchSnapshot();
  });
});
