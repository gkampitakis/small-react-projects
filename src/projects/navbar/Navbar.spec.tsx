import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';


function resizeWindow (width: number, height: number) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  window.innerWidth = width;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  window.innerHeight = height
  window.dispatchEvent(new Event('resize'))
}

describe('Navbar', () => {
  it('Should render correctly', () => {
    const tree = renderer
      .create(<Navbar />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should render button on small window', () => {
    const { baseElement } = render(<Navbar />);

    resizeWindow(200, 200);

    userEvent.click(screen.getByTestId('open-nvb'));

    expect(baseElement).toMatchSnapshot();
  });
});
