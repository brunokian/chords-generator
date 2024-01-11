
let naturalNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
let sharpNotes = ['C#', 'D#', 'F#', 'G#', 'A#']
let flatNotes = ['Db', 'Eb', 'Gb', 'Ab', 'Bb']
let allNotes = naturalNotes.concat(flatNotes, sharpNotes)
let relatives = ['2b', '2', '3b', '3', '4', '5b', '5', '5#', '6b', '6', '7b', '7', '7#', '9b', '9', '11', '13b', '13']
let intervals = {
    '0.5': ["2b", "9b", "9-"],
    '1': ["2", "9"],
    '1.5': ["m"],
    '2': [""],
    '2.5': ["4", "11"],
    '3': ["5-", "4+"],
    '3.5': ["5"],
    '4': ["5+", "13-", "13b"],
    '4.5': ["6", "13"],
    '5': ["7"],
    '5.5': ["7M"],
}

let scales = {
    "Natural":  ["1", "2", "b3", "4", "5", "6", "b7"],
    "Bepop":    ["1", "2", "3", "4", "5", "6", "b7", "7"],
    "Harmonic": ["1", "2", "3", "4", "5", "b6", "7"],
}
let voicings = {
    "Thirds": "Thirds",
    "Fourths": "Fourths",
    "Quintals": "Quintals",
}
let modes = {
    "Ionian": 0,
    "Dorian": 1,
    "Phrygian": 2,
    "Lydian": 3,
    "Mixolydian":4,
    "Aeolian": 5,
    "Locrian": 6,
}

export {
    naturalNotes,
    sharpNotes,
    flatNotes,
    allNotes,
    scales,
    voicings,
    relatives,
    modes,
    intervals,
}