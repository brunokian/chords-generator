import { handleChange } from "../../utils";


export default function Slider({state, setState, title}) {
    return (
        <div className="flex flex-col ">
            <div className="mb-2">{title}</div>
            <div>
                <input 
                    onChange={(event) => handleChange(event, title, state, setState)}
                    id="disabled-range"
                    type="range"
                    min="0.5"
                    max="8"
                    step="0.1"
                    defaultValue={state["speed"]}
                    className="w-11/12 h-4 rounded-lg appearance-none cursor-pointer"
                />

                <span className="pl-1">{state[title]}</span>
            </div>
        </div>
    )
}
