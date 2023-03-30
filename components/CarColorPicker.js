import { useState } from 'react'; // hook is a prebuilt react function
import Image from 'next/image';
import Swatches from './Swatches';


const CarColorPicker = ({colors}) => {
    const [activeColor, setActiveColor] = useState(colors[0]); // take the first color out of color list

    return <div>
        <h2>Color picker</h2>
        <div>
            <Image 
                src={`/vehicles/crosstrek/colors/crosstrek-${activeColor.slug}.webp`}
                alt={`Crosstrek ${activeColor.name}`}
                width={575}
                height={300}
            />
        </div>
        <Swatches 
            colors={colors} 
            clickHandler={setActiveColor}
            activeColor= {activeColor}
        />
        <h3>{activeColor.name}</h3>
    </div>
}
export default CarColorPicker;