import React, { ReactElement, useRef } from 'react';
import { useOnClickOutside } from '../../../hooks';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import { social, links } from '../data';

export default function Sidebar(): ReactElement {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  const sideRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(sideRef, closeSidebar);

  return (
    <aside ref={sideRef}>
      <div className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className="sidebar-header">
          <img src="./logo192.png" alt="Logo" className="logo" />
          <button className="menu-close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(link => {
            const { id, text, icon } = link;
            return (
              <li key={id}>
                <a>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="social-icons">
          {social.map(link => {
            const { id, icon } = link;
            return (
              <li key={id}>
                <a>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
