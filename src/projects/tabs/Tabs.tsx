import React, { useState, ReactElement } from 'react';
import { useBodyStyles } from '../../hooks/useBodyStyles';
import { useFetch } from '../../hooks/useFetch';
import Details from './components/Details';
import Tab from './components/Tab';
import Error from '../../components/Error';
import './index.scss';

const DATA_URL = 'https://course-api.com/react-tabs-project';

type dataSchema = {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}[];


export default function Tabs (): ReactElement {
  useBodyStyles({
    background: 'hsl(210, 36%, 96%)',
    color: 'hsl(209, 61%, 16%)'
  });
  const [data, loading, _, error] = useFetch<dataSchema>(DATA_URL);
  const [tab, setTab] = useState(0);

  return (
    <main className="tabs_project">
      <div className="container">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
      </div>
      {loading && <h2 className="loading">Loading...</h2>}
      {error && <Error message={error} />}
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
  );
}
