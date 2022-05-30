// contains the ActivityNav.js and the selected Activity.js
import React from "react";
import PhotoMatchActivity from "../components/PhotoMatchActivity";
import DndActivity from '../components/DndActivity';
import OddOneOutActivity from "../components/OddOneOutActivity";
import Quiz from '../components/QuizActivity';

const ActivitiesContainer = () => {
    return (
        <>
            <h1>Activities Container</h1>
        <hr/>
            <div>
                {/* <PhotoMatchActivity /> */}
                <p>Photo match activity here</p>
            </div>
        <hr/>
            <div>
                <Quiz />
            </div>
        <hr/>
            <div>
                <DndActivity />
            </div>
        <hr/>
            <div>
                <OddOneOutActivity />
            </div>
        <hr/>
        </>
    )
}

export default ActivitiesContainer