import React from 'react';
import "./DndActivity.css";
import DndComponent from './DndComponent';

const DndMain = () => {

    const data = [
        {
            title: "Foods",
            items: [
                "insects", 
                "berries",
                "snails",
                "small fish",
                "big fish",
                "crickets",
                "algae",
                "flower petals",
                "worms",
                "seeds",
                "mice",
                "squirrels",
                "krill",
                "squid"
            ],
            style: "dnd-item",
            style2: "group-title"
        },
        {
            title: "Robin",
            items: [],
            style: "dnd-item robin",
            style2: "group-title robin"
        },
        {
            title: "Owl",
            items: [],
            style: "dnd-item owl",
            style2: "group-title owl"
        },
        {
            title: "Penguin",
            items: [],
            style: "dnd-item pengu",
            style2: "group-title pengu"
        },
        {
            title: "Duck",
            items: [],
            style: "dnd-item duck",
            style2: "group-title duck"
        },
        {
            title: "Peacock",
            items: [],
            style: "dnd-item peacock",
            style2: "group-title peacock"
        },
        {
            title: "Pelican",
            items: [],
            style: "dnd-item pelican",
            style2: "group-title pelican"
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