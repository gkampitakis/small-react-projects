import React, { ReactElement, useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';


export default function Search (): ReactElement {
  const { searchCocktail, bounceLoading } = useGlobalContext();
  const searchInput = useRef<any>();

  useEffect(() => {
    searchInput.current.focus();
  }, [])

  return (
    <section className="search_bar">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search your favorite cocktail</label>
        <input
          ref={searchInput}
          type="text"
          name="search"
          id="search"
          placeholder="e.g. Sex on the beach"
          onChange={(e) => searchCocktail(e.target.value)}
        />
        <div className={`loader ${bounceLoading && 'visible'}`}>
          <div className="bar"></div>
        </div>
      </form>
    </section>
  );
}

//TODO: add x button to clear the search bar