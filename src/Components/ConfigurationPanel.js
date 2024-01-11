import ModeOption from './Modes'
import Tabs from './Inputs/Tabs'


export default function ConfigurationPanel({state, setState}) {
    const options = {
        "Random Generator": "Random Generator",
        "Scale Generator": "Scale Generator",
        "Relative Notes": "Relative Notes",
    }

    return (
        <div className='bg-zinc-800 rounded-lg h-1/2 my-4 mx-auto w-[300px] md:w-[700px]'>
            <Tabs title="Mode" state={state} setState={setState} options={options} />
            <div className='rounded md:p-3 text-sm'>
                <ModeOption state={state} setState={setState} />
            </div>
        </div>
    );
};
