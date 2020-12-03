import React, { ReactElement } from 'react';
import { useGlobalContext } from './context';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

export default function App (): ReactElement {
  const { loading } = useGlobalContext();

  return (<main className="cart_project">
    {loading &&
      <div className="loading">
        <h1>Loading ...</h1>
      </div>
    }
    {!loading && <>
      <Navbar />
      <Cart />
    </>}
  </main>);
}