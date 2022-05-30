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
            ],
            style: "dnd-item"
        },
        {
            title: "Robin",
            items: [],
            style: "dnd-item robin"
        },
        {
            title: "Owl",
            items: [],
            style: "dnd-item owl"
        },
        {
            title: "Penguin",
            items: [],
            style: "dnd-item pengu"
        },
        {
            title: "Duck",
            items: [],
            style: "dnd-item duck"
        },
        {
            title: "Peacock",
            items: [],
            style: "dnd-item peacock"
        },
        {
            title: "Pelican",
            items: [],
            style: "dnd-item pelican"
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