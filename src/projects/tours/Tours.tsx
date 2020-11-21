import React, { useState, useEffect, ReactElement } from 'react';
import { useFetch, useBodyStyles, useDocTitle } from '../../hooks';
import { TourI } from './components/interface';
import Loading from './components/Loading';
import Error from '../../components/Error';
import Tour from './components/Tour';
import './index.scss';


const TOURS_DATA = 'https://course-api.com/react-tours-project';

export default function Tours (): ReactElement {
  useBodyStyles({
    background: 'hsl(210, 36%, 96%)',
    color: 'hsl(209, 61%, 16%)'
  });
  useDocTitle('Tours');
  const [data, loading, refetch, error] = useFetch(TOURS_DATA);
  const [tours, setTours] = useState<TourI[]>([]);

  function removeTour (id: string): void {
    setTours((tours) => tours.filter(tour => tour.id !== id));
  }

  useEffect(() => {
    setTours(data as TourI[]);
  }, [data])

  return (
    <main className="tours">
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      {
        loading && <Loading /> ||
        error && <Error message={error} /> ||
        tours &&
        <>
          {tours.map(tour => (
            <Tour key={tour.id} removeTour={() => removeTour(tour.id)} data={tour} />
          ))
          }
          {
            tours.length === 0 &&
            <button className="refetch-btn" onClick={refetch}>Refresh</button>
          }
        </>
      }
    </main>
  );
}
