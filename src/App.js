import React, { useState } from 'react';
import Template from './Components/Template'
import chordGenerator from './Functions/ChordGenerator';
import relativeGenerator from './Functions/RelativeGenerator';
import scaleGenerator from './Functions/ScaleGenerator';
import { playSound } from './Utils'
import { initialState } from './Config'

function App() {
  const [state, setState] = useState({...initialState});

  const setStateValue = (newState) => {
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  const intervalUpdate = () => {
    if (state.hasStarted)
    {
      state["IntervalProgress"] += 10 / state["Speed in Seconds"]
      if (state["IntervalProgress"] > 100)
      {
        state["IntervalProgress"] = 10 / state["Speed in Seconds"]
        state["currentChord"] = {
          "Random Generator": chordGenerator,
          "Scale Generator": scaleGenerator,
          "Relative Notes": relativeGenerator,
        }[state["Mode"]](state)

        playSound('/timerSound.wav')
      }
      setStateValue(state)
    }
  }

  const buttonClick = () => {
    if ("interval" in state)
    {
      state["IntervalProgress"] = 0
      clearInterval(state["interval"])
      delete state["interval"]
    }
    else
    {
      state["interval"] = setInterval(intervalUpdate, 100)
    }
    state["hasStarted"] = !state["hasStarted"]
    setStateValue(state)
  }

  return (
    <Template state={state} setState={setStateValue}>
      <div className='bg-zinc-800 pt-10 rounded-lg w-[350px] md:w-[1300px]'>
        <div className='w-full flex flex-col'>
          <div className='text-[100px] md:text-[140px] sm:text-[115px] mx-auto py-6'> {state.currentChord } </div>
          <button className='bg-emerald-500 text-white rounded-xl py-4 px-10 font-bold mx-auto shadow' onClick={buttonClick}>
            {state.hasStarted ? 'STOP' : 'START'}
          </button>
          <div className='bg-white align-bottom w-full mt-5 h-2 flex flex-row'>
              {Array(Math.round(state["IntervalProgress"])).fill(1).map((_, index) => {
                return <div key={index} className='bg-cyan-300 h-full w-[1%] animate-[increase-width_0.1s_linear]'></div>
              })}
          </div>
        </div>
      </div>
    </Template>
  );
}

export default App;
