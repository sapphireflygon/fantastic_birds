import React, { useState } from 'react'

const OddOneOutSuperDetail = () => {

    const [openSuperman, setOpenSuperman] = useState(true)
    if (!openSuperman) {
        return null
    }

    const handleClose = () => {
        setOpenSuperman(false)
    }


    return (
        <div id="main_div">
            <div id="super">
                <h2>RIGHT!</h2>
                <p>Right! Even though he can fly, Superman has no wings. Superman might give birth, but he doens't lay eggs! ... maybe!? We are not sure. But, we <em>are</em> sure that he is not a bird!</p>
                <div onClick={handleClose} >close</div>
            </div>
        </div>
    )
}

export default OddOneOutSuperDetail










