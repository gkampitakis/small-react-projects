import React, { ReactElement } from 'react';
import List from './List';

interface CardProps {
  data: {
    id: number;
    name: string;
    age: number;
    image: string;
  }[];
  clearFn: () => void;
}

export default function Card({ data, clearFn }: CardProps): ReactElement {
  return (
    <main className="birthday_project">
      <section className="container">
        <h3>{data.length} Birthdays today</h3>
        <List data={data} />
        <button onClick={clearFn}>Clear All</button>
      </section>
    </main>
  );
}
