
let allNotes = {
    0:  ['A'],
    1:  ['A#', 'Bb'],
    2:  ['B'],
    3:  ['C'],
    4:  ['C#', 'Db'],
    5:  ['D'],
    6:  ['D#', 'Eb'],
    7:  ['E'],
    8:  ['F'],
    9:  ['F#', 'Gb'],
    10: ['G'],
    11: ['G#', 'Ab'],
}

let relatives = {
    '3b':   ["m"],
    '2b':   ["2-"],
    '2':    ["2"],
    '3':    ["3"],
    '4':    ["4"],
    '5b':   ["4+", "5-"],
    '5':    ["5"],
    '5#':   ["5+"],
    '6':    ["6"],
    '7':    ["7"],
    '7#':   ["7M"],
    '9b':   ["9b", "9-"],
    '9':    ["9"],
    '11':   ["11"],
    '13b':  ["11+", "13b"],
    '13':   ["13"],
}

let intervals = {
    0:  ["2-", "9b", "9-"],
    1:  ["2", "9"],
    2:  ["m"],
    3:  ["3"],
    4:  ["4", "11"],
    5:  ["5-", "4+", "11+"],
    6:  ["5"],
    7:  ["5+", "13-", "13b"],
    8:  ["6", "13"],
    9:  ["7"],
    10: ["7M"],
}

let variations = {
    "parenthesis": ["4+", "5-", "5+", "9b", "9-", "11", "11+", "13-", "13b", "13"],
    "slash": ["2-", "2", "4", "6", "7", "7M", "9"],
}

let variationOrder = [
    "2-", "2", "m", "3", "4", "4+", "5-", "5", "5+", "6", "7", "7M", "9b", "9-", "9", "11", "11+", "13-", "13b", "13"
]

let scales = {
    "Major Natural":            ["C", "D",  "E",    "F",    "G",    "A",   "B"],
    "Minor Natural":            ["C", "D",  "Eb",   "F",    "G",    "Ab",  "Bb"],
    "Major Harmonic":           ["C", "D",  "E",    "F",    "G",    "Ab",  "B"],
    "Major Melodic":            ["C", "D",  "E",    "F",    "G",    "Ab",  "Bb"],
    "Major Bepop":              ["C", "D",  "E",    "F",    "G",    "Ab",  "A",     "B"],
    "Whole Tone":               ["C", "D",  "E",    "F#",   "G#",   "Bb"],
    "Lydian Dominant":          ["C", "D",  "E",    "F#",   "G",    "A",   "Bb"],
    "Minor Harmonic":           ["C", "D",  "Eb",   "F",    "G",    "Ab",  "Bb"],
    "Minor Melodic":            ["C", "D",  "Eb",   "F",    "G",    "A",   "B"],
    "Major Pentatonic Blues":   ["C", "D",  "Eb",   "E",    "G",    "A"],
    "Minor Bepop":              ["C", "D",  "Eb",   "F",    "G",    "Ab",  "Bb",    "B"],
    "Whole-Half Diminished":    ["C", "D",  "Eb",   "F",    "Gb",   "Ab",  "A",     "B"],
    "Phrygian Dominant":        ["C", "Db", "E",    "F",    "G",    "Ab",  "Bb"],
    "Altered Dominant":         ["C", "Db", "Eb",   "Fb",   "Gb",   "Ab",  "Bb"],
    "Dominant Diminished":      ["C", "Db", "Eb",   "E",    "F#",   "G",   "A",     "Bb"],
    "Minor Pentatonic Blues":   ["C", "Eb", "F",    "Gb",   "G",    "Bb"],
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
    allNotes,
    scales,
    voicings,
    relatives,
    modes,
    intervals,
    variations,
    variationOrder
}