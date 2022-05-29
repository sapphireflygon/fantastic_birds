import React, {useState} from 'react'


const ColorPalette = (currentColor, changeColor) => {

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'turquoise', 'purple', 'pink', 'deeppink']

    

    return (
        <div className="color-palette">
            {colors.map(color => {
                const activeClass = currentColor === color ? 'color-swatch-active' : '';

                return (
                    <div onClick={() => { changeColor(color) }}>
                        <div className={`color-swatch ${activeClass}`} style={{ backgroundColor: color }}></div>
                    </div>
                )
            })}
        </div>
    )
}

export default ColorPalette