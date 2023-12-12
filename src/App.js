import { useState } from 'react';
import './App.css';

function App() {

  const [arr, setArr] = useState([4, 7, 3, 8]);


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
    </>
  );
}

export default App;
