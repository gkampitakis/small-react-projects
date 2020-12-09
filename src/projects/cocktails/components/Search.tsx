import React, { ReactElement, useRef, useEffect, useState, memo } from 'react';
import { useGlobalContext } from '../context';
import { FaTimes } from 'react-icons/fa'

const FaTimesMemo = memo(FaTimes);

export default function Search (): ReactElement {
  const { searchCocktail, bounceLoading, refetch } = useGlobalContext();
  const [value, setValue] = useState('');
  const searchInput = useRef<any>();

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  function clearSearch () {
    setValue('');
    refetch();
  }

  function onChange (e: any) {
    setValue(e.target.value);
    searchCocktail(e.target.value);
  }

  return (
    <section className="search_bar">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search your favorite cocktail</label>
        <div>
          <input
            ref={searchInput}
            type="text"
            name="search"
            id="search"
            value={value}
            placeholder="e.g. Sex on the beach"
            onChange={onChange}
          />
          {value && <button type="button" className="clear-btn" onClick={clearSearch}><FaTimesMemo /></button>}
        </div>
        <div className={`loader ${bounceLoading && 'visible'}`}>
          <div className="bar"></div>
        </div>
      </form>
    </section>
  );
}
