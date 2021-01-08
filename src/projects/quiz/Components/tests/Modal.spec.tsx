import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Modal from '../Modal';

jest.mock('../../context', () => {
  let isOpen = true;

  return {
    useGlobalContext: () => ({
      closeModal: () => isOpen = !isOpen,
      isModalOpen: isOpen,
      correct: 2,
      questions: ['', '', '']
    })
  };
});

describe('Modal', () => {
  const { useGlobalContext } = jest.requireMock('../../context');

  it('Should render correctly', () => {
    const tree = renderer
      .create(<Modal />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should close modal on button click', () => {
    render(<Modal />);

    userEvent.click(screen.getByText(/play again/i));

    expect(useGlobalContext().isModalOpen).toBe(false);
  });
});
