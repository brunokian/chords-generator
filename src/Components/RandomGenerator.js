import { naturalChords, flatChords, sharpChords } from '../Datas';


function RandomGenerator( state ) {
  // const selectChords = "all"
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
        return randomChords(naturalChords.concat(sharpChords.concat(flatChords)))
      }
      if (state["Flat Chords"]) {
        return randomChords(naturalChords.concat(flatChords))
      }
      if (state["Sharp Chords"]) {
        return randomChords(naturalChords.concat(sharpChords))
      }
      return randomChords(naturalChords)
    } catch (error) {
      console.log('erro ao tentar ler o estado');
    }
  }

  return chordsGenerator()
}

export default RandomGenerator;