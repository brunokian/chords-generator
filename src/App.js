import React, { useState } from 'react';
import Template from './Components/Template'
import RandomGenerator from './Functions/RandomGenerator';
import { playSound } from './Utils'
import { chordTypes, relatives } from './Definitions';


function App() {
  // const types = chordTypes.map((type) => {
  //   return {"Chord type: ".concat(type): true}
  // })
  const [state, setState] = useState({
    "Flat Chords": true,
    "Sharp Chords": true,
    "Relative Notes": false,
    "Show Custom Options": false,
    "Mode": "Random Generator",
    "Speed in Seconds": 2,
    "Key Change Speed": 0,
    "Tonic Inversion(%)": 0,
    "IntervalProgress": [],
    ...chordTypes.reduce((a, v) => ({...a, [`Chord type: ${v}`]: true}), {}),
    ...relatives.reduce((a, v) => ({...a, [`Relative: ${v}`]: false}), {}),
  });

  const setStateValue = (newState) => {
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

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
      <div className='bg-zinc-800 pt-10 rounded-lg w-[350px] md:w-[700px]'>
        <div className='w-full flex flex-col'>
          <div className='text-[100px] md:text-[180px] sm:text-[135px] mx-auto '> {state.currentChord ?? "C"} </div>
          <button className='bg-emerald-500 text-white rounded-xl py-4 px-10 font-bold mx-auto shadow' onClick={buttonClick}>
            {state.hasStarted ? 'STOP' : 'START'}
          </button>
        </div>
      </div>
    </Template>
  );
}

export default App;
