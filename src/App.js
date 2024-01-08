import React, { useState } from 'react';
import Template from './Components/Template'
import RandomGenerator from './Functions/RandomGenerator';
import { Howl } from 'howler';


function App() {
  const [state, setState] = useState({
    "Flat Chords": true,
    "Sharp Chords": true,
    "Speed in Seconds": 2,
    "Mode": "Random Generator",
    "Key Change Speed": 0,
  });

  const setStateValue = (newState) => {
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  const playSound = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play()
  }

  const buttonClick = () => {
    if ("interval" in state) {
      clearInterval(state["interval"])
      delete state["interval"]
    } else {
      state["interval"] = setInterval(() => {
        if (state.hasStarted) {
          state["currentChord"] = RandomGenerator(state)
          setStateValue(state)
          playSound('/timerSound.wav')
        }
      }, state["Speed in Seconds"] * 1000)
    }
    state["hasStarted"] = !state["hasStarted"]
    setStateValue(state)
  }

  return (
    <Template state={state} setState={setStateValue}>
      <div className='bg-zinc-800 py-10 rounded-lg w-[350px] md:w-[700px] shadow-inner'>
        <div className='w-full flex flex-col'>
          <div className='text-[100px] md:text-[180px] sm:text-[135px] mx-auto'> {state.currentChord ?? "C"} </div>
          <button className='bg-emerald-500 text-white rounded-xl py-4 px-10 font-bold mx-auto shadow' onClick={buttonClick}>
            {state.hasStarted ? 'STOP' : 'START'}
          </button>
        </div>
      </div>
    </Template>
  );
}

export default App;
