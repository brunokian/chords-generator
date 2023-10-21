import HistoryPanel from './HistoryPanel';
import ConfigurationPanel from './ConfigurationPanel';


export default function Template({state, setState, children}) {
	return (
		<div className='bg-emerald-500 text-slate-50 antialiased'>
			<div className='h-screen w-screen flex justify-center'>
				{/* <HistoryPanel state={state} setState={setState}/> */}
				<div className='w-[1600px] bg-zinc-900 h-full flex flex-col'>
            		<div className='my-auto mx-auto'>{children}</div>
					{!state.hasStarted ? (
						<ConfigurationPanel state={state} setState={setState}/>
					):("")}
				</div>
			</div>
		</div>
	);
};
