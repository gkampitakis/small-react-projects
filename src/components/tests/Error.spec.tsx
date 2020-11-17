import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import ErrorComponent from '../Error';


describe('Error Component', () => {
  it('Should render correctly', () => {
    const tree = renderer
      .create(<ErrorComponent message={'Mock Message'} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should render error message and print message to console', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => { void (0) });
    const error = Error('Mock Error')
    const { baseElement } = render(<ErrorComponent error={error} />);

    expect(baseElement).toMatchSnapshot();
    expect(logSpy).toHaveBeenCalledWith(error);
  });
});
