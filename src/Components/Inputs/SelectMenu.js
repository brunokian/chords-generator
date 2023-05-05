import { useEffect, useState } from 'react';


export default function SelectMenu() {
	return (
		<div className="text-stone-800 bg-white shadow-lg rounded my-2 p-1">
			<select className="appearance-none w-full py-1 px-2 rounded" name="whatever" id="frm-whatever">
				<option value="">Choose the chords scale</option>
				<option value="1">None</option>
				<option value="2">Bepop(1 - 7 - b7 - 6 - 5 - 4 - 3 - 2)</option>
				<option value="3">Natural(1 - 2 - b3 - 4 - 5 - b6 - b7)</option>
			</select>
			<div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
				<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
					<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
				</svg>
			</div>
		</div>
	)
}
