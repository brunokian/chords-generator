import React, { useEffect, useState } from 'react';
import { naturalChords, flatChords, sharpChords } from '../Datas';

function RandomGenerator() {
  const [chord, setChord] = useState('C')
  const [selectChords, setSelectChords] = useState('')
  const [selectTimer, setSelectTimer] = useState(2)
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
      let timer = selectTimer * 1000
      const id = setInterval(() => {
        chordsGenerator()
      }, timer)
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

  const handleSelect = (event, selectName) => {
    if (selectName === 'chords') {
      setSelectChords(event.target.value)
    }
    if (selectName === 'timer') {
      setSelectTimer(event.target.value)
    }
  }

  return (
    <div>
      <h1>{chord}</h1>
      <button onClick={handleClick}>
        {hasStarted ? 'STOP' : 'START'}
      </button>

      <select value={selectChords} onChange={(event) => handleSelect(event, 'chords')}>
        <option value='natural'>only natural</option>
        <option value='flat'>flat</option>
        <option value='sharp'>sharp</option>
        <option value='all'>all</option>
      </select>

      <label for='timer'>Timer</label>
      <select name='timer' value={selectTimer} onChange={(event) => handleSelect(event, 'timer')}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
      </select>
    </div>
  );
}

export default RandomGenerator;