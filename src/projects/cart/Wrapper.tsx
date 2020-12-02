import React, { ReactElement } from 'react';
import { useBodyStyles } from '../../hooks';
import { AppProvider } from './context';
import App from './App';
import './index.scss';


export default function Wrapper (): ReactElement {
  useBodyStyles({
    color: '#102a42',
    background: '#f1f5f8'
  });

  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}
