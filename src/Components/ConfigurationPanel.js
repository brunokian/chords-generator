import Toggle from './Inputs/Toggle';
import Slider from './Inputs/Slider';
import SelectMenu from './Inputs/SelectMenu';
import { allNotes, scales, relatives, chordTypes } from '../Definitions';


export default function ConfigurationPanel({state, setState}) {
    const keys = allNotes.reduce((a, v) => ({ ...a, [v]: v}), {"Random":""})
    const options = {
        "Random Generator": "Random Generator",
        "Scale Generator": "Scale Generator",
        "Relative Notes": "Relative Notes",
    }

    const ChordTypes = () => {
        return (
            <>
                <Slider title="Tonic Inversion(%)" state={state} setState={setState} min='0' max='100' step='1' />
                {chordTypes.map((type) => {
                    return <Toggle title={"Chord type: " + type} state={state} setState={setState} />
                })}
            </>
        )
    }

    const ModeOption = ({ option }) => {
        const options = {
            "Random Generator": (
                <>
                    <Slider title="Speed in Seconds" state={state} setState={setState} />
                    <Toggle title="Sharp Chords" state={state} setState={setState} />
                    <Toggle title="Flat Chords" state={state} setState={setState} />
                    <ChordTypes />
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
                    <ChordTypes />
                </>
            ),
            "Relative Notes": (
                relatives.map((relative) => {
                    return <Toggle title={"Relative: " + relative} state={state} setState={setState} />
                })
            )
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
