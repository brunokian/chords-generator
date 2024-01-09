import { Howl } from 'howler';


const playSound = (src) => {
    const sound = new Howl({
        src,
        html5: true,
    });
    sound.play()
}

const handleChange = (event, key, state, setState) => {
    state[key] = event.target.value
    setState(state)
}

const handleButton = (key, state, setState) => {
    state[key] = !state[key]
    setState(state)
}

const handleCheckboxChange = (event, key, state, setState) => {
    state[key] = event.target.checked
    setState(state)
}


export {
    handleChange,
    handleCheckboxChange,
    handleButton,
    playSound
}
