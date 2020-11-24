import React, { useRef } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { useOnClickOutside } from '../';



describe('useOnClickOutside', () => {
  const handlerSpy = jest.fn();

  function Test () {
    const el = useRef<any>(null);
    useOnClickOutside(el, handlerSpy);

    return (
      <>
        <div ref={el} data-testid="mock-div">Test</div>
        <div data-testid="click-outside">Click Outside</div>
      </>
    );
  }

  beforeEach(() => {
    handlerSpy.mockClear();
  });

  it('Should trigger handler', () => {
    render(<Test />);

    fireEvent.mouseDown(screen.getByTestId("click-outside"));
    fireEvent.touchStart(screen.getByTestId("click-outside"));

    expect(handlerSpy).toHaveBeenCalledTimes(2);
  });

  it('Should not trigger handler', () => {
    render(<Test />);

    fireEvent.mouseDown(screen.getByTestId("mock-div"));
    fireEvent.touchStart(screen.getByTestId("mock-div"));

    expect(handlerSpy).toHaveBeenCalledTimes(0);
  });
});
