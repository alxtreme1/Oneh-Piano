import { createContext, useState, useRef } from 'react'

export const SliderContext = createContext();

export function SliderContextProvider({children}) {
    const [sliderWidth, setSliderWidth] = useState(0);
    const [sliderValue, setSliderValue] = useState(0);

    return(
        <SliderContext.Provider value={{sliderValue, setSliderValue, sliderWidth, setSliderWidth}}>
            {children}
        </SliderContext.Provider>
    )
}