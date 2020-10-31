import React, { useState } from 'react';
import Card from './components/Card';
import data from './data';
import './index.css';

export default function Birthday () {
  const [people, setPeople] = useState(data);

  return (
    <Card data={people} clearFn={() => setPeople([])} />
  )
}
