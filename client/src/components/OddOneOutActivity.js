import React, { useState, useEffect } from 'react'
import OddOneOutDetail from './OddOneOutDetail'




const OddOneOutActivity = () => {

    const [click, setClick] = useState(false)

    useEffect =(()=> click, [])

    console.log(click)
    const handleClick = () => {
        return setClick(true)
    }

    const bat = require('./OddOneOutIMG/bat.png')




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
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>{click ? <OddOneOutDetail /> : null}</div>
        
    </div>)
}

export default OddOneOutActivity