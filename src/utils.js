
const handleChange = (event, key, state, setState) => {
    state[key] = event.target.value
    setState(state)
}

const handleButton = (event, key, state, setState) => {
    state[key] = !state[key] ?? true
    setState(state)
}

const handleCheckboxChange = (event, key, state, setState) => {
    state[key] = event.target.checked
    setState(state)
}


export {
    handleChange,
    handleCheckboxChange,
    handleButton
}
