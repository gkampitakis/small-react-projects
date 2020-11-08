import React, { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import './index.css';
import Details from './components/Details';
import Tab from './components/Tab';

const DATA_URL = 'https://course-api.com/react-tabs-project';

type dataSchema = {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}[];

export default function Tabs () {
  const [data, loading, _, error] = useFetch<dataSchema>(DATA_URL);
  const [tab, setTab] = useState(0);

  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
      </div>
      {loading && <h2 className="loading">Loading...</h2>}
      {error && <h2>An error ocurred</h2>}
      {
        data &&
        <section className="main-content">
          <section className="tabs-container">
            {
              data.map(({ company, id }, idx) => (
                <Tab key={id} selected={idx === tab} title={company} handler={() => setTab(idx)} />
              ))
            }
          </section>
          <Details data={data[tab]} />
        </section>
      }
    </main>
  )
}
