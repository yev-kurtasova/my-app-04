import { useState } from 'react';
import './App.css';

function App() {

  const [arr, setArr] = useState([4, 7, 3, 8]);
  const [randomNumber, setrandomNumber] = useState((Math.floor(Math.random()*100) + 1));
  const changeRandomNumber = () => {
    setrandomNumber((Math.floor(Math.random()*100) + 1));
  }

  function push() {
    let randomNumber = (Math.floor(Math.random()*1000) + 1);
    setArr([...arr, randomNumber])
  }


  return (
    <>
      <h1>{arr}</h1>
      <button onClick={push}>Push</button>
      <ul>
        {arr.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
      <h1>Task 2</h1>
      <h3>Random Number: {randomNumber}</h3>
      <button onClick={changeRandomNumber}>Get Number</button>
    </>
  );
}

export default App;
