import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export default function Navbar(): ReactElement {
  return (
    <nav>
      <div className="nav-center">
        <Link to="/cocktails">
          <img src={logo} alt="Cocktail Logo" />
        </Link>
        <ul>
          <li>
            <Link to="/cocktails">Home</Link>
          </li>
          <li>
            <Link to="/cocktails/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
