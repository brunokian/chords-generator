import ModeOption from './Modes'
import SelectMenu from './Inputs/SelectMenu'


export default function ConfigurationPanel({state, setState}) {
    const options = {
        "Random Generator": "Random Generator",
        "Scale Generator": "Scale Generator",
        "Relative Notes": "Relative Notes",
    }

    return (
        <div className='bg-zinc-800 rounded-lg p-2 max-h-[50%] my-4 mx-auto w-[300px] md:w-[700px]'>
            <div className='rounded md:p-2 text-sm'>
                <div className='text-lg'>
                    <SelectMenu title="Mode" state={state} setState={setState} options={options} />
                </div>
                <div className="relative flex items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400">Configuration</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <ModeOption state={state} setState={setState} />
            </div>
        </div>
    );
};
