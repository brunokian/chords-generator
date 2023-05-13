
export default function SelectMenu({title, options}) {
	return (
		<>
			<label>{title}</label>
			<div className="text-stone-800 bg-white shadow-lg rounded my-2 p-1">
				<select className="appearance-none w-full px-2 rounded" name="whatever" id="frm-whatever">
					{
						Object.keys(options).map(key => <option key={key} defaultValue="1">{key}</option>)
					}
				</select>
			</div>
		</>
	)
}
