import React, { useState } from 'react';
import ColaBtnList from './ColaBtnList';
import Money from './Money';

export default function Section1(props) {
  const [balance, setBalance] = useState('0원');
  const [disabled, setDisabled] = useState(false);
  const [disabledItem, setDisabledItem] = useState('');
  const handleSelectDrinks = (event) => {
    event.stopPropagation();
    let balanceVal = parseInt(balance.toString().replaceAll(",", ""));
    const targetEl = event.currentTarget;
    const targetElPrice = parseInt(targetEl.dataset.price);
    const stagedListItems = props.stagedList.map((item) => item);
    console.log('stagedListItems:', stagedListItems);
    let isStaged = false; // Check if the item is already in the staged list

    if (balanceVal >= targetElPrice) {
      setBalance(balanceVal - targetElPrice);

      for (const item of stagedListItems) {
        console.log('item:', item);
        if (targetEl.dataset.item === item.name) {
          item.count =
            parseInt(item.count) + 1;

          isStaged = true;
          break;
        }
      }

      if (!isStaged) {
        stagedItemGenerator(event.currentTarget);
      }

      targetEl.dataset.count--;

      if (!parseInt(targetEl.dataset.count)) {
        targetEl.insertAdjacentHTML(
          "beforeEnd",
          `
          <strong className="soldout">
            <span>품절</span>
          </strong>
          `
        );
        setDisabled(true);
        setDisabledItem(targetEl.dataset.item);
      }
    } else {
      alert("입금한 금액이 부족합니다.");
    }
    console.log("handleSelectDrinks called");
  };
  
  const stagedItemGenerator = (target) => {
    const stagedItem = {
      name: target.dataset.item,
      cost: target.dataset.price,
      img: target.dataset.img,
      count: "1",
    };
    props.setStagedList((prevStagedList) => [...prevStagedList, stagedItem]);
  };
  
  if(balance === 0){
    console.log(balance);
    setBalance('0원');
  }

  return (
    <>
      <section className="section1">
        <ColaBtnList
          itemList={props.itemList}
          setItemList={props.setItemList}
          disabled={disabled}
          disabledItem={disabledItem}
          handleSelectDrinks={handleSelectDrinks}
        />
        <div className="container">
          <Money
            myMoney={props.myMoney}
            setMyMoney={props.setMyMoney}
            balance={balance}
            setBalance={setBalance}
          />
          <ul className="sel-drinks">
            {props.stagedList && props.stagedList.map((item) => (
              <li key={item.name} data-item={item.name} data-price={item.price}>
                <img src={`./images/${item.img}`} alt="" />
                {item.name}
                <strong>
                  {item.count}
                  <span className="a11y-hidden">개</span>
                </strong>
              </li>
            ))}
          </ul>
          <button className="btn-get" type="button" onClick={props.handleGetDrinks}>
            획득
          </button>
        </div>
      </section>
    </>
  );
}
