// contains the ActivityNav.js and the selected Activity.js
import React, { useState } from "react";
import PhotoMatchActivity from "../components/PhotoMatchActivity";
import DndActivity from '../components/DndActivity';
import OddOneOutActivity from "../components/OddOneOut/OddOneOutActivity";
import Quiz from '../components/QuizActivity';
import "./ActivitiesContainer.css";
import activityHeader from '../components/activities-header-01.png'

const ActivitiesContainer = () => {

    const actHome = (
        <div className="act-nav--homepage">
            <img className='activity-header' src={activityHeader}/>
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
            <table cellPadding="0" cellSpacing="0" >
                <tbody className='act-nav--tbody' >
                    <tr className="act-nav--tr">
                        <td onClick={handleActivityChange} className="act-nav--td tab-home">HOME</td>
                        <td rowSpan="7" className="act-nav--td-act">{selectedAct}</td>
                    </tr>
                    <tr className="act-nav--tr">
                        <td onClick={handleActivityChange} className="act-nav--td tab-quiz" >Quiz</td>
                    </tr>
                    <tr className="act-nav--tr">
                        <td onClick={handleActivityChange} className="act-nav--td tab-dnd" >DnD</td>
                    </tr>
                    <tr className="act-nav--tr">
                        <td onClick={handleActivityChange} className="act-nav--td tab-match" >Match</td>
                    </tr>
                    <tr className="act-nav--tr">
                        <td onClick={handleActivityChange} className="act-nav--td tab-odd" >Odd One Out</td>
                    </tr>
                    <tr >
                        <td className="blank-row"></td>
                    </tr>
                    <tr >
                        <td className="blank-row">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ActivitiesContainer