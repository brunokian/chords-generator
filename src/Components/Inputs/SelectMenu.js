import { handleChange } from "../../Utils";


export default function SelectMenu({state, setState, title, options}) {
	return (
		<>
			<label className="pl-1">{title}</label>
			<div className="text-stone-800 rounded my-2 p-1">
				<select value={state[title]} onChange={(event) => handleChange(event, title, state, setState)} id={title.replaceAll(" ", "")}
					className="appearance-none px-2 rounded w-full text-stone-800 shadow-lg" name={title.replaceAll(" ", "")} >
					{
						Object.keys(options).map(key => <option key={key} defaultValue="0">{key}</option>)
					}
				</select>
			</div>
		</>
	)
}
