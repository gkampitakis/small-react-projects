import React, { ReactElement, useState } from 'react';
import { useBodyStyles, useDocTitle } from '../../hooks';
import loremData from './data';
import './index.scss';

export default function LoremGenerator(): ReactElement {
  useBodyStyles({
    background: 'hsl(210, 36%, 96%)',
    color: 'hsl(209, 61%, 16%)'
  });
  useDocTitle('Lorem Generator');
  const [count, setCount] = useState('0');
  const [data, setData] = useState<string[]>([]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const countInt = parseInt(count);
    e.preventDefault();

    if (countInt < 0) {
      return alert('Please provide correct input');
    }

    if (countInt > loremData.length)
      return setData(loremData.slice(0, loremData.length));

    setData(loremData.slice(0, countInt));
  }

  return (
    <main className="lorem_ipsum">
      <h3>Tired of boring Lorem Ipsum</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs: </label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={count}
          onChange={e => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {data.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </article>
    </main>
  );
}
