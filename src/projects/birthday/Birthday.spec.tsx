import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Birthday from './Birthday';


describe('Birthday', () => {

  it('Should render correctly', () => {
    const tree = renderer
      .create(<Birthday />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should clear list', () => {
    const tree = render(<Birthday />);

    userEvent.click(screen.getByText(/clear all/i));

    expect(tree.baseElement).toMatchSnapshot();
  });
});
