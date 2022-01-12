import React from 'react';
import { render, act } from '@testing-library/react';
import Loading from '../Loading';

describe('Loading', () => {
  it('Should load correctly', async () => {
    await act(async () => {
      const { baseElement } = render(<Loading />);

      expect(baseElement).toMatchSnapshot();
    });
  });
});
