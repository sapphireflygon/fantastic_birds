import React from 'react';
import "./DndActivity.css";
import DndComponent from './DndComponent';

const DndMain = () => {

    const data = [
        {
            title: "Foods",
            items: [
                "bugs", 
                "berries",
                "algae",
                "small fish",
                "medium fish",
                "big fish",
                "worms",
                "seeds",
                "mice",
                "squirrels"
            ]
        },
        {
            title: "Robin",
            items: []
        },
        {
            title: "Owl",
            items: []
        },
        {
            title: "Penguin",
            items: []
        },
        {
            title: "Duck",
            items: []
        },
        {
            title: "Peacock",
            items: []
        },
        {
            title: "Pelican",
            items: []
        }
    ]

    return (
        <div className='dnd-main'>
            <h1>Who Eats What?</h1>
            <h3>Drag the food from the list to the bird that eats that food</h3>
            <DndComponent data={data} />
        </div>
    )
}

export default DndMain;