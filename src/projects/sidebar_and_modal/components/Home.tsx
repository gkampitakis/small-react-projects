import React, { ReactElement } from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';


export default function Home (): ReactElement {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle" data-testid='open-sidebar'>
        <FaBars />
      </button>
      <button onClick={openModal} className="show-btn">
        show modal
      </button>
    </main>
  );
}
