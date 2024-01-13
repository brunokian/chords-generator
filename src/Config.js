import { relatives } from './Definitions';

let initialState = {
    "currentChord": "C",
    "Relative Notes": false,
    "Show Custom Options": false,
    "Choose the Key": "C",
    "Choose the Scale": "Major Natural",
    "Mode": "Random Generator",
    "Speed in Seconds": 2,
    "Tonic Inversion(%)": 0,
    "IntervalProgress": 0,
    "Difficulty": 1.5,
    "Selected Chord Types": {
        "true": ["m", "3", "4", "5", "6", "7", "7M", "9-", "9", "11+", "13"], 
        "false": ["2", "2-", "4+", "5-", "5+", "9b", "11", "13-", "13b"],
    },
    "Selected Relative Notes": {"true": [], "false": [...Object.keys(relatives)]},
}

export {
    initialState,
}