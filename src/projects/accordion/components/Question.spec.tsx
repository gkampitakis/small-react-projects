import React from 'react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Question from './Question';


describe('Question', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Question data={{ info: 'mockInfo', title: 'mockTitle' }} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should show info', () => {
    const { baseElement } = render(<Question data={{ info: 'mockInfo', title: 'mockTitle' }} />);

    userEvent.click(screen.getByTestId('show-btn'));

    expect(baseElement).toMatchSnapshot();
  });
});
