
let naturalNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
let sharpNotes = ['C#', 'D#', 'F#', 'G#', 'A#']
let flatNotes = ['Db', 'Eb', 'Gb', 'Ab', 'Bb']
let allNotes = naturalNotes + flatNotes + sharpNotes
let relatives = ['2b', '2', '3b', '3', '4', '5b', '5', '5#', '6b', '6', '7b', '7', '7#', '9b', '9', '11', '13b', '13']
let chordTypes = ['m', '4', '5-', '5+', '6', '7', '7M', '9b', '9', '11', '11+', '13-', '13', '°']

let scales = {
    "Natural":  ["1", "2", "b3", "4", "5", "b6", "b7"],
    "Bepop":    ["1", "2", "3", "4", "5", "6", "b7", "7"],
    "Harmonic": ["1", "2", "3", "4", "5", "b6", "7"],
}
let voicings = {
    "Thirds": "Thirds",
    "Fourths": "Fourths",
    "Quintals": "Quintals",
}

export {
    naturalNotes,
    sharpNotes,
    flatNotes,
    allNotes,
    scales,
    voicings,
    relatives,
    chordTypes
}