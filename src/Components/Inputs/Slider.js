import { handleChange } from "../../utils";


export default function Slider({state, setState, title}) {
    return (
        <div className="flex flex-col">
            <div className="mb-2">{title}</div>
            <div>
                <input onChange={(event) => handleChange(event, title, state, setState)}
                    id="disabled-range"
                    type="range"
                    defaultValue="2"
                    className="w-11/12 h-4 bg-stone-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="pl-1">{state[title] ?? 2}</span>
            </div>
        </div>
    )
}
