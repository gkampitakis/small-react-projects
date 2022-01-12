import React, { ReactElement } from 'react';
import { AppProvider } from './context';
import Quiz from './Components/Quiz';
import './index.scss';
import { useBodyStyles, useDocTitle } from '../../hooks';

export default function App(): ReactElement {
  useBodyStyles({
    background: 'hsl(210, 36%, 96%)'
  });
  useDocTitle('Quiz');

  return (
    <AppProvider>
      <Quiz />
    </AppProvider>
  );
}
