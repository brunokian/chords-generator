import ModeOption from './Modes'
import Slider from './Inputs/Slider';
import Tabs from './Inputs/Tabs'


export default function ConfigurationPanel({state, setState}) {
    const options = {
        "Random Generator": "Random Generator",
        "Scale Generator": "Scale Generator",
        "Relative Notes": "Relative Notes",
    }

    return (
        <div className='bg-zinc-800 rounded-lg h-[48%] my-4 mx-auto w-[300px] md:w-[680px]'>
            <Tabs title="Mode" state={state} setState={setState} options={options} />
            <div className='rounded md:p-3 text-sm'>
                <Slider title="Speed in Seconds" state={state} setState={setState} max="30" />
                <ModeOption state={state} setState={setState} />
            </div>
        </div>
    );
};
