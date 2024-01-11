
export default function TagBox({state, setState, title}) {
    const handleClick = (item, index, is_active) => {
        state[title][is_active].splice(index, 1)
        if (is_active === "true"){
            state[title]["false"].push(item)
        }
        else{
            state[title]["true"].push(item)
        }
        setState(state)
    }

    const GetItems = ({is_active}) => {
        const color = is_active === "true" ? "bg-cyan-300" : "bg-red-200"
        return state[title][is_active].map((item, index) => {
            return (
                <div 
                    className={"cursor-pointer rounded-full shadow p-2 m-1 text-black w-10 h-9 text-center grow-0 " + color}
                    onClick={() => handleClick(item, index, is_active)}
                    key={index}>
                    {item}
                </div>
            )
        })
    }

    return (<>
        <div className="my-3">{title}</div>
        <div className="flex flex-row">
            <div className="rounded bg-zinc-700 h-42 p-3 w-full flex flex-row flex-wrap mr-2">
                <GetItems is_active="true" />
            </div>
            <div className="rounded bg-zinc-700 h-42 p-3 w-full flex flex-row flex-wrap">
                <GetItems is_active="false" />
            </div>
        </div>
    </>);
};
