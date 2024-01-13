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
    const getKeys = () => {
        const notes = [].concat(...Object.keys(allNotes).map(key => allNotes[key]))
        const result = {}
        for (let note of notes){
            result[note] = note
        }
        return result
    }

    const options = {
        "Random Generator": (<>
            <Slider title="Difficulty" state={state} setState={setState} max="10" min="0" />
            <ChordTypes state={state} setState={setState} />
        </>),
        "Scale Generator": (<>
            <Slider title="Difficulty" state={state} setState={setState} max="10" min="0" />
            <SelectMenu title="Choose the Key" options={getKeys()} state={state} setState={setState} />
            <SelectMenu title="Choose the Scale" state={state} setState={setState} options={scales} />
            <ChordTypes state={state} setState={setState} />
        </>),
        "Relative Notes": <TagBox title="Selected Relative Notes" state={state} setState={setState} backgroundClass="bg-zinc-700" />
    }
    return options[state["Mode"]]
}