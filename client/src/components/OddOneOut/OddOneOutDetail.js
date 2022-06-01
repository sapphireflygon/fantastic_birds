
import React, { useState } from 'react'

const OddOneOutDetail = () => {

    const [open, setOpen] = useState(true)
    if (!open) {
        return null
    }

    const handleClose = () => {
        setOpen(false)
    }


    return (
        <div id="main_div">
            <div id="bat">
                <h2>RIGHT!</h2>
                <p>This is a bat! Even though they can fly, bats are mammals. Bats have no feathers. Bats give birth, birds lay eggs!</p>
                <div onClick={handleClose} >close</div>
            </div>
        </div>
    )
}

export default OddOneOutDetail