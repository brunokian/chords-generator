import { allNotes } from '../Definitions';


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
      return randomChords(allNotes)
    } catch (error) {
      console.log('erro ao tentar ler o estado');
    }
  }

  return chordsGenerator()
}

export default RandomGenerator;