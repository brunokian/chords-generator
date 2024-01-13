import { scales, allNotes } from '../Definitions';
import { chordGenerator, mountChord } from './ChordGenerator';


export default function ScaleGenerator(state) {
    const scaleIntervals = scales[state["Choose the Scale"]].map(note => {
        return parseInt(Object.keys(allNotes).filter(interval => allNotes[interval].includes(note))[0])
    })
    const absoluteInterval = scaleIntervals.map(interval => {
        if (interval < scaleIntervals[0]){
            interval = Object.keys(allNotes).length + parseInt(interval)
        }
        return (interval - scaleIntervals[0]) % Object.keys(allNotes).length
    })
    const startKey = Object.keys(allNotes).filter(interval => allNotes[interval].includes(state["Choose the Key"]))[0]
    const scaleNotes = absoluteInterval.map(interval => {
        return allNotes[(parseInt(interval) + parseInt(startKey)) % Object.keys(allNotes).length][0]
    })
    const note = scaleNotes[Math.floor(Math.random() * scaleNotes.length)]
    const noteKey = Object.keys(allNotes).filter(interval => allNotes[interval].includes(note))[0]
    const {chordVariations, chordSlashVariations, chordParenthesisVariations} = chordGenerator(state, noteKey, scaleNotes)
 
    return mountChord(note, chordVariations, chordSlashVariations, chordParenthesisVariations)
}
