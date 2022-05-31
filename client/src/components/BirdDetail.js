// child component of BirdCard.js
import React from "react";


const BirdDetail = ({selected, closeModal}) => {

    console.log(selected, 'this is selected BIRD DETAIL')

    return(
        <div>
            <h3>{selected.name}</h3>
            <p>Active:{selected.activity}</p>
            <p>Food:{selected.food}</p>
            <p>Flying:{selected.fly}</p>
            <p>Beak length:{selected.beaklength}</p>
            <p>Beak width:{selected.beakwidth}</p>
            <button onClick={closeModal}>Close</button>
        </div>
    )
}

export default BirdDetail