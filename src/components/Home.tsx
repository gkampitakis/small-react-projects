import React, { ReactElement } from 'react';
import { useBodyStyles } from '../hooks/useBodyStyles';
import { Link } from 'react-router-dom';
import routes from '../routes';
import '../app.scss';


export default function Home (): ReactElement {
  useBodyStyles({
    background: 'hsl(210, 36%, 96%)',
    color: 'hsl(209, 61%, 16%)'
  });
  return (
    <main className="homePage">
      <header>
        <h2>Small React Projects</h2>
      </header>
      <section>
        {routes.map(({ projectName, route }, idx) => (
          <Link key={idx} to={route}>
            {projectName}
          </Link>
        ))}
      </section>
      <footer>
        <span>Author:</span>  gkampitakis
      </footer>
    </main>
  );
}
