import { allNotes, intervals, relatives } from '../Definitions';


export default function relativeGenerator(state)
{
    var note = state["lastRelativeNote"]
    if (!("lastRelativeNote" in state)){
        const notes = [].concat(...Object.keys(allNotes).map(key => allNotes[key]))
        note = notes[Math.floor(Math.random() * notes.length)]
    }
    
    const selectedRelatives = state["Selected Relative Notes"]["true"]
    const relative = selectedRelatives[Math.floor(Math.random() * selectedRelatives.length)]

    const start = Object.keys(allNotes).filter(key => allNotes[key].includes(note))
    const interval = Object.keys(intervals).filter(key => intervals[key].includes(relatives[relative][0]))[0]

    const relativeNotes = allNotes[(parseInt(start) + parseInt(interval) + 1) % 12]
    const relativeNote = relativeNotes[Math.floor(Math.random() * relativeNotes.length)]

    state["lastRelativeNote"] = relativeNote

    return `${note} (${relative})`
}