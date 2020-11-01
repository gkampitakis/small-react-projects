import React from 'react'
import { TourI } from './interface';

export default function Tour ({ data }: { data: TourI }) {
  return (
    <article className="single-tour">
      <img src={data.image} alt={data.name} />
      <div className="tour-info">
        <h2>{data.name}</h2>
        <h3>{data.info}</h3>
        <h3>{data.price}</h3>
      </div>
    </article>
  )
}
