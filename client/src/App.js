import './App.css';
import ActivitiesContainer from "./containers/ActivitiesContainer";
import React from 'react';
import OddOneOutActivity from './components/OddOneOutActivity';
import GameColoring from './components/GameColoring';
import './components/OddOneOutActivity.css'
import './components/Bird.css'

function App() {

  return (
    <>
      <div className="App">
        <ActivitiesContainer/>
      </div>
    </>
  );
}

export default App;