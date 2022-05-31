
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
                <p>BATS! Even though they can fly, bats are mammal! Bats have no feather. Bats give birth, birds lay eggs!</p>
                <div onClick={handleClose} >close</div>
            </div>
        </div>
    )
}

export default OddOneOutDetail