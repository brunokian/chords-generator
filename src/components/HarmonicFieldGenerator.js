import React, { useEffect, useState } from 'react';
import { allChords } from '../Datas';

function HarmonicFieldGenerator() {
    const [chord, setChord] = useState('C')
    const [selectField, setSelectField] = useState('')
    const [selectTimer, setSelectTimer] = useState(2)
    const [hasStarted, setHasStarted] = useState(false)
    const [intervalId, setIntervalId] = useState(null)
 
    const randomChords = (n) => {
        const index = Math.floor(Math.random() * majorHarmonicField.length)
        const newChord = majorHarmonicField(n)[index]
        if (newChord !== chord) {
            setChord(newChord)
            return newChord
        } else {
            randomChords(n)
        }
    }

    const majorHarmonicField = (n) => {
        let a = allChords.slice(n).concat(allChords.slice(0, n))
        let b = [a[0], a[2], a[4], a[5], a[7], a[9], a[11]]
        b[0] += '7M'
        b[1] += 'm7'
        b[2] += 'm7'
        b[3] += '7M'
        b[4] += '7'
        b[5] += 'm7'
        b[6] += 'm7(b5)'
        return b
    }

    // useEffect(() => {
    //     if (hasStarted) {
    //         let timer = selectTimer * 1000
    //         const id = setInterval(() => {
    //             chordsGenerator()
    //         }, timer)
    //         setIntervalId(id)
    //     }
    // }, [hasStarted])

    // const handleClick = () => {
    //     setHasStarted(!hasStarted)
    //     if (intervalId) {
    //         clearInterval(intervalId)
    //         setIntervalId(null)
    //     }
    // }

    return (
        // let newtest = test.slice(n).concat(test.slice(0, n))
        <div>

            <h1>{chord}</h1>
            {/* <button onClick={handleClick}>
                {hasStarted ? 'STOP' : 'START'}
            </button>

            <select value={selectChords} onChange={(event) => handleSelect(event, 'chords')}>
                <option value='natural'>only natural</option>
                <option value='flat'>flat</option>
                <option value='sharp'>sharp</option>
                <option value='all'>all</option>
            </select>

            <label for='timer'>Timer</label>
            <select name='timer' value={selectTimer} onChange={(event) => handleSelect(event, 'timer')}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
            </select> */}
        </div>
    )
}

export default HarmonicFieldGenerator;