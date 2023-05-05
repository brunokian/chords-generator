import { useState } from 'react';
import './App.css';
import chordsList from './Datas';

function App() {
  const [chord, setChord] = useState('')

  const randomChords = () => {
    const index = Math.floor(Math.random() * chordsList.length)
    // console.log(chordsList[index]);
    return chordsList[index]
  }

  const chordsGenerator = () => {
    // console.log(randomChords());
    setChord(randomChords())
  }

  return (
    <div>
      <h1>{chord}</h1>
      <button onClick={ chordsGenerator}>
        START
      </button>
    </div>
  );
}

export default App;
