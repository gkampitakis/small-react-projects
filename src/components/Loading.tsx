import React, { ReactElement } from 'react';

export default function Loading (): ReactElement {
  return (
    <main className="loading_component">
      <div className="loader">
        <div className="bar"></div>
      </div>
      <img className="logo" src="./logo192.png" alt="Loading Logo" />
    </main>
  );
}
