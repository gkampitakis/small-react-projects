import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { getDecoratedRoute } from '../Router';


export default function NotFound (): ReactElement {
  return (
    <main className="not_found">
      <img src="./images/404.svg" alt="Not found image" />
      <p>The page you requested was not found</p>
      <div>
        <Link to={getDecoratedRoute("/home")} className="return-btn">return home</Link>
      </div>
    </main>
  );
}
