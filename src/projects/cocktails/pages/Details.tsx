import React, { ReactElement, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../../../hooks';


const URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

interface CocktailDetails {
  ingredients: string[];
  name: string;
  image: string;
  info: string;
  category: string;
  glass: string;
  instructions: string;
}

export default function Details (): ReactElement {
  const { id } = useParams<{ id: string }>();
  const [cocktail, setCocktail] = useState<CocktailDetails | undefined>(undefined);
  const [data, loading, _, error] = useFetch<any>(`${URL}${id}`);
  //FIXME: handle error

  useEffect(() => {
    if (data?.drinks[0]) {
      const { // FIXME: this naive waive of pulling ingredients from here
        strDrink,
        strDrinkThumb,
        strAlcoholic,
        strCategory,
        strGlass,
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = data.drinks[0];

      setCocktail({
        name: strDrink,
        image: strDrinkThumb,
        info: strAlcoholic,
        category: strCategory,
        glass: strGlass,
        instructions: strInstructions,
        ingredients: [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5
        ]
      });
    }
  }, [data]);

  if (loading) { //FIXME:
    return <h2>Loading</h2>;
  }

  if (!cocktail) { //FIXME:
    return <h2>Cocktail details not found</h2>;
  }

  return (
    <section className="cocktail-section">
      <Link to="/cocktails">Back Home</Link>
      <h2 className="title">{cocktail.name}</h2>
      <div className="drink">
        <img src={cocktail.image} alt={cocktail.image} />
        <div className="details">
          <p>
            <span className='drink-data'>name :</span> {cocktail.name}
          </p>
          <p>
            <span className='drink-data'>category :</span> {cocktail.category}
          </p>
          <p>
            <span className='drink-data'>info :</span> {cocktail.info}
          </p>
          <p>
            <span className='drink-data'>glass :</span> {cocktail.glass}
          </p>
          <p>
            <span className='drink-data'>instructions :</span> {cocktail.instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {cocktail.ingredients.map((item, index) => {
              return item ? <span key={index}> {item}</span> : null
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
