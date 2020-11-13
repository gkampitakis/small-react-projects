import React, { ReactElement } from 'react';
import Home from './components/Home';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';
import { AppProvider } from './context';
import './index.scss';


export default function App (): ReactElement {
  return (
    <AppProvider>
      <Home />
      <Modal />
      <Sidebar />
    </AppProvider>
  );
}
