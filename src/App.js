import React, { useState } from 'react';
import Template from './Components/Template'
import RandomGenerator from './Functions/RandomGenerator';
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
      state["IntervalProgress"] = state["IntervalProgress"].concat(Array(Math.floor(10 / state["Speed in Seconds"])).fill(1))
      if (state["IntervalProgress"].length > 100)
      {
        state["IntervalProgress"] = Array(Math.floor(10 / state["Speed in Seconds"])).fill(1)
        state["currentChord"] = RandomGenerator(state)
        playSound('/timerSound.wav')
      }
      setStateValue(state)
    }
  }

  const buttonClick = () => {
    if ("interval" in state)
    {
      state["IntervalProgress"] = []
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
      <div className='bg-zinc-800 pt-10 rounded-lg w-[350px] md:w-[700px]'>
        <div className='w-full flex flex-col'>
          <div className='text-[100px] md:text-[180px] sm:text-[135px] mx-auto '> {state.currentChord ?? "C"} </div>
          <button className='bg-emerald-500 text-white rounded-xl py-4 px-10 font-bold mx-auto shadow' onClick={buttonClick}>
            {state.hasStarted ? 'STOP' : 'START'}
          </button>
          <div className='bg-white align-bottom w-full mt-5 h-2 flex flex-row'>
              {state["IntervalProgress"].map((_, index) => {
                return <div key={index} className='bg-cyan-300 h-full w-[1%] animate-[increase-width_0.1s_linear]'></div>
              })}
          </div>
        </div>
      </div>
    </Template>
  );
}

export default App;
