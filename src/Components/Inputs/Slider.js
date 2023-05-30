import { handleChange } from "../../utils";


export default function Slider({state, setState, title}) {
    return (
        <div>
            <label htmlFor="disabled-range" className="block mb-2">{title}</label>
            <input onChange={(event) => handleChange(event, title, state, setState)}
                id="disabled-range"
                type="range"
                defaultValue="0"
                className="w-full h-4 bg-stone-200 rounded-lg appearance-none cursor-pointer"
            />
        </div>
    )
}
