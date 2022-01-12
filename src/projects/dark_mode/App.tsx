import React, { ReactElement, useEffect } from 'react';
import { useBodyStyles, useDocTitle, useLocalStorage } from '../../hooks';
import Article from './Article';
import data from './data';
import './index.scss';

export default function App(): ReactElement {
  useDocTitle('Dark Mode');
  useBodyStyles({
    color: 'var(--clr-font)',
    background: 'var(--clr-bcg)'
  });
  const [theme, setTheme] = useLocalStorage<string>('dark-mode', 'dark_theme');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  function toggleTheme() {
    const themes: Record<string, string> = {
      dark_theme: 'light_theme',
      light_theme: 'dark_theme'
    };

    setTheme(themes[theme]);
  }

  return (
    <main className="dark_mode_project">
      <header>
        <div>
          <h1>overreacted</h1>
          <button onClick={toggleTheme}>toggle</button>
        </div>
      </header>
      <section className="articles">
        {data.map(({ id, ...rest }) => (
          <Article key={id} {...rest} />
        ))}
      </section>
    </main>
  );
}
