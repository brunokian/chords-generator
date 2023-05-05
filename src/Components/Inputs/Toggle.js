import { useEffect, useState } from 'react';


export default function Toggle(props) {
    return (
      <label for="toggleB" className="flex items-center cursor-pointer my-3">
          <div className="relative">
              <input type="checkbox" id="toggleB" className="sr-only" />
              <div className="block bg-stone-400 w-14 h-8 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-slate-50 w-6 h-6 rounded-full transition"></div>
          </div>
          <div className="ml-3 text-lg">{props.children}</div>
      </label>
    );
};
