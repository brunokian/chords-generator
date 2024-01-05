import Toggle from './Inputs/Toggle';
import Slider from './Inputs/Slider';
import SelectMenu from './Inputs/SelectMenu';
import { allNotes, scales } from '../Definitions';


export default function ConfigurationPanel({state, setState, children}) {
    const keys = allNotes.reduce((a, v) => ({ ...a, [v]: v}), {"Random":""})
    const options = {
        "Random Generator": "Random Generator",
        "Scale Generator": "Scale Generator",
    }

    const ModeOption = ({ option }) => {
        const options = {
            "Random Generator": (
                <>
                    <Slider title="Speed in Seconds" state={state} setState={setState} />
                    <Toggle title="Sharp Chords" state={state} setState={setState} />
                    <Toggle title="Flat Chords" state={state} setState={setState} />
                </>
            ),
            "Scale Generator": (
                <>
                    <SelectMenu title="Choose the Key" options={keys} state={state} setState={setState} />
                    {state["Choose the Key"] && state["Choose the Key"] !== "Random" ? (
                        <>
                            <Slider title="Key Change Speed" state={state} setState={setState} />
                            <SelectMenu title="Choose the chords scale" state={state} setState={setState} options={scales} />
                        </>
                    ):("")}
                </>
            ),
        }
        return options[option]
    }

    return (
        <div className='bg-zinc-800 rounded-lg p-2 my-4 mx-auto w-[300px] md:w-[700px]'>
            <div className='rounded md:p-2 text-sm'>
                <div className='text-lg'>
                    <SelectMenu title="Mode" state={state} setState={setState} options={options} />
                </div>
                <div className="relative flex items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400">Configuration</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <ModeOption option={state["Mode"]}/>
            </div>
        </div>
    );
};
