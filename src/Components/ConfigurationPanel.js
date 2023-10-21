// import SelectMenu from './Inputs/SelectMenu';
import Toggle from './Inputs/Toggle';
import Slider from './Inputs/Slider';
import {allChords} from '../Datas';



export default function ConfigurationPanel({state, setState, children}) {
    // const keys = allChords.reduce((a, v) => ({ ...a, [v]: v}), {"Random":""})

    return (
        <div className='bg-zinc-800 rounded-lg p-2 my-4 mx-auto w-[300px] md:w-[700px]'>
            <div className='rounded md:p-2 text-sm'>
                <Slider title="speed" state={state} setState={setState} />
                <Toggle title="sharpChords" state={state} setState={setState} />
                <Toggle title="flatChords" state={state} setState={setState} />

                {/* <div className='bg-stone-600 p-2 rounded'>
                    <SelectMenu title="Choose the Key" options={keys} state={state} setState={setState} />
                    {state["Choose the Key"] && state["Choose the Key"] !== "Random" ? (
                        <>
                            <Slider title="Key change speed" state={state} setState={setState} />
                            <SelectMenu title="Choose the chords scale" state={state} setState={setState} options={{
                                "Bepop": ["1", "7", "b7", "6", "5", "4", "3", "2"],
                                "Natural": ["1", "2", "b3", "4", "5", "b6", "b7"]
                            }}/>
                        </>
                    ):("")}
                </div> */}
            </div>
        </div>
    );
};
