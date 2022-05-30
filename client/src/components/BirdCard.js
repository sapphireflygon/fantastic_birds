// child component of InfoContainer.js
import React from 'react'

const BirdCard = ({bird}) => {
    // console.log(bird)

    return (
        <div className='bird-card'>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                    <img src={bird.cartoonimg} alt={bird.name} />
                </div>
                <div className='flip-card-back'>
                    <h4>Bird name: {bird.name}</h4>
                </div>
            </div>
        </div>
    )
}

export default BirdCard;