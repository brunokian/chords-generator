
export default function Tabs({state, setState, title, options}) {
    const handleClick = (tab) => {
        state[title] = tab
        setState(state)
    }

	return (
        <div className="bg-stone-900 rounded flex flex-row">
            {Object.keys(options).map(key => (
                <div className={"cursor-pointer rounded-t px-3 p-1 " + (state[title] === key ? "bg-zinc-800" : "")}
                    onClick={() => handleClick(key)}
                    key={key}>
                    {key}
                </div>
            ))}
        </div>
	)
}
