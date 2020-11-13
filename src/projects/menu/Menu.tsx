import React, { useState, useEffect, ReactElement } from 'react';
import MenuItem from './components/MenuItem';
import Tabs from './components/Tabs';
import data from './data';
import './index.scss';


export default function Menu (): ReactElement {
  const [tab, setTab] = useState('all');
  const [menuList, setMenuList] = useState(data)

  useEffect(() => {
    if (tab === 'all') return setMenuList(data);
    setMenuList(data.filter(l => l.category === tab));
  }, [tab])

  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Tabs selectTab={setTab} />
        <div className="section-center">
          {menuList.map(({ id, ...rest }) => (
            <MenuItem key={id} item={rest} />
          ))}
        </div>
      </div>
    </main>
  );
}
