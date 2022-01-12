import React, { ReactElement } from 'react';
import LoadingImg from './images/loading.png';

export default function Loading(): ReactElement {
  return (
    <main className="loading_component">
      <div className="loader">
        <div className="bar"></div>
      </div>
      <img className="logo" src={LoadingImg} alt="Loading Logo" />
    </main>
  );
}
