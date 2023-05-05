import { useEffect, useState } from 'react';


export default function HistoryPanel() {
	const chordList = ['A', 'B', 'C', 'D'];

	return (
		<div className='h-full p-4'>
			<div className='h-full bg-stone-700 rounded-lg p-2'>
				<div className='text-2xl p-4'>
					History
				</div>
				<div className='rounded bg-stone-600 w-full px-4 py-2 '>
					{chordList.map((chord) => <div className='text-center py-1 font-medium'> {chord} </div>)}
				</div>
			</div>
		</div>
	);
};
