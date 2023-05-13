
export default function HistoryPanel() {
	const chordList = ['A', 'B', 'C', 'D'];

	return (
		<div className='h-full md:p-4'>
			<div className='h-full bg-stone-700 rounded-lg md:p-1'>
				<div className='text-md p-1'>
					History
				</div>
				<div className='rounded bg-stone-600 py-1'>
					{chordList.map((chord, index) => <div key={index} className='text-center py-1'> {chord} </div>)}
				</div>
			</div>
		</div>
	);
};
