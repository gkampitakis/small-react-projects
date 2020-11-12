import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';

export default function Home () {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="show-btn">
        show modal
      </button>
    </main>
  )
}
