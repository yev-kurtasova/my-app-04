import { useState } from 'react';
import './App.css';

function App() {

  const [arr, setArr] = useState([4, 7, 3, 8]);
  const [randomNumber, setRandomNumber] = useState((Math.floor(Math.random() * 100) + 1));
  const [color, setColor] = useState({ color: getRandomColor() })

  const changeRandomNumber = () => {
    setRandomNumber((Math.floor(Math.random() * 100) + 1));
  }

  function push() {
    let randomNumber = (Math.floor(Math.random() * 1000) + 1);
    setArr([...arr, randomNumber])
  }

  const changeColor = () => {
    setColor({ color: getRandomColor() });
  }

  function getRandomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let color = "rgb(" + r + "," + g + "," + b + ")";
  return color;
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
    <h1>Task 3</h1>
    <p style={color}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quibusdam, porro illo, dignissimos sunt mollitia laboriosam magni, commodi assumenda velit adipisci ab eos unde ullam odio quas quis amet animi.</p>
    <button onClick={changeColor}>Change Color</button>
  </>
);
}

export default App;
