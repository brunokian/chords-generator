import { allNotes, variations, intervals, variationOrder } from '../Definitions';


export default function chordGenerator(state)
{
    const notes = [].concat(...Object.keys(allNotes).map(key => allNotes[key]))
    const note = notes[Math.floor(Math.random() * notes.length)]
    const chordVariations = []
    const chordSlashVariations = []
    const chordParenthesisVariations = []

    for (let interval in intervals){
        var difficulty = state["Difficulty"]
        if (parseInt(interval) === 2){
            difficulty = 0.5
        }
        if (Math.random() > (1 - difficulty)){
            let variation = intervals[interval][Math.floor(Math.random() * Object.keys(intervals[interval]).length)]
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
    chordVariations.sort((a, b) => variationOrder.indexOf(a) - variationOrder.indexOf(b));
    chordSlashVariations.sort((a, b) => variationOrder.indexOf(a) - variationOrder.indexOf(b));
    chordParenthesisVariations.sort((a, b) => variationOrder.indexOf(a) - variationOrder.indexOf(b));
    
    var chordVariation = `${note}${chordVariations.join("")}${chordSlashVariations.join("/")}`
    if (chordParenthesisVariations.length > 0){
        chordVariation += `(${chordParenthesisVariations.join("/")})`
    }
    console.log(chordVariation)

    if (note === state["currentChord"]){
        return chordGenerator(state)
    }
    else{
        return chordVariation
    }
}