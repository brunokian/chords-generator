import SelectMenu from './Inputs/SelectMenu';
import Toggle from './Inputs/Toggle';
import Slider from './Inputs/Slider';
import chordsList from '../Datas';


export default function ConfigurationPanel(props) {
    const keys = chordsList.reduce((a, v) => ({ ...a, [v]: v}), {"Random":""})

    return (
        <div className='w-full h-full flex flex-col'>
            <div className='m-auto'>{props.children}</div>
            <div className='bg-stone-700 rounded-lg p-2 my-4 mx-auto lg:w-[30%] md:w-[55%] w-full'>
                <div className='rounded md:p-2  text-sm'>
                    <Slider>Chord changes speed</Slider>
                    <Toggle>Sharp Chords</Toggle>
                    <Toggle>Flat Chords</Toggle>
                    <div className='bg-stone-600 p-2 rounded'>
                        <SelectMenu title={"Choose the Key"} options={keys}/>
                        <Slider>Key change speed</Slider>
                        <SelectMenu title={"Choose the chords scale"} options={{
                            "Bepop": ["1", "7", "b7", "6", "5", "4", "3", "2"],
                            "Natural": ["1", "2", "b3", "4", "5", "b6", "b7"]
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
