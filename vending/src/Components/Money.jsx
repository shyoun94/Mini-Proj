import React, { useState } from 'react';

export default function Money(props) {

  const [money, setMoney] = useState(0);
  const [balance, setBalance] = useState('0원');

  const insertMoney = (e) => {
    e.preventDefault();
    const inputMoney = parseInt(money);
    const myMoneyVal = parseInt(props.myMoney.replaceAll(',', ''));
    const balanceVal = parseInt(balance.replaceAll(',', ''));

    if (inputMoney) {
      if (inputMoney <= myMoneyVal && inputMoney > 0) {
        const updatedMyMoney = new Intl.NumberFormat().format(myMoneyVal - inputMoney) + '원';
        const updatedBalance = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputMoney) + '원';

        props.setMyMoney(updatedMyMoney);
        setBalance(updatedBalance);
      } else {
        alert('소지금이 부족합니다.');
      }
      setMoney('');
    }
  };

  const handleMoneyInput = (e) => {
    setMoney(e.target.value);
  };

  const returnMoney = (e)=>{
    const balanceVal = parseInt(balance.replaceAll(',', ''));

    // 소지금 
    const myMoneyVal = parseInt(props.myMoney.replaceAll(',', ''));

    if (balanceVal) {
      const updatedMyMoney = new Intl.NumberFormat().format(balanceVal + myMoneyVal) + '원';
      setBalance('0원');
      props.setMyMoney(updatedMyMoney);
    }
  };
  return (
    <>
      <div className = "bg-box"> <h2 className="title">잔액</h2>
        <p>{balance}</p></div>
        <button className = "btn change" onClick={returnMoney}>거스름돈 반환</button>
        <form className = "insert-money" onSubmit={insertMoney}>
        <label for="input-money" className="a11y-hidden">입금액입력(단위:원)</label>
        <input id ="input-money" min="1000" step="1000" type="number" placeholder = "입금액 입력" value={money} onChange={handleMoneyInput}/>
        <button className = "btn input" type = "submit">입금</button>
        </form>
    </>
  )
}
