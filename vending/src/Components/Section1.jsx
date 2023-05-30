import React from 'react';
import ColaBtnList from './ColaBtnList';
import Money from './Money';

export default function Section1() {
  return (
    <>
      <section className="section1">
      <ColaBtnList />
      <div className = "container">
        <Money />
        {/* <SelectDrink /> */}
        <button className = "btn-get" type = "button">획득</button>
      </div>
    </section>
    </>
  )
}
