import React, { ReactElement, useState } from 'react'
import { TourI } from './interface';


export default function Tour (
  { data, removeTour }: { data: TourI; removeTour: () => void }
): ReactElement {
  const [more, setMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={data.image} alt={data.name} />
      <footer>
        <div className="tour-info">
          <h4>{data.name}</h4>
          <h4 className="tour-price">{data.price}</h4>
        </div>
        <p>
          {more ? data.info : `${data.info.substring(0, 200)}...`}
          <button onClick={() => setMore(!more)}>{more ? 'show less' : 'read more'}</button>
        </p>
        <button className="delete-btn" onClick={removeTour}>Not interested</button>
      </footer>
    </article>
  );
}
