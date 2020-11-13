import React, { ReactElement } from 'react';
import { useBodyStyles } from '../../hooks/useBodyStyles';
import Home from './components/Home';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';
import { AppProvider } from './context';
import './index.scss';


export default function App (): ReactElement {
  useBodyStyles({
    background: 'hsl(210, 36%, 96%)',
    color: 'hsl(209, 61%, 16%)'
  });

  return (
    <AppProvider>
      <main className="sidebar_and_modal">
        <Home />
        <Modal />
        <Sidebar />
      </main>
    </AppProvider>
  );
}
