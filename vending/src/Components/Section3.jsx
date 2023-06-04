import React, { useEffect, useState } from 'react';

export default function Section3(props) {
  const [displayData, setDisplayData] = useState([]);
  const [totalPrice, setTotalPrice] = useState("0원");

  useEffect(() => {
    if (props.getDrinks) {
      setDisplayData(props.stagedList);
      props.setGetDrinks(false);
    }
  }, [props.getDrinks, props.stagedList, props.setGetinks]);
  
  // totalPrice 계산을 위해 별도의 useEffect 추가
  useEffect(() => {
    const total = displayData.reduce((sum, item) => {
            const count = parseInt(item.count, 10);
            const price = parseFloat(item.cost);
            console.log(count, price);
            return sum + (count * price);
    }, 0);
    const updatedTotalPrice = new Intl.NumberFormat().format(total) + '원';
    setTotalPrice(updatedTotalPrice);
  }, [displayData]);
  

  return (
    <div>
      <section className="section3">
        <h2 className="get-title">획득한 음료</h2>
        <ul className="sel-drinks">
          {displayData.map((item) => (
            <li key={item.name}>
              <img src={`./images/${item.img}`} alt="" />
              <span>{item.name}</span>
              <strong>{item.count}
                <span className="a11y-hidden">개</span>
              </strong>
            </li>
          ))}
        </ul>
        <p className="total-price">총금액 : {totalPrice}</p>
      </section>
    </div>
  );
}
