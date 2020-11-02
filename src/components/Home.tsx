import React, { ChangeEvent } from 'react';
import Error from './Error';

interface HomeProps {
  options: {
    value: string;
    label: string;
  }[];
  loading: boolean;
  error: Error | null;
  Component: any;
  loadComponent: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function Home ({ options, error, Component, loadComponent, loading }: HomeProps) {
  return (
    <div className="home">
      <h1>Welcome to Small React Projects</h1>
      <select
        value={Component ? Component : ''}
        onChange={loadComponent}
      >
        <option value="" disabled>Select a Project to render</option>
        {options.map((({ value, label }, id) => (
          <option key={id} value={value}>{label}</option>
        )))}
      </select>
      <section className="info">
        {error && <Error error={error} />}
        {loading && <h3>Loading ...</h3>}
      </section>
    </div>
  );
}
