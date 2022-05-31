// child component of BirdCard.js
import React,{useEffect} from "react";


const BirdDetail = ({selected, closeModal}) => {

    // useEffect ( () => {
    //     // Update the document title using the browser API
    //     console.log(selected, 'this is selected BIRD DETAIL')
    //   });

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