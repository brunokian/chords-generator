import React, { useState } from 'react';
import Template from './Components/Template'
import RandomGenerator from './Components/RandomGenerator';

function App() {
  var [state, setState] = useState({});

  const setStateValue = (newState) => {
    Object.assign(state, newState);
    setState({...state})
  }

  const buttonClick = () => {
    if ("interval" in state){
      clearInterval(state["interval"])
      delete state["interval"]
    }else{
      state["interval"] = setInterval(() => {
        if (state.hasStarted){
          state["currentChord"] = RandomGenerator()
          setStateValue(state)
        }
      }, (state["Chord changes speed"] ?? 2) * 1000)
    }
    state["hasStarted"] = !state["hasStarted"]
    setStateValue(state)
  }

  return (
    <Template state={state} setState={setStateValue}>
      <div className='bg-stone-700 py-10 rounded-lg w-[700px] shadow-inner'>
        <div className='w-full flex flex-col'>
          <div className='text-[184px] mx-auto'> {state.currentChord ?? "C"} </div>
          <button className='bg-teal-400 text-white rounded-full py-4 px-10 font-bold mx-auto shadow' onClick={buttonClick}>
            {state.hasStarted ? 'STOP': 'START'}
          </button>
        </div>
      </div>
    </Template>
  );
}

export default App;
