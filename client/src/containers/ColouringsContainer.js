// our extensions; can add fun games when mvp done
import React, {useState} from 'react'
import Robin from '../components/Colouring/Robin';
import Owl from '../components/Colouring/Owl';
import Eric from '../components/Colouring/Eric';
import './ColouringsContainer.css'

const ColouringsContainer = () => {
    const colourHome = (
        <div className="colour-nav--homepage">
            <h2>Click on a bird name to get started!</h2>
        </div>
    );

    const colourRobin = <div><Robin /></div>
    const colourOwl = <div><Owl /></div>
    const colourEric = <div><Eric /></div>

    const [selectedColour, setSelectedColour] = useState(colourHome);

    const handleColourChange = (event) => {
        console.log(event.target.innerText)
        if (event.target.innerText === "Robin") {
            setSelectedColour(colourRobin);
        } else if (event.target.innerText === "Owl") {
            console.log(colourOwl)
            setSelectedColour(colourOwl);
        } else if (event.target.innerText === "Eric") {
            setSelectedColour(colourEric);
        } else {
            setSelectedColour(colourHome)
        }
    }

    return (
        <div className="colouring-container">
            <table cellPadding="0" cellSpacing="0" >
                <tbody className='act-nav--tbody' >
                    <tr className="act-nav--tr">
                        <td onClick={handleColourChange} className="act-nav--td tab-home">HOME</td>
                        <td rowSpan="6" className="act-nav--td-act">{selectedColour}</td>
                    </tr>
                    <tr className="act-nav--tr">
                        <td onClick={handleColourChange} className="act-nav--td tab-robin" >Robin</td>
                    </tr>
                    <tr className="act-nav--tr">
                        <td onClick={handleColourChange} className="act-nav--td tab-owl" >Owl</td>
                    </tr>
                    <tr className="act-nav--tr">
                        <td onClick={handleColourChange} className="act-nav--td tab-eric" >Eric</td>
                    </tr>
                    <tr >
                        <td className="blank-row"></td>
                    </tr>
                    <tr >
                        <td className="blank-row">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ColouringsContainer;