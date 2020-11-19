import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';


export default function NotFound (): ReactElement {
  return (
    <main className="not_found">
      <img src="./images/404.svg" alt="Not found image" />
      <p>The page you requested was not found</p>
      <div>
        <Link to="/" className="return-btn">return home</Link>
      </div>
    </main>
  );
}
