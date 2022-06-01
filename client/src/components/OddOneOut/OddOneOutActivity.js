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

    const bat = require('../OddOneOutIMG/findbat.png')
    const superman = require('../OddOneOutIMG/superman.png')




    return (
        <div className = "odd"><div className="odd-main">
        <h2> Find creatures are not birds</h2>
       
        <div id="main_div">
            <table id="odd-table">
                <tbody>
                    <tr>
                        <td></td>
                        <td onClick={handleClick}><img src={bat} height="60" /></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td onClick={handleSuperClick}><img src={superman} height="70" /></td>
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
                        <td ></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button className="button-match" onClick={handleClear}>Restart</button>
        <div>{click ? <OddOneOutDetail /> : null}</div>
        <div>{superClick ? <OddOneOutSuperDetail /> : null}</div>

        </div></div>
        )
}

export default OddOneOutActivity