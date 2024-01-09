import { handleChange } from "../../Utils";


export default function Slider({state, setState, title, min="0.5", max="8", step="0.1"}) {
    return (
        <div className="flex flex-col">
            <div className="mb-2">{title}</div>
            <div>
                <input
                    onChange={(event) => handleChange(event, title, state, setState)}
                    id={title}
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    defaultValue={state[title]}
                    className="w-8/12 h-4 rounded-lg appearance-none cursor-pointer"
                />

                <span className="pl-2">{state[title]}</span>
            </div>
        </div>
    )
}
