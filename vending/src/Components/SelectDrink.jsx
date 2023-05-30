import React from 'react';

function StagedItem({ item }) {
  return (
    <li data-item={item.name} data-price={item.price}>
      <img src={`./img/${item.img}`} alt="" />
      {item.name}
      <strong>
        1
        <span className="a11y-hidden">개</span>
      </strong>
    </li>
  );
}

export default function SelectDrink({ items }) {
  return (
    <ul className="staged-list">
      {items.map((item) => (
        <StagedItem key={item.name} item={item} />
      ))}
    </ul>
  );
}
