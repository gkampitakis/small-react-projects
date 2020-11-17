import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../Loading';


describe('Loading', () => {
  it('Should load correctly', () => {
    const tree = renderer
      .create(<Loading />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
