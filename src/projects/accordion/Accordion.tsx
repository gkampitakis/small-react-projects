import React from 'react';
import Question from './components/Question';
import data from './data';
import './index.css';

export default function Accordion () {
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section>
          {data.map(({ id, ...rest }) => (
            <Question key={id} data={rest} />
          ))}
        </section>
      </div>
    </main>
  )
}
