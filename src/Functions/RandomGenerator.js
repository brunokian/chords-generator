import { naturalNotes, flatNotes, sharpNotes } from '../Definitions';


function RandomGenerator(state) {
  const hasVariation = true

  const randomChords = (arrayChords) => {
    const index = Math.floor(Math.random() * arrayChords.length)

    let newChord = arrayChords[index]
    if (hasVariation && Math.random() > 0.5) {
      newChord = newChord + 'm'
    }
    if (hasVariation && Math.random() > 0.5) {
      newChord = newChord + '7'
    }
    if (hasVariation && Math.random() > 0.5 && newChord.includes('7')) {
      newChord = newChord + 'M'
    }
    return newChord
  }

  const chordsGenerator = () => {
    try {
      
      if (state["Flat Chords"] && state["Sharp Chords"]) {
        return randomChords(naturalNotes.concat(sharpNotes.concat(flatNotes)))
      }
      if (state["Flat Chords"]) {
        return randomChords(naturalNotes.concat(flatNotes))
      }
      if (state["Sharp Chords"]) {
        return randomChords(naturalNotes.concat(sharpNotes))
      }
      return randomChords(naturalNotes)
    } catch (error) {
      console.log('erro ao tentar ler o estado');
    }
  }

  return chordsGenerator()
}

export default RandomGenerator;