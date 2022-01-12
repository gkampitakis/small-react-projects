import React, { ReactElement } from 'react';
import ReviewCardProps from './interface';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

interface controls {
  next: () => void;
  previous: () => void;
  random: () => void;
}

export default function ReviewCard({
  data,
  controls
}: {
  data: ReviewCardProps;
  controls: controls;
}): ReactElement {
  return (
    <article className="review-card">
      <div className="img-container">
        <img src={data.image} alt={`${data.name}'s Avatar`} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{data.name}</h4>
      <p className="job">{data.job}</p>
      <p className="info">{data.text}</p>
      <div className="btn-container">
        <button
          data-testid="prev-btn"
          className="prev-btn"
          onClick={controls.previous}
        >
          <FaChevronLeft />
        </button>
        <button
          data-testid="next-btn"
          className="next-btn"
          onClick={controls.next}
        >
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={controls.random}>
        surprise me
      </button>
    </article>
  );
}
