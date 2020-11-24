import React, { ReactElement, useState, memo } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa'

const FaSearchMemo = memo(FaSearch);
const FaTimesMemo = memo(FaTimes);

interface SearchProps {
  search: (query: string) => void;
}

export default function Search ({ search }: SearchProps): ReactElement {
  const [value, setValue] = useState('');

  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    search(value);
  }

  return (
    <section className="search">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value && <button type="button" className="clear-btn" onClick={() => setValue('')}><FaTimesMemo /></button>}
        <button type="submit"><FaSearchMemo /></button>
      </form>
    </section>
  );
}
