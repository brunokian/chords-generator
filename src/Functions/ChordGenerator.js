import { allNotes, variations, intervals, variationOrder } from '../Definitions';

const chordGenerator = (state, scaleKeyNumer=undefined, scaleNotes=undefined) => {
    const chordVariations = []
    const chordSlashVariations = []
    const chordParenthesisVariations = []

    for (let interval in intervals){
        var difficulty = state["Difficulty"] / 10
        if (parseInt(interval) === 2){
            difficulty = 0.5
        }
        if (Math.random() > (1 - difficulty)){
            let variation = intervals[interval][Math.floor(Math.random() * Object.keys(intervals[interval]).length)]
            var finalNote;
            
            if (scaleNotes !== undefined){
                const variationInterval = Object.keys(intervals).filter(interval => intervals[interval].includes(variation))[0]
                finalNote = allNotes[(parseInt(variationInterval) + parseInt(scaleKeyNumer) + 1) % Object.keys(allNotes).length][0]
            }
            if (scaleNotes === undefined || scaleNotes.includes(finalNote)){
                let cleanVariation = variation.replaceAll("-", "").replaceAll("+", "").replaceAll("b", "").replaceAll("#", "").replaceAll("M", "")
                let allVariations = [...chordVariations, ...chordSlashVariations, ...chordParenthesisVariations].map(
                    it => it.replaceAll("-", "").replaceAll("+", "").replaceAll("b", "").replaceAll("#", "").replaceAll("M", "")
                )
                if (state["Selected Chord Types"]["true"].includes(variation) && !allVariations.includes(cleanVariation)){
                    if (variations["parenthesis"].includes(variation)){
                        if (!(cleanVariation === "13" && allVariations.includes("6"))){
                            if (!(cleanVariation === "11" && allVariations.includes("4"))){
                                if (!(cleanVariation === "9" && allVariations.includes("2"))){
                                    chordParenthesisVariations.push(variation)
                                }
                            }
                        }
                    }
                    else{
                        if (variations["slash"].includes(variation)){
                            if (cleanVariation === "6" && allVariations.includes("7")){
                                chordParenthesisVariations.push(variation.replace("6", "13"))
                            }
                            else{
                                if (!(cleanVariation === "6" && allVariations.includes("13"))){
                                    if (!(cleanVariation === "7" && allVariations.includes("6"))){
                                        if (!(cleanVariation === "4" && allVariations.includes("11"))){
                                            if (!(cleanVariation === "9" && allVariations.includes("2")) && !(cleanVariation === "2" && allVariations.includes("9"))){
                                                if (variations["parenthesis"].includes(variation)){
                                                    chordParenthesisVariations.push(variation)
                                                }else{
                                                    chordSlashVariations.push(variation)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else{
                            if (variation !== "3" && variation !== "5"){
                                chordVariations.push(variation)
                            }
                        }
                    }
                }
            }
        }
    }
    if (scaleNotes !== undefined){
        var variation = "m"
        const variationInterval = Object.keys(intervals).filter(interval => intervals[interval].includes(variation))[0]
        finalNote = allNotes[(parseInt(variationInterval) + parseInt(scaleKeyNumer) + 1) % Object.keys(allNotes).length][0]
        if (!(chordVariations.includes(variation)) && scaleNotes.includes(finalNote)){
            chordVariations.push(variation)
        }
    }
                
    return {chordVariations, chordSlashVariations, chordParenthesisVariations}
}

const randomChord = (state) => {
    const notes = [].concat(...Object.keys(allNotes).map(key => allNotes[key]))
    const note = notes[Math.floor(Math.random() * notes.length)]
    const {chordVariations, chordSlashVariations, chordParenthesisVariations} = chordGenerator(state)

    if (note === state["currentChord"]){
        return chordGenerator(state)
    }
    else{
        return mountChord(note, chordVariations, chordSlashVariations, chordParenthesisVariations)
    }
}

const mountChord = (note, chordVariations, chordSlashVariations, chordParenthesisVariations) => {
    chordVariations.sort((a, b) => variationOrder.indexOf(a) - variationOrder.indexOf(b));
    chordSlashVariations.sort((a, b) => variationOrder.indexOf(a) - variationOrder.indexOf(b));
    chordParenthesisVariations.sort((a, b) => variationOrder.indexOf(a) - variationOrder.indexOf(b));

    var chordVariation = `${note}${chordVariations.join("")}${chordSlashVariations.join("/")}`
    if (chordParenthesisVariations.length > 0){
        chordVariation += `(${chordParenthesisVariations.join("/")})`
    }
    console.log(chordVariation)
    return chordVariation
}

export {
    chordGenerator,
    randomChord,
    mountChord,
}
