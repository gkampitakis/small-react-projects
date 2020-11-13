import React, { ReactElement, useState } from 'react';
import loremData from './data';
import './index.css';


export default function LoremGenerator (): ReactElement {
  const [count, setCount] = useState('0');
  const [data, setData] = useState<string[]>([]);

  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
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
    <section className="section-center">
      <h3>Tired of boring Lorem Ipsum</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs: </label>
        <input
          type="number"
          name="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {
          data.map((item, idx) =>
            (
              <p key={idx}>{item}</p>
            )
          )
        }
      </article>
    </section>
  )
}
