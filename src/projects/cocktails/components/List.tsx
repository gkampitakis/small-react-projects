import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { CocktailI } from '../context';

interface ListProps {
  items: CocktailI[];
}

export default function List ({ items }: ListProps): ReactElement {
  if (!items.length) {
    return (
      <h2 className="title">no cocktails match your search</h2>
    );
  }

  return (
    <section className="cocktail-list">
      <h2 className="title">Cocktails</h2>
      <div className="cocktails-center">
        {items.map((c) =>
          <Cocktail key={c.id} {...c} />
        )}
      </div>
    </section>
  );
}

function Cocktail ({ glass, id, image, info, name }: CocktailI): ReactElement {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktails/details/${id}`} className="btn">
          details
        </Link>
      </div>
    </article>
  );
}
