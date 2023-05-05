import { useState } from 'react';
import './App.css';
import chordsList from './Datas';

function App() {
  const [chord, setChord] = useState('')
  const [lastChord, setLastChord] = useState('')

  const randomChords = () => {
    const index = Math.floor(Math.random() * chordsList.length)
    // console.log(chordsList[index]);
    return chordsList[index]
  }

  const chordsGenerator = () => {
    // console.log(randomChords());
    const newChord = randomChords()
    if (newChord !== chord) {
      setChord(newChord)
    } else {
      chordsGenerator()
    }
    
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
