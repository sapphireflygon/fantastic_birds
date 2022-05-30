import React from "react";

const Palette = ({ setCurrentColor }, currentColor) => {

    const changeColor = (event) => {
        return setCurrentColor(event.target.outerText)
    }

    const changeColorPicker = (event) => {
        return setCurrentColor(event.target.value)
    }


    return (
        <div id="color-box">
            <div onClick={changeColorPicker}>
                <input type="color" id="head" name="head" />
            </div>
            <div onClick={changeColor} style={{ backgroundColor: '#DEDEDE' }}>WHITE</div>
            <div onClick={changeColor} style={{ backgroundColor: 'red' }}>RED</div>
            <div onClick={changeColor} style={{ backgroundColor: 'blue', color: '#DEDEDE' }} >BLUE</div>
            <div onClick={changeColor} style={{ backgroundColor: 'navy', color: '#DEDEDE' }} >NAVY</div>
            <div onClick={changeColor} style={{ backgroundColor: 'olive' }} >OLIVE</div>
            <div onClick={changeColor} style={{ backgroundColor: 'green' }} >GREEN</div>
            <div onClick={changeColor} style={{ backgroundColor: 'teal' }} >TEAL</div>
            <div onClick={changeColor} style={{ backgroundColor: 'lime' }} >LIME</div>
            <div onClick={changeColor} style={{ backgroundColor: 'yellow' }} >YELLOW</div>
            <div onClick={changeColor} style={{ backgroundColor: 'orange' }} >ORANGE</div>
            <div onClick={changeColor} style={{ backgroundColor: 'coral' }}>CORAL</div>
            <div onClick={changeColor} style={{ backgroundColor: 'pink' }}>PINK</div>
            <div onClick={changeColor} style={{ backgroundColor: 'purple', color: '#DEDEDE' }} >PURPLE</div>
            <div onClick={changeColor} style={{ backgroundColor: 'Fuchsia' }}>FUCHSIA</div>
            <div onClick={changeColor} style={{ backgroundColor: 'maroon', color: '#DEDEDE' }} >MAROON</div>
            <div onClick={changeColor} style={{ backgroundColor: 'grey' }} >GREY</div>
            <div onClick={changeColor} style={{ backgroundColor: 'black', color: '#DEDEDE' }} >BLACK</div>
        </div>)
}

export default Palette