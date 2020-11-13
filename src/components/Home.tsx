import React, { ReactElement } from 'react';
import routes from '../routes';
import { Link } from 'react-router-dom';


export default function Home (): ReactElement {
  return (
    <main>
      <header >
        Small React Projects
      </header>
      <section>
        {routes.map(({ projectName, route }, idx) => (
          <Link key={idx} to={route}>
            {projectName}
          </Link>
        ))}
      </section>
      <footer>
        G Kampitakis
      </footer>
    </main>
  );
}
