import Template from './Components/Template'
import './App.css';

function App() {
  
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
