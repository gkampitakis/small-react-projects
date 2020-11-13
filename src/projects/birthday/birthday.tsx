import React, { ReactElement, useState } from 'react';
import { useBodyStyles } from '../../hooks/useBodyStyles';
import Card from './components/Card';
import data from './data';
import './index.scss';


export default function Birthday (): ReactElement {
  useBodyStyles({
    background: '#f28ab2',
    color: 'hsl(209, 61%, 16%)'
  });
  const [people, setPeople] = useState(data);

  return (
    <Card data={people} clearFn={() => setPeople([])} />
  )
}
