import { useEffect, useState } from 'react';
import HistoryPanel from './HistoryPanel';
import ConfigurationPanel from './ConfigurationPanel';


export default function Template(props) {
	const chordList = ['A', 'B', 'C', 'D'];

	return (
		<div className='bg-stone-800 text-slate-50 antialiased'>
			<div className='h-screen w-screen flex items-center'>
				<HistoryPanel/>
				<ConfigurationPanel>
					{props.children}
				</ConfigurationPanel>
			</div>
		</div>
	);
};
