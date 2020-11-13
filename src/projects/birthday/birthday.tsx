import React, { ReactElement, useState } from 'react';
import Card from './components/Card';
import data from './data';
import './index.scss';


export default function Birthday (): ReactElement {
  const [people, setPeople] = useState(data);

  return (
    <Card data={people} clearFn={() => setPeople([])} />
  )
}
