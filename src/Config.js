import { intervals, relatives, variationOrder } from './Definitions';

let chordTypes = () => {
    const types = []
    for (let interval in intervals){
        for (let type of intervals[interval]){
            if (type !== ""){
                types.push(type)
            }
        }
    }
    return types.sort((a, b) => variationOrder.indexOf(a) - variationOrder.indexOf(b))
}

let initialState = {
    "currentChord": "C",
    "Relative Notes": false,
    "Show Custom Options": false,
    "Mode": "Random Generator",
    "Speed in Seconds": 2,
    "Key Change Speed": 0,
    "Tonic Inversion(%)": 0,
    "IntervalProgress": 0,
    "Difficulty": 0.15,
    "Selected Chord Types": {"true": [...chordTypes()], "false": []},
    "Selected Relative Notes": {"true": [], "false": [...Object.keys(relatives)]},
}

export {
    initialState,
}