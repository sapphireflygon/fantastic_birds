import React, { useState } from 'react'
import OddOneOutDetail from './OddOneOutDetail'
import OddOneOutSuperDetail from './OddOneOutSuperDetail'




const OddOneOutActivity = () => {

    const [click, setClick] = useState(false)
    const [superClick, setSuperClick] = useState(false)


    const handleClick = () => {
        if (click == false) {
            setClick(true)
        }
        else {
            setClick(false)
        }
    }
    const handleSuperClick = () => {
        if (superClick == false) {
            setSuperClick(true)
        }
        else {
            setSuperClick(false)
        }
    }

    const handleClear = () => {
        setClick(false)
        setSuperClick(false)
    }

    const bat = require('./OddOneOutIMG/findbat.png')
    const superman = require('./OddOneOutIMG/superman.png')




    return (<div>
        <h1> IS IT A BIRD?</h1>
        <div id="main_div">
            <table>
                <tbody>
                    <tr>
                        <td></td>
                        <td onClick={handleClick}><img src={bat} height="90" /></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td onClick={handleSuperClick}><img src={superman} height="90" /></td>
                        <td></td>
                        <td onClick={handleClear}>reset</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>{click ? <OddOneOutDetail /> : null}</div>
        <div>{superClick ? <OddOneOutSuperDetail /> : null}</div>

    </div>)
}

export default OddOneOutActivity