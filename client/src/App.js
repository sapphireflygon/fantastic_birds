import './App.css';
import ActivitiesContainer from "./containers/ActivitiesContainer";
import React from 'react';
import OddOneOutActivity from './components/OddOneOutActivity';
import GameColoring from './components/GameColoring';
import './components/OddOneOutActivity.css'
import './components/OddOneOutIMG/Bird.css'
import ActivitiesContainer from './containers/ActivitiesContainer';

function App() {

  return (
    <div className="App">
      <ActivitiesContainer/>
    </div>
    <div>
      <div>
        <OddOneOutActivity />
      </div>
      <div>
        <GameColoring />
      </div>
    </div>);
}

export default App;