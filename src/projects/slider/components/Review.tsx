import React, { ReactElement } from 'react';
import { FaQuoteRight } from 'react-icons/fa';


interface ReviewProps {
  className: string;
  data: {
    image: string;
    name: string;
    title: string;
    quote: string;
  };
}


export default function Review ({ data, className }: ReviewProps): ReactElement {
  return (
    <article className={className}>
      <img className="person-img" src={data.image} alt={data.name} />
      <h4>{data.name}</h4>
      <p className="title">{data.title}</p>
      <p className="quote">{data.quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
}
