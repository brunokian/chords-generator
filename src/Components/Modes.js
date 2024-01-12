import Toggle from './Inputs/Toggle';
import Slider from './Inputs/Slider';
import SelectMenu from './Inputs/SelectMenu'
import TagBox from './Inputs/TagBox'
import { scales, allNotes } from '../Definitions';


const ChordTypes = ({state, setState}) => {
    return (
        <div className='bg-zinc-700 px-2 py-1 my-4 rounded-lg'>
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
    const notes = [].concat(...Object.keys(allNotes).map(key => allNotes[key]))
    const keys = notes.reduce((a, v) => ({ ...a, [v]: v}), {"Random":""})

    const options = {
        "Random Generator": (<>
            <Slider title="Difficulty" state={state} setState={setState} max="1" min="0" />
            <ChordTypes state={state} setState={setState} />
        </>),
        "Scale Generator": (<>
            <Slider title="Difficulty" state={state} setState={setState} max="1" min="0" />
            <SelectMenu title="Choose the Key" options={keys} state={state} setState={setState} />
            {state["Choose the Key"] && state["Choose the Key"] !== "Random" ? (<>
                <Slider title="Key Change Speed" state={state} setState={setState} max="30" />
                <SelectMenu title="Choose the chords scale" state={state} setState={setState} options={scales} />
            </>):("")}
            <ChordTypes state={state} setState={setState} />
        </>),
        "Relative Notes": <TagBox title="Selected Relative Notes" state={state} setState={setState} backgroundClass="bg-zinc-700" />
    }
    return options[state["Mode"]]
}