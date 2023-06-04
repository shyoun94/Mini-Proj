import { useState } from 'react';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';

function App() {
  const [myMoney, setMyMoney] = useState('25000원');
  const [itemList, setItemList] = useState([]);
  const [stagedList, setStagedList] = useState([]);
  const [getDrinks, setGetDrinks] = useState(false);
  const handleGetDrinks = () => {   
    if (stagedList && stagedList.length > 0) {
      setGetDrinks(true);      
    } else {
      alert("선택하신 음료가 없습니다.");
    };
  }
  return (
    <>
    <h1><img src="./images/bg.svg" alt="cola cola" /></h1>
    <main className = "total-wrapper">
      <Section1 
          myMoney={myMoney} 
          setMyMoney={setMyMoney} 
          itemList={itemList} 
          setItemList={setItemList} 
          stagedList = {stagedList}
          setStagedList = {setStagedList}
          handleGetDrinks = {handleGetDrinks}
          />
      <Section2 
          myMoney={myMoney} 
          setMyMoney={setMyMoney} 
          />
      <Section3 
          stagedList = {stagedList}
          setStagedList = {setStagedList}
          getDrinks = {getDrinks}
          setGetDrinks = {setGetDrinks}
          />
    </main>
    </>
  );
}
export default App;
