
export default function Slider(props) {
    return (
        <div>
            <label htmlFor="disabled-range" className="block mb-2">{props.children}</label>
            <input id="disabled-range" type="range" defaultValue="0" className="w-full h-4 bg-stone-200 rounded-lg appearance-none cursor-pointer"/>
        </div>
    )
}