// contains the ActivityNav.js and the selected Activity.js
import React, { useState } from "react";
import PhotoMatchActivity from "../components/PhotoMatchActivity";
import DndActivity from '../components/DndActivity';
import OddOneOutActivity from "../components/OddOneOutActivity";
import Quiz from '../components/QuizActivity';

const ActivitiesContainer = () => {

    const actHome = (
        <div className="act-nav--homepage">
            <h2>Click on an activity to get started!</h2>
        </div>
    );

    const actOdd = <div><OddOneOutActivity /></div>
    const actMatch = <div><PhotoMatchActivity /></div>
    const actQuiz = <div><Quiz /></div>
    const actDnD = <div><DndActivity /></div>

    const [selectedAct, setSelectedAct] = useState(actHome);

    const handleActivityChange = (event) => {
        console.log(event.target.innerText)
        if (event.target.innerText === "Quiz") {
            setSelectedAct(actQuiz);
        } else if (event.target.innerText === "DnD") {
            console.log(actDnD)
            setSelectedAct(actDnD);
        } else if (event.target.innerText === "Match") {
            setSelectedAct(actMatch);
        } else if (event.target.innerText === "Odd One Out") {
            setSelectedAct(actOdd);
        } else {
            setSelectedAct(actHome)
        }
    }


    return (
        <div className="activities-container">
            <h1>Activities Container</h1>
        <hr/>
            <table>
                <tbody className='act-nav--tbody'>
                <tr>
                    <td onClick={handleActivityChange}>HOME</td>
                    <td rowSpan="5">{selectedAct}</td>
                </tr>
                <tr>
                    <td onClick={handleActivityChange} >Quiz</td>
                </tr>
                <tr>
                    <td onClick={handleActivityChange} >DnD</td>
                </tr>
                <tr>
                    <td onClick={handleActivityChange} >Match</td>
                </tr>
                <tr>
                    <td onClick={handleActivityChange} >Odd One Out</td>
                </tr>
                </tbody>
            </table>


            {/* <div>
                <ActivitiesNav />
            </div>
            <div>
                <PhotoMatchActivity />
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
            </div> */}
        <hr/>
        </div>
    )
}

export default ActivitiesContainer