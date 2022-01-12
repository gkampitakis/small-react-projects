import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quiz from '../Quiz';

jest.mock('../../context', () => {
  let isWaiting = true;
  let isLoading = true;
  let mockError = false;
  const nextSpy = jest.fn();
  const setUpFormOnChangeSpy = jest.fn();
  const setupFormOnSubmitSpy = jest.fn();

  return {
    useGlobalContext: () => ({
      waiting: isWaiting,
      loading: isLoading,
      currentQ: 0,
      correct: 0,
      isModalOpen: false,
      error: mockError,
      quiz: {
        amount: 10,
        category: 'sports',
        difficulty: 'easy'
      },
      nextQuestion: nextSpy,
      setupFormOnChange: setUpFormOnChangeSpy,
      setupFormOnSubmit: (e: Event) => {
        e.preventDefault();
        setupFormOnSubmitSpy();
      },
      checkAnswer: () => true,
      questions: [
        {
          incorrect_answers: ['a', 'a', 'a'],
          correct_answer: 'a',
          question: 'question'
        }
      ]
    }),
    mockWaiting: (value: boolean) => (isWaiting = value),
    mockLoading: (value: boolean) => (isLoading = value),
    nextSpy,
    setupFormOnSubmitSpy,
    setUpFormOnChangeSpy,
    mockError: (value: boolean) => (mockError = value)
  };
});

describe('Quiz', () => {
  const {
    setUpFormOnChangeSpy,
    setupFormOnSubmitSpy,
    mockWaiting,
    mockLoading,
    mockError
  } = jest.requireMock('../../context');

  beforeEach(() => {
    setUpFormOnChangeSpy.mockClear();
    setupFormOnSubmitSpy.mockClear();
    mockWaiting(false);
    mockLoading(false);
    mockError(false);
  });

  it('Should render correctly', () => {
    const tree = renderer.create(<Quiz />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('Setup Form', () => {
    beforeEach(() => {
      mockWaiting(true);
    });

    it('Should call onChange function', () => {
      render(<Quiz />);

      userEvent.selectOptions(screen.getByLabelText(/category/i), 'politics');
      userEvent.selectOptions(screen.getByLabelText(/difficulty/i), 'medium');
      userEvent.type(screen.getByLabelText(/number of questions/i), '2');

      expect(setUpFormOnChangeSpy).toHaveBeenCalledTimes(3);
    });

    it('Should call onSubmit function', () => {
      render(<Quiz />);

      userEvent.click(screen.getByText(/start/i));

      expect(setupFormOnSubmitSpy).toHaveBeenCalledTimes(1);
    });

    it('Should show error message', () => {
      mockError(true);

      const { baseElement } = render(<Quiz />);

      expect(baseElement).toMatchSnapshot();
    });
  });

  it('Should show loading', () => {
    mockLoading(true);

    const { baseElement } = render(<Quiz />);

    expect(baseElement).toMatchSnapshot();
  });
});
