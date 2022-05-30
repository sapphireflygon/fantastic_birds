// contains the ActivityNav.js and the selected Activity.js
import React from "react";
import PhotoMatchActivity from "../components/PhotoMatchActivity";
import DndActivity from '../components/DndActivity';

const ActivitiesContainer = () => {
    return (
        <>
          <div>
            <PhotoMatchActivity/>
          </div>
          <div>
            <DndActivity/>
          </div>
        </>
    )
}

export default ActivitiesContainer