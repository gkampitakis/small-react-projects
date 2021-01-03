import React, { ReactElement } from 'react';
import Loading from '../../../components/Loading';
import SetupForm from './SetupForm';
import Modal from './Modal';
import { useGlobalContext } from '../context';

export default function Quiz (): ReactElement {
  const { waiting, loading, questions, currentQ, correct, nextQuestion, checkAnswer } = useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }

  const { incorrect_answers, correct_answer, question } = questions[currentQ];

  const answers = [...incorrect_answers];

  const tempIndex = Math.floor(Math.random() * 4)
  if (tempIndex === 3) {
    answers.push(correct_answer)
  } else {
    answers.push(answers[tempIndex])
    answers[tempIndex] = correct_answer
  }

  return (
    <main className="quiz_project">
      <Modal />
      <section className="quiz">
        <p className="correct-answers">correct answers : {correct}/{currentQ}</p>
        <h2>{question}</h2>
        <div className="btn-container">
          {answers.map((a, i) => <button onClick={() => checkAnswer(correct_answer === a)} className="answer-btn" key={i}>{a}</button>)}
        </div>
        <button className="next-question" onClick={nextQuestion}>
          next question
        </button>
      </section>
    </main>
  );
}
