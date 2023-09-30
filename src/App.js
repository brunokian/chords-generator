import React, { useState } from 'react';
import Template from './Components/Template'
import RandomGenerator from './components/RandomGenerator';

function App() {
  const [state, setState] = useState({
    flatChords: true,
    sharpChords: true,
    speed: 2,
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
        }
      }, (state["speed"] ?? 2) * 1000)
    }
    state["hasStarted"] = !state["hasStarted"]
    setStateValue(state)
  }

  return (
    <Template state={state} setState={setStateValue}>
      <div className='bg-stone-700 py-10 rounded-lg w-[500px] md:w-[650px] shadow-inner'>
        <div className='w-full flex flex-col'>
          <div className='text-[135px] md:text-[180px] mx-auto'> {state.currentChord ?? "C"} </div>
          <button className='bg-teal-400 text-white rounded-full py-4 px-10 font-bold mx-auto shadow' onClick={buttonClick}>
            {state.hasStarted ? 'STOP' : 'START'}
          </button>
        </div>
      </div>
    </Template>
  );
}

export default App;
