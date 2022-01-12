import React from 'react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Reviews from './Reviews';
import data from './data';

describe('Reviews', () => {
  it('Should render correctly', () => {
    const tree = renderer.create(<Reviews />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should render next review', () => {
    const { baseElement } = render(<Reviews />);

    userEvent.click(screen.getByTestId('next-btn'));

    expect(baseElement).toMatchSnapshot();
  });

  it('Should render previous review', () => {
    const { baseElement } = render(<Reviews />);

    userEvent.click(screen.getByTestId('prev-btn'));

    expect(baseElement).toMatchSnapshot();
  });

  it('Should circle through reviews', () => {
    const { baseElement } = render(<Reviews />);
    const items = data.length;

    for (let i = 0; i < items; i++) {
      userEvent.click(screen.getByTestId('next-btn'));
    }

    for (let i = 0; i < items; i++) {
      userEvent.click(screen.getByTestId('prev-btn'));
    }

    expect(baseElement).toMatchSnapshot();
  });

  it('Should show a random review', () => {
    render(<Reviews />);

    const image = screen.getByAltText(/'s Avatar/i).outerHTML;
    userEvent.click(screen.getByText(/surprise me/i));

    const updatedImage = screen.getByAltText(/'s Avatar/i).outerHTML;

    expect(image).not.toBe(updatedImage);
  });
});
