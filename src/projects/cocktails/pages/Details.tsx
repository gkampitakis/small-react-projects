import React, { ReactElement, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../../../hooks';
import ErrorCmp from '../../../components/Error';
import Loading from '../../../components/Loading';


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
  const [cocktail, setCocktail] = useState<CocktailDetails>({} as any);
  const [data, loading, _, error] = useFetch<any>(`${URL}${id}`);

  function extractDetails (data: any): CocktailDetails {
    const {
      strDrink,
      strDrinkThumb,
      strAlcoholic,
      strCategory,
      strGlass,
      strInstructions,
    } = data.drinks[0];
    const ingredients: string[] = [];

    for (let i = 1; i < 16; i++) {
      const ingredient = data.drinks[0][`strIngredient${i}`];
      if (!ingredient) break;
      ingredients.push(ingredient);
    }

    return {
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      category: strCategory,
      glass: strGlass,
      instructions: strInstructions,
      ingredients
    };
  }

  useEffect(() => {
    if (data?.drinks[0]) {
      setCocktail(extractDetails(data));
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorCmp message={'Error occurred'} />;
  }


  return (
    <section className="cocktail-section">
      <Link to="/cocktails" className="btn">Back Home</Link>
      {!cocktail.name && <h2>Cocktail details not found</h2>}
      {cocktail.name && <>
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
              {cocktail?.ingredients?.map((item, index) => <span key={index}> {item}</span>)}
            </p>
          </div>
        </div>
      </>
      }
    </section>
  );
}
