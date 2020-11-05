import React, { useState } from 'react';
import ReviewCard from './components/ReviewCard';
import './index.css';
import seedData from './data';

export default function Reviews () {
  const [index, setIndex] = useState(0);

  function next () {
    if (index + 1 >= seedData.length) {
      return setIndex(0);
    }
    setIndex(i => i + 1);
  }

  function previous () {
    if (index - 1 < 0) {
      return setIndex(seedData.length - 1);
    }
    setIndex(i => i - 1);
  }

  function random () {
    const randomIdx = Math.floor(Math.random() * seedData.length);
    if (randomIdx === index) return next();
    setIndex(randomIdx);
  }

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <ReviewCard controls={{ next, previous, random }} data={seedData[index]} />
      </section>
    </main>
  )
}
