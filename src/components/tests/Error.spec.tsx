import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorComponent from '../Error';

describe('Error Component', () => {
  it('Should render correctly', () => {
    render(<ErrorComponent message={'Mock Message'} />);

    const img = screen.getByAltText('Error page image');
    const msg = screen.getByText('Mock Message');

    expect(img).toBeTruthy();
    expect(msg).toBeTruthy();
  });

  it('Should render error message and print message to console', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => { void (0) });
    const error = Error('Mock Error')
    render(<ErrorComponent error={error} />);

    const errorMsg = screen.getByText('You can check console for more information');
    
    expect(errorMsg).toBeTruthy();
    expect(logSpy).toHaveBeenCalledWith(error);
  });
});
