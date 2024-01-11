import { allNotes } from '../Definitions';


export default function chordGenerator(state)
{
    const note = allNotes[Math.floor(Math.random() * allNotes.length)]

    if (note === state["currentChord"]){
        return chordGenerator(state)
    }
    else{
        return note
    }
    //Examples: E, G5+, E, A7M, Bbm, F#4/6, D7M/F#, Fº(13-), D°, Fm(5-), Em7(11), A7(9-/13), Em7M(9-/11/13)
}