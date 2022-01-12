import React from 'react';
import renderer from 'react-test-renderer';
import Accordion from './Accordion';

describe('Accordion', () => {
  it('Should render correctly', () => {
    const tree = renderer.create(<Accordion />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
