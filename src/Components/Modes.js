import Toggle from './Inputs/Toggle';
import Slider from './Inputs/Slider';
import SelectMenu from './Inputs/SelectMenu'
import TagBox from './Inputs/TagBox'
import { scales, allNotes } from '../Definitions';


const ChordTypes = ({state, setState}) => {
    return (
        <div className='bg-zinc-700 px-2 rounded-lg'>
            <Toggle title={"Show Custom Options"} state={state} setState={setState}/>
            {state["Show Custom Options"] ?
                <>
                    <Slider title="Tonic Inversion(%)" state={state} setState={setState} min='0' max='100' step='1' />
                    <TagBox title="Selected Chord Types" state={state} setState={setState} />
                </>
            :""}
        </div>
    )
}

export default function ModeOption({ state, setState }){
    const keys = allNotes.reduce((a, v) => ({ ...a, [v]: v}), {"Random":""})
    const options = {
        "Random Generator": (<>
            <Slider title="Speed in Seconds" state={state} setState={setState} />
            <Toggle title="Sharp Chords" state={state} setState={setState} />
            <Toggle title="Flat Chords" state={state} setState={setState} />
            <ChordTypes state={state} setState={setState} />
        </>),
        "Scale Generator": (<>
            <SelectMenu title="Choose the Key" options={keys} state={state} setState={setState} />
            {state["Choose the Key"] && state["Choose the Key"] !== "Random" ? (<>
                <Slider title="Key Change Speed" state={state} setState={setState} />
                <SelectMenu title="Choose the chords scale" state={state} setState={setState} options={scales} />
            </>):("")}
            <ChordTypes state={state} setState={setState} />
        </>),
        "Relative Notes": <TagBox title="Selected Relative Notes" state={state} setState={setState} backgroundClass="bg-zinc-700" />
    }
    return options[state["Mode"]]
}