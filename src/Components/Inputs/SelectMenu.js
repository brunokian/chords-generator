import { handleChange } from "../../Utils";


export default function SelectMenu({state, setState, title, options}) {
	return (
		<>
			<label className="pl-1">{title}</label>
			<div className="text-stone-800 bg-white shadow-lg rounded my-2 p-1">
				<select value={state[title]} onChange={(event) => handleChange(event, title, state, setState)}
					className="appearance-none w-full px-2 rounded" name="whatever" id="frm-whatever">
					{
						Object.keys(options).map(key => <option key={key} defaultValue="0">{key}</option>)
					}
				</select>
			</div>
		</>
	)
}
