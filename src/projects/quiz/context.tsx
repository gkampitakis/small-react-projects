import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
  ChangeEvent
} from 'react';

interface QuizSettings {
  amount: number;
  category: 'sports' | 'history' | 'politics';
  difficulty: 'easy' | 'medium' | 'hard';
}

type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

enum CategoryCodes {
  sports = 21,
  history,
  politics
}

const API_ENDPOINT = 'https://opentdb.com/api.php?';
const AppContext = createContext<{
  waiting: boolean;
  error: Error | null;
  loading: boolean;
  quiz: QuizSettings;
  questions: Question[];
  isModalOpen: boolean;
  currentQ: number;
  correct: number;
  openModal: () => void;
  checkAnswer: (value: any) => void;
  nextQuestion: () => void;
  closeModal: () => void;
  setupFormOnChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  setupFormOnSubmit: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}>({} as any);

const AppProvider = ({
  children
}: {
  children: ReactElement | ReactElement[];
}): ReactElement => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [error, setError] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [quiz, setQuiz] = useState<QuizSettings>({
    amount: 10,
    category: 'sports',
    difficulty: 'easy'
  });

  function setupFormOnChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { value, name } = e.target;

    setQuiz({ ...quiz, [name]: value });
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setWaiting(true);
    setCorrect(0);
    setIsModalOpen(false);
  }

  function checkAnswer(value: boolean) {
    if (value) {
      setCorrect(oldState => oldState + 1);
    }
    nextQuestion();
  }

  function nextQuestion() {
    setCurrentQ(i => {
      const index = i + 1;
      if (index > questions.length - 1) {
        console.log('open');

        openModal();
        return 0;
      } else {
        return index;
      }
    });
  }

  function setupFormOnSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    const { amount, category, difficulty } = quiz;
    const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${CategoryCodes[category]}&type=multiple`;

    setLoading(true);
    setWaiting(false);

    fetch(url)
      .then(d => d.json())
      .then(d => {
        setQuestions(d.results);
        console.log(d.results);
      })
      .catch(e => {
        setError(e);
        setWaiting(true);
      })
      .finally(() => setLoading(false));
  }

  return (
    <AppContext.Provider
      value={{
        waiting,
        error,
        loading,
        quiz,
        questions,
        isModalOpen,
        currentQ,
        correct,
        nextQuestion,
        checkAnswer,
        closeModal,
        openModal,
        setupFormOnChange,
        setupFormOnSubmit
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { useGlobalContext, AppProvider };
