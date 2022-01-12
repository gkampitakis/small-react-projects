import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Menu from './Menu';

describe('Menu', () => {
  it('Should render correctly', () => {
    const tree = renderer.create(<Menu />);

    expect(tree).toMatchSnapshot();
  });

  it('Should change tab', () => {
    const { baseElement } = render(<Menu />);

    userEvent.click(screen.getByText('Lunch'));

    expect(baseElement).toMatchSnapshot();
  });
});
