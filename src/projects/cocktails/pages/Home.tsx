import React, { ReactElement } from 'react';
import { useGlobalContext } from '../context';
import Search from '../components/Search';
import List from '../components/List';


export default function Home (): ReactElement {
  const { loading, cocktailList, error } = useGlobalContext();
  const show = loading && !cocktailList.length;

  return (
    <>
      <Search />
      {!show && !error && <List items={cocktailList} />}
      {show && <h2>Loading</h2>}
      {error && <h2>An error occurred</h2>}
    </>
  );
}


// FIXME: components here