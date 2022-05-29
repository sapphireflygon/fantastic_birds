import React from 'react';
import "./DndActivity.css";
import DndComponent from './DndComponent';

const DndMain = () => {

    const data = [
        {
            title: "group 1",
            items: [
                '1', '2', '3'
            ]
        },
        {
            title: "group 2",
            items: [
                '4', '5', '6', '7'
            ]
        },
        {
            title: "group 3",
            items: [
                '8', '9', '10'
            ]
        }
    ]

    return (
        <div className='dnd-main'>
            <DndComponent data={data} />
        </div>
    )
}

export default DndMain;