import React from 'react';

interface MenuItemProps {
  item: {
    category: string;
    price: number;
    img: string;
    desc: string;
    title: string;
  }
}

export default function MenuItem ({ item }: MenuItemProps) {
  return (
    <article className="menuItem">
      <img src={item.img} alt={item.title} />
      <div className="item-info">
        <header>
          <h4>{item.title}</h4>
          <h4 className="price">${item.price}</h4>
        </header>
        <p>{item.desc}</p>
      </div>
    </article>
  )
}
