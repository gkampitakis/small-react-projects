import React, { useRef, useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import './index.css';

export default function Navbar () {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef<any>(null);
  const linksRef = useRef<any>(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src="./logo192.png" alt="React Logo" />
          <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}><FaBars /></button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map(({ id, text, url }) => (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map(({ icon, id, url }) => (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav >
  )
}
