import React from 'react'
import { TourI } from './interface';

export default function Tour ({ data, removeTour }: { data: TourI; removeTour: () => void }) {
  return (
    <article className="single-tour">
      <img src={data.image} alt={data.name} />
      <footer>
        <div className="tour-info">
          <h2>{data.name}</h2>
          <h3>{data.info}</h3>
          <h3>{data.price}</h3>
        </div>
        <button className="delete-btn" onClick={removeTour}>Not interested</button>
      </footer>
    </article>
  )
}
