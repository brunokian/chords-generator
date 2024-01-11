import { intervals, relatives } from './Definitions';

let chordTypes = () => {
    const types = []
    for (let interval in intervals){
        for (let type of intervals[interval]){
            if (type !== ""){
                types.push(type)
            }
        }
    }
    return types
}

let initialState = {
    "Flat Chords": true,
    "Sharp Chords": true,
    "Relative Notes": false,
    "Show Custom Options": false,
    "Mode": "Random Generator",
    "Speed in Seconds": 2,
    "Key Change Speed": 0,
    "Tonic Inversion(%)": 0,
    "IntervalProgress": [],
    "Selected Chord Types": {"true": [...chordTypes()], "false": []},
    "Selected Relative Notes": {"true": [], "false": [...relatives]},
}

export {
    initialState,
}