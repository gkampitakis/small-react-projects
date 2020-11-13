import React, { ReactElement, useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import people from './data';
import Review from './components/Review';
import './index.scss';


export default function Slider (): ReactElement {
  const [index, setIndex] = useState(0);

  function next () {
    if (index + 1 >= people.length) {
      return setIndex(0);
    }
    setIndex(i => i + 1);
  }

  function previous () {
    if (index - 1 < 0) {
      return setIndex(people.length - 1);
    }
    setIndex(i => i - 1);
  }

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {
          people.map((data, idx) => {

            const { id, ...rest } = data;

            let position = 'nextSlide';
            if (idx === index) {
              position = 'activeSlide';
            }
            if (
              idx === index - 1 ||
              (index === 0 && idx === people.length - 1)
            ) {
              position = 'lastSlide';
            }

            return (
              <Review key={id} data={rest} className={position} />
            )
          })
        }
        <button className="prev" onClick={previous}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={next}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}
