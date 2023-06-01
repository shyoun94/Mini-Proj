import { useState } from 'react';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';

function App() {
  const [myMoney, setMyMoney] = useState('25000원');
  const [itemList, setItemList] = useState([]);
  return (
    <>
    <h1><img src="./images/bg.svg" alt="cola cola" /></h1>
    <main className = "total-wrapper">
      <Section1 myMoney={myMoney} setMyMoney={setMyMoney} itemList={itemList} setItemList={setItemList}/>
      <Section2 myMoney={myMoney} setMyMoney={setMyMoney} />
      <Section3 />
    </main>
    </>
  );
}
export default App;
