import { useEffect, useState } from 'react';
import SelectMenu from './Inputs/SelectMenu';


export default function ConfigurationPanel(props) {
  return (
    <div className='w-full h-full flex flex-col'>
        <div className='m-auto'>
            {props.children}
        </div>
        <div className='bg-stone-700 rounded-lg p-2 my-4 mx-auto w-[50%]'>
            <div className='text-2xl py-4 px-12'>
                Configuration
            </div>
            <div className='bg-stone-600 rounded p-2'>
                <div>
                    <label for="disabled-range" className="block mb-2 text-lg">Chord changes speed</label>
                    <input id="disabled-range" type="range" value="10" className="w-full h-3 bg-stone-200 rounded-lg appearance-none cursor-pointer"/>
                </div>
                <div>
                    <label for="toggleB" className="flex items-center cursor-pointer my-3">
                        <div className="relative">
                            <input type="checkbox" id="toggleB" className="sr-only" />
                            <div className="block bg-stone-400 w-14 h-8 rounded-full"></div>
                            <div className="dot absolute left-1 top-1 bg-slate-50 w-6 h-6 rounded-full transition"></div>
                        </div>
                        <div className="ml-3 text-lg">Sharp chords</div>
                    </label>
                    <label for="toggleB" className="flex items-center cursor-pointer my-3">
                        <div className="relative">
                            <input type="checkbox" id="toggleB" className="sr-only" />
                            <div className="block bg-stone-400 w-14 h-8 rounded-full"></div>
                            <div className="dot absolute left-1 top-1 bg-slate-50 w-6 h-6 rounded-full transition"></div>
                        </div>
                        <div className="ml-3 text-lg">Flat chords</div>
                    </label>
                    <SelectMenu ></SelectMenu>
                </div>
            </div>
        </div>
    </div>
  );
};
