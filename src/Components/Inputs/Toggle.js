
export default function Toggle(props) {
    return (
      <label htmlFor="toggleB" className="flex items-center cursor-pointer my-3">
          <div className="relative">
              <input type="checkbox" id="toggleB" className="sr-only" />
              <div className="block bg-stone-400 w-10 h-6 rounded-full"></div>
              <div className="dot absolute top-1 left-1 bg-slate-50 w-4 h-4 rounded-full transition"></div>
          </div>
          <div className="ml-3">{props.children}</div>
      </label>
    );
};
