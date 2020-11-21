import React, { ReactElement, useState } from 'react';
import { useBodyStyles, useDocTitle } from '../../hooks';
import Card from './components/Card';
import data from './data';
import './index.scss';


export default function Birthday (): ReactElement {
  useBodyStyles({
    background: '#f28ab2',
    color: 'hsl(209, 61%, 16%)'
  });
  useDocTitle('Birthday');
  const [people, setPeople] = useState(data);

  return (
    <Card data={people} clearFn={() => setPeople([])} />
  )
}
