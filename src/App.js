import { useEffect, useState } from 'react';
import './App.css';
import chordsList from './Datas';

function App() {
  const [chord, setChord] = useState('')
  const [hasStarted, setHasStarted] = useState(false)
  const [intervalId, setIntervalId] = useState(null)

  const randomChords = () => {
    const index = Math.floor(Math.random() * chordsList.length)
    // console.log(chordsList[index]);
    const newChord = chordsList[index]
    if (newChord !== chord) {
      setChord(newChord)
      return newChord
    } else {
      randomChords()
    }
  }

  const chordsGenerator = () => {
    // console.log(randomChords());
    return randomChords()
  }

  useEffect(() => {
    if (hasStarted) {
      const id = setInterval(() => {
        chordsGenerator()
      }, 1000)
      setIntervalId(id)
    }
    return () => clearInterval(intervalId)
  }, [hasStarted])

  const handleClick = () => {
    setHasStarted(!hasStarted)
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(null)
    }
  }

  return (
    <div>
      <h1>{chord}</h1>
      <button onClick={handleClick}>
        {hasStarted ? 'STOP': 'START'}
      </button>
    </div>
  );
}

export default App;
