import React, { useRef, useState, useEffect, ReactElement } from 'react';
import { useBodyStyles, useDocTitle } from '../../hooks';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import './index.scss';

export default function Navbar(): ReactElement {
  useBodyStyles({
    background: 'hsl(210, 36%, 96%)',
    color: 'hsl(209, 61%, 16%)'
  });
  useDocTitle('Navbar');
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const linksHeight = linksRef.current!.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current!.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current!.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav className="navbar_project">
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src="./logo192.png" alt="React Logo" />
          <button
            className="nav-toggle"
            data-testid="open-nvb"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map(({ id, text }) => (
              <li key={id}>
                <a>{text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map(({ icon, id }) => (
            <li key={id}>
              <a>{icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
