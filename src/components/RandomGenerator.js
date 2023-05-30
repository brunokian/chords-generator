import { naturalChords, flatChords, sharpChords } from '../Datas';


function RandomGenerator() {
  const selectChords = "all"
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
    if (selectChords === 'flat') {
      return randomChords(naturalChords.concat(flatChords))
    }
    if (selectChords === 'sharp') {
      return randomChords(naturalChords.concat(sharpChords))
    }
    if (selectChords === 'all') {
      return randomChords(naturalChords.concat(sharpChords.concat(flatChords)))
    }
    return randomChords(naturalChords)
  }

  return chordsGenerator()
}

export default RandomGenerator;