import React from 'react';
import ColaBtnList from './ColaBtnList';
import Money from './Money';
import SelectDrink from './SelectDrink';
export default function Section1(props) {
  return (
    <>
      <section className="section1">
      <ColaBtnList itemList={props.itemList} setItemList={props.setItemList}/>
      <div className = "container">
        <Money myMoney={props.myMoney} setMyMoney={props.setMyMoney}/>
        <SelectDrink itemList={props.itemList} setItemList={props.setItemList}/>
        <button className = "btn-get" type = "button">획득</button>
      </div>
    </section>
    </>
  )
}
