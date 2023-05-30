import HistoryPanel from './HistoryPanel';
import ConfigurationPanel from './ConfigurationPanel';


export default function Template({state, setState, children}) {
	return (
		<div className='bg-stone-800 text-slate-50 antialiased'>
			<div className='h-screen w-screen flex items-center'>
				<HistoryPanel state={state} setState={setState}/>
				<div className='w-full h-full flex flex-col'>
            		<div className='m-auto'>{children}</div>
					{!state.hasStarted ? (
						<ConfigurationPanel state={state} setState={setState}/>
					):("")}
				</div>
			</div>
		</div>
	);
};
