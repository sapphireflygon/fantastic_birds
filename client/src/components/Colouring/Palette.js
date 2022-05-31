import React from "react";



const Palette = ({ setCurrentColor }) => {

    const colors = [
        'WHITE', 'RED', 'BLUE', 'NAVY', 'OLIVE', 'GREEN', 'TEAL', 'LIME', 'YELLOW', 'ORANGE', 'CORAL', 'PINK', 'PURPLE', 'FUCHSIA', 'BROWN', 'MAROON', 'BLACK'
    ]

    const changeColor = (event) => {
        return setCurrentColor(event.target.outerText)   
    }
    const changeColorPicker = (event) => {
        return setCurrentColor(event.target.value)
    }

    

    
    return (
        <div id="color-box">
            <div onClick={changeColorPicker}>
                <input id="color-input" type="color" name="head" />
            </div>
            {colors.map(color => {
                return <div onClick={changeColor} style={{ backgroundColor: color }}>{color}</div>
            })}
        </div>)
}

export default Palette