import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, screen, render } from '@testing-library/react';
import App from './App';


describe('Markdown Preview', () => {
  it('Should render correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should depict changes from input', () => {
    const { baseElement } = render(<App />);

    const input = screen.getByText(/# markdown preview/i);
    fireEvent.change(input, { target: { value: 'test markDown' } });
    
    expect(baseElement);
  });
});
