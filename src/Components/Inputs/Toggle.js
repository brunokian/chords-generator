import { handleCheckboxChange } from "../../utils";


export default function Toggle({state, setState, title}) {
    return (
      <label htmlFor={title} className="flex items-center cursor-pointer my-3">
          <div className="relative">
                <input onChange={(event) => handleCheckboxChange(event, title, state, setState)} 
                    type="checkbox" id={title} className="sr-only" />

                {(state[title] ?? false) ? (
                    <>
                        <div className="block bg-green-400 w-10 h-6 rounded-full"></div>
                        <div className="dot absolute top-1 left-5 bg-slate-50 w-4 h-4 rounded-full transition"></div>
                    </>
                ):(
                    <>
                        <div className="block bg-stone-400 w-10 h-6 rounded-full"></div>
                        <div className="dot absolute top-1 left-1 bg-slate-50 w-4 h-4 rounded-full transition"></div>
                    </>
                )}
          </div>
          <div className="ml-3">{title}</div>
      </label>
    );
};
