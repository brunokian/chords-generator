import React, { useState } from 'react';
import Template from './Components/Template'
import { handleButton } from "./utils";


function App() {
  var [state, setState] = useState({});

  const setStateValue = (newState) => {
    Object.assign(state, newState);
    setState({...state})
  }

  return (
    <Template state={state} setState={setStateValue}>
      <div className='bg-stone-700 py-10 rounded-lg w-[500px] shadow-inner'>
        <div className='w-full flex flex-col'>
          <div className='text-[184px] grow mx-auto'> C </div>
          <button className='bg-teal-400 text-white rounded-full py-4 px-10 font-bold mx-auto shadow' 
            onClick={(event) => handleButton(event, "hasStarted", state, setStateValue)}>
            {state.hasStarted ? 'STOP': 'START'}
          </button>
        </div>
      </div>
    </Template>
  );
}

export default App;
