import { handleCheckboxChange } from "../../Utils";


export default function Toggle({state, setState, title}) {
    return (
      <label className="flex items-center cursor-pointer my-2">
          <div className="relative">
                <input
                    onChange={(event) => handleCheckboxChange(event, title, state, setState)}
                    type="checkbox"
                    checked={state[title]}
                    id={title.replaceAll(" ", "")}
                    className="sr-only"
                />

                {(state[title]) ? (
                    <>
                        <div className="block bg-emerald-500 w-10 h-6 rounded-full"></div>
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
