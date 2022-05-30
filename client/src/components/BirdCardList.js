import React from 'react';
import data from './Data';
import BirdCard from './BirdCard';

const BirdCardList = () => {

    const birdsList = data.map((bird, index) => {
        return (
            <BirdCard bird={bird} key={bird.id} index={index} />
        )
    })

    return (
        <div className='bird-card-list-container'>
            <div className='bird-card-list--grid'>
                <div className='bird-card-list'>
                    {birdsList}
                </div>
            </div>
        </div>
    )
}

export default BirdCardList;