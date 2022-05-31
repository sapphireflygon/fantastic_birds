// contains the BirdCard.js x6 (one for each bird from db)
import React from 'react';
import BirdCardList from '../components/BirdCardList';
import "../components/Info.css"

const InfoContainer = () => {
    return (
        <div className='info-container'>
            <h1>Info Container</h1>
                <BirdCardList />
        </div>
    )
};

export default InfoContainer;