import React from 'react';
import { render, screen } from '@testing-library/react';
import Tour from './Tour';
import userEvent from '@testing-library/user-event';
import { info } from 'console';

describe('Tour', () => {

  it('Should render correctly', () => {
    const data = {
      id: '1',
      image: 'string',
      name: 'mockName',
      info: 'data',
      price: '12345'
    };
    const removeTour = () => { void (0) };

    render(<Tour data={data} removeTour={removeTour} />);

    const imageElmnt = screen.getByAltText(/mockName/i);
    const nameElmnt = screen.getByText(/mockName/i);
    const priceElmnt = screen.getByText(/12345/i);
    const infoElmnt = screen.getByText(/data/i);
    const btnElmnt = screen.getByText(/not interested/i);

    expect(imageElmnt).toBeTruthy();
    expect(nameElmnt).toBeTruthy();
    expect(priceElmnt).toBeTruthy();
    expect(infoElmnt).toBeTruthy();
    expect(btnElmnt).toBeTruthy();
  });

  it('Should trim info string if bigger than 200 chars', () => {
    const data = {
      id: '1',
      image: 'string',
      name: 'mockName',
      info:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac blandit augue, in auctor dolor. 
      Integer tempor, libero eu pellentesque rutrum, lorem ante varius elit, eu aliquam magna massa sit amet metus. In hac habitasse platea dictumst. Ut purus orci, sollicitudin et efficitur pretium, viverra suscipit velit. 
      Ut vehicula vulputate ex, aliquam venenatis felis.`,
      price: '12345'
    };
    const removeTour = () => { void (0) };

    render(<Tour data={data} removeTour={removeTour} />);

    const infoElement = screen.getByText(/Lorem ipsum /i);
    const moreButton = screen.getByText(/read more/i);

    expect(infoElement.innerHTML.length < 380).toBeTruthy();
    userEvent.click(moreButton);

    expect(screen.getByText(/show less/i)).toBeTruthy();
    expect(infoElement.innerHTML.length >= 380).toBeTruthy();
  });

  it('Should invoke passed function on button click', () => {
    const data = {
      id: '1',
      image: 'string',
      name: 'mockName',
      info: 'data',
      price: '12345'
    };
    const removeTour = jest.fn();

    render(<Tour data={data} removeTour={removeTour} />);
    
    const btnElmnt = screen.getByText(/not interested/i);
    userEvent.click(btnElmnt);

    expect(removeTour).toHaveBeenCalledTimes(1);
  });
})

