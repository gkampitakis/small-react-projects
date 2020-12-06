import React, { ReactElement } from 'react';
import Search from '../components/Search';
import List from '../components/List';


export default function Home (): ReactElement {
  return (
    <>
      <Search />
      <List />
    </>
  );
}
