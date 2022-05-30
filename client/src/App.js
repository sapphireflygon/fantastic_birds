
import './App.css';
import ActivitiesContainer from "./containers/ActivitiesContainer";
import React from 'react';
import './components/OddOneOutActivity.css'
import './components/Bird.css'
import InfoContainer from './containers/InfoContainer';
import GamesContainer from './containers/GamesContainer';

function App() {

  return (
    <>
      <div className="App">
        <div>
          <InfoContainer />
        </div>
        <div>
          <ActivitiesContainer />
        </div>
        <div>
          <GamesContainer />
        </div>
      </div>
    </>
  );
}

export default App;