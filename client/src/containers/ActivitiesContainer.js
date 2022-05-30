// contains the ActivityNav.js and the selected Activity.js
import React from "react";
import PhotoMatchActivity from "../components/PhotoMatchActivity";
import DndActivity from '../components/DndActivity';
import OddOneOutActivity from "../components/OddOneOutActivity";
import GameColoring from "../components/GameColoring";

const ActivitiesContainer = () => {
    return (
        <>
            <div>
                <PhotoMatchActivity />
            </div>
        <hr/>
            {/* <div>
                <DndActivity />
            </div>
        <hr/>
            <div>
                <OddOneOutActivity />
            </div>
        <hr/>
            <div>
                <GameColoring />
            </div> */}
        </>
    )
}

export default ActivitiesContainer