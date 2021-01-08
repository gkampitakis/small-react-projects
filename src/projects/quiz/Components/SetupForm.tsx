import React, { ReactElement } from 'react';
import { useGlobalContext } from '../context';

export default function SetupForm (): ReactElement {
  const { error, quiz, setupFormOnChange, setupFormOnSubmit } = useGlobalContext();

  return (
    <main className="quiz_project">
      <form className="quiz setup_form">
        <h2>Setup Quiz</h2>
        <div className="form-control">
          <label htmlFor="amount">Number of questions</label>
          <input
            autoComplete="off"
            className="form-input"
            type="number"
            name="amount"
            id="amount"
            value={quiz.amount}
            onChange={setupFormOnChange}
            min={1}
            max={50}
          />
        </div>
        <div className="form-control">
          <label htmlFor="category">category</label>
          <select name="category" id="category" className="form-input" value={quiz.category} onChange={setupFormOnChange}>
            <option value="sports">sports</option>
            <option value="history">history</option>
            <option value="politics">politics</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="difficulty">Select Difficulty</label>
          <select name="difficulty" id="difficulty" className="form-input" value={quiz.difficulty} onChange={setupFormOnChange}>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        {error && (<p className='error'>
          Can&lsquo;t generate questions, please try different options
        </p>)}
        <button onClick={setupFormOnSubmit} type="submit">Start</button>
      </form>
    </main>
  );
}
