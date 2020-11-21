import React, { ReactElement } from 'react';
import { useDocTitle, useBodyStyles } from '../../hooks';
import Question from './components/Question';
import data from './data';
import './index.scss';


export default function Accordion (): ReactElement {
  useBodyStyles({
    background: '#4b145b',
    color: 'hsl(209, 61%, 16%)'
  });
  useDocTitle('Accordion');

  return (
    <main className="accordion_project">
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section>
          {data.map(({ id, ...rest }) => (
            <Question key={id} data={rest} />
          ))}
        </section>
      </div>
    </main>
  );
}
