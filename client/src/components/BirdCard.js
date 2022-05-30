// child component of InfoContainer.js
import React from 'react'

const BirdCard = ({bird}) => {
    // console.log(bird)

    return (
        <div className='bird-card'>
            <h4>Bird name: {bird.name}</h4>
            <img src={bird.cartoonimg} alt={bird.name} />
        </div>
    )
}

export default BirdCard;