import { allChords } from '../Datas';

function HarmonicFieldGenerator() {
    const [chord, setChord] = useState('C')
    const [selectField, setSelectField] = useState(1)
    const [field, setField] = useState([])

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

    const handleSelect = (event) => {
        setSelectField(event.target.value)
    }

}

export default HarmonicFieldGenerator;