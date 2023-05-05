import { useEffect, useState } from 'react';
import chordsList from './Datas';
import Template from './Components/Template'

function App() {
  const [chord, setChord] = useState('C')
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
  }, [hasStarted])

  const handleClick = () => {
    setHasStarted(!hasStarted)
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(null)
    }
  }

  return (
    <Template>
      <div className='bg-stone-700 py-10 rounded-lg w-[500px] shadow-inner'>
        <div className='w-full flex flex-col'>
          <div className='text-[184px] grow mx-auto'> {chord} </div>
          <button className='bg-teal-400 text-white rounded-full py-4 px-10 font-bold mx-auto shadow' onClick={handleClick}> 
            {hasStarted ? 'STOP': 'START'}
          </button>
        </div>
      </div>
    </Template>
  );
}

export default App;
