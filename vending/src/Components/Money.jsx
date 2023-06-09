import React, { useEffect, useState } from 'react';

export default function Money(props) {
  const [money, setMoney] = useState('');

  const insertMoney = (e) => {
    e.preventDefault();
    const inputMoney = parseInt(money);
    const myMoneyVal = parseInt(props.myMoney.replaceAll(',', ''));
    const balanceVal = parseInt(props.balance.replaceAll(',', ''));

    if (inputMoney) {
      if (inputMoney <= myMoneyVal && inputMoney > 0) {
        const updatedMyMoney = new Intl.NumberFormat().format(myMoneyVal - inputMoney) + '원';
        const updatedBalance = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputMoney) + '원';

        props.setMyMoney(updatedMyMoney);
        props.setBalance(updatedBalance);
      } else {
        alert('소지금이 부족합니다.');
      }
      setMoney('');
    }
  };

  const handleMoneyInput = (e) => {
    setMoney(e.target.value);
  };

  const returnMoney = (e) => {
    const balanceVal = parseInt(props.balance.replaceAll(',', ''));
    const myMoneyVal = parseInt(props.myMoney.replaceAll(',', ''));

    if (balanceVal) {
      const updatedMyMoney = new Intl.NumberFormat().format(balanceVal + myMoneyVal) + '원';
      props.setBalance('0원');
      props.setMyMoney(updatedMyMoney);
    }
  };

  useEffect(() => {
    const formattedBalance = new Intl.NumberFormat().format(parseInt(props.balance.toString().replaceAll(',', ''))) + '원';
    props.setBalance(formattedBalance);
  }, [props.balance]);

  return (
    <>
      <div className="bg-box">
        <h2 className="title">잔액</h2>
        <p>{props.balance}</p>
      </div>
      <button className="btn change" onClick={returnMoney}>
        거스름돈 반환
      </button>
      <form className="insert-money" onSubmit={insertMoney}>
        <label htmlFor="input-money" className="a11y-hidden">
          입금액입력(단위:원)
        </label>
        <input
          id="input-money"
          min="1000"
          step="1000"
          type="number"
          placeholder="입금액 입력"
          value={money}
          onChange={handleMoneyInput}
        />
        <button className="btn input" type="submit" disabled={props.disabled}>
          입금
        </button>
      </form>
    </>
  );
}
