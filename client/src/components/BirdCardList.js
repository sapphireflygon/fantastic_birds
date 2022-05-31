import React from 'react';
import data from './data/Data';
import BirdCard from './BirdCard';

const BirdCardList = () => {
    const desData = data[0]
    // console.log(desData)

    const birdsList = data.map((bird, index) => {
        return (
            <BirdCard bird={bird} key={bird.id} index={index} />
        )
    })



    return (
        <div className='bird-card-list-container'>
            <div className='bird-card-list--grid'>
                <div className='bird-card-list flip-card'>
                    {birdsList}
                </div>
            </div>
        </div>
    )
}

export default BirdCardList;