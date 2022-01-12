import React, { ReactElement } from 'react';
import { useGlobalContext } from '../context';
import Search from '../components/Search';
import List from '../components/List';
import ErrorCmp from '../../../components/Error';
import Loading from '../../../components/Loading';

export default function Home(): ReactElement {
  const { loading, cocktailList, error } = useGlobalContext();
  const show = loading && !cocktailList.length;

  return (
    <>
      <Search />
      {!show && !error && <List items={cocktailList} />}
      {show && <Loading />}
      {error && <ErrorCmp message={error} />}
    </>
  );
}
