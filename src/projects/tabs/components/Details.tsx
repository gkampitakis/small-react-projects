import React, { ReactElement } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'


interface DetailsProps {
  data: {
    id: string;
    order: number;
    title: string;
    dates: string;
    duties: string[];
    company: string;
  }
}


export default function Details ({ data }: DetailsProps): ReactElement {
  return (
    <section className="details">
      <header>
        <h3>{data.title}</h3>
        <h4>{data.company}</h4>
        <p className="date">{data.dates}</p>
      </header>
      {
        data.duties.map((d, idx) => (
          <div className="job-desc" key={idx}>
            <FaAngleDoubleRight className="duty-icon" />
            <p>{d}</p>
          </div>
        ))
      }
    </section>
  );
}
