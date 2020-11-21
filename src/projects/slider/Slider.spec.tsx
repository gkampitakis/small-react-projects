import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Slider from './Slider';
import data from './data';


describe('Slider', () => {
  it('Should render correctly', () => {
    const tree = renderer
      .create(<Slider />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should render next review', () => {
    const { baseElement } = render(<Slider />);

    userEvent.click(screen.getByTestId('next-btn'));

    expect(baseElement).toMatchSnapshot();
  });

  it('Should render previous review', () => {
    const { baseElement } = render(<Slider />);

    userEvent.click(screen.getByTestId('prev-btn'));

    expect(baseElement).toMatchSnapshot();
  });

  it('Should circle through Slider', () => {
    const { baseElement } = render(<Slider />);
    const items = data.length;

    for (let i = 0; i < items; i++) {
      userEvent.click(screen.getByTestId('next-btn'));
    }

    for (let i = 0; i < items; i++) {
      userEvent.click(screen.getByTestId('prev-btn'));
    }

    expect(baseElement).toMatchSnapshot();
  });

});
