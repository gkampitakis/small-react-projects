import React, { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch';
import { TourI } from './components/interface';
import Loading from './components/Loading';
import Error from './components/Error';
import Tour from './components/Tour';
import './index.css';

const TOURS_DATA = 'https://course-api.com/react-tours-project';

export default function Tours () {
  const [data, loading, error] = useFetch(TOURS_DATA);
  const [tours, setTours] = useState<TourI[]>([]);

  useEffect(() => {
    setTours(data as TourI[]);
  }, [data])

  return (
    <main>
      {
        loading && <Loading /> ||
        error && <Error error={error} /> ||
        tours &&
        <>
          <div className="title">
            <h2>our tours</h2>
            <div className="underline"></div>
          </div>
          {tours.map(tour => (
            <Tour key={tour.id} data={tour} />
          ))
          }
        </>
      }
    </main>
  )
}
