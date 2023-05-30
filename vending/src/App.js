import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';

function App() {
  return (
    <>
    <h1><img src="./images/bg.svg" alt="cola cola" /></h1>
    <main className = "total-wrapper">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
    </>
  );
}
export default App;
