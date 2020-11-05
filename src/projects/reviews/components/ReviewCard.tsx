import React from 'react';
import ReviewCardProps from './interface';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

interface controls {
  next: () => void;
  previous: () => void;
  random: () => void;
}

export default function ReviewCard ({ data, controls }:
  { data: ReviewCardProps; controls: controls }) {

  return (
    <article className="review-card">
      <div className="img-container">
        <img src={data.image} alt={`${data.name}'s Avatar`} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4>{data.name}</h4>
      <p className="job">{data.job}</p>
      <p className="info">
        {data.text}
      </p>
      <div className="btn-container">
        <button className="prev-btn" onClick={controls.previous}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={controls.next}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={controls.random}>
        surprise me
      </button>
    </article>
  )
}
