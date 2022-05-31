// child component of BirdCard.js
import React from "react";


const BirdDetail = ({selected, closeModal}) => {


    return(
        <div>
            <h1>{selected.name}</h1>
            <p>Active: {selected.activity}</p>
            <p>Food: {selected.food}</p>
            <p>Flying: {selected.fly ? 'Yes' : 'No'}</p>
            <p>Beak length: {selected.beaklength}</p>
            <p>Beak width: {selected.beakwidth}</p>
            <button onClick={closeModal}>Close</button>
        </div>
    )
}

export default BirdDetail