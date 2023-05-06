import { useEffect, useState } from 'react';
import './App.css';
import { naturalChords, flatChords, sharpChords } from './Datas';

function App() {
  const [chord, setChord] = useState('C')
  const [selectChords, setSelectChords] = useState('')
  const [hasStarted, setHasStarted] = useState(false)
  const [intervalId, setIntervalId] = useState(null)

  const randomChords = (arrayChords) => {
    const index = Math.floor(Math.random() * arrayChords.length)
    console.log(arrayChords);
    const newChord = arrayChords[index]
    if (newChord !== chord) {
      setChord(newChord)
      return newChord
    } else {
      randomChords(arrayChords)
    }
  }

  const chordsGenerator = () => {
    if (selectChords === 'flat') {
      return randomChords(naturalChords.concat(flatChords))
    }
    if (selectChords === 'sharp') {
      return randomChords(naturalChords.concat(sharpChords))
    }
    if (selectChords === 'all') {
      return randomChords(naturalChords.concat(sharpChords.concat(flatChords)))
    }
    return randomChords(naturalChords)
  }

  useEffect(() => {
    if (hasStarted) {
      const id = setInterval(() => {
        chordsGenerator()
      }, 1000)
      setIntervalId(id)
    }
  }, [hasStarted])

  const handleClick = () => {
    setHasStarted(!hasStarted)
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(null)
    }
  }

  const handleSelect = (event) => {
    setSelectChords(event.target.value)
  }

  return (
    <div>
      <h1>{chord}</h1>
      <button onClick={handleClick}>
        {hasStarted ? 'STOP': 'START'}
      </button>

      <select value={selectChords} onChange={handleSelect}>
        <option value=''>only natural</option>
        <option value='flat'>flat</option>
        <option value='sharp'>sharp</option>
        <option value='all'>all</option>
      </select>

    </div>
  );
}

export default App;
