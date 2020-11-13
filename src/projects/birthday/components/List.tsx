import React, { Fragment, ReactElement } from 'react';


interface ListProps {
  data: {
    id: number;
    name: string;
    age: number;
    image: string;
  }[];
}


export default function List ({ data }: ListProps): ReactElement {
  return (
    <Fragment>
      {data.map(el => (
        <article key={el.id} className="person">
          <img src={el.image} alt={`${el.name}'s Avatar`} />
          <div>
            <h4>{el.name}</h4>
            <p>{el.age} years</p>
          </div>
        </article>
      ))}
    </Fragment>
  );
}
