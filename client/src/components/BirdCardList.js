import React from 'react';
import data from './Data';
import BirdCard from './BirdCard';

const BirdCardList = () => {
    const desData = data[0]
    console.log(desData)

    const birdsList = data.map((bird, index) => {
        return (
            <BirdCard bird={bird} key={bird.id} index={index} />
        )
    })

    return (
        <div className='bird-card-list-container'>
            <p>Bird card list here</p>
            <div className='bird-card-list'>
            {birdsList}
            </div>
        </div>
    )
}

export default BirdCardList;