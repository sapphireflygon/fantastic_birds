
import './App.css';
import ActivitiesContainer from "./containers/ActivitiesContainer";
import React from 'react';
import './components/OddOneOut/OddOneOutActivity.css'
import './components/Colouring/Bird.css'
import InfoContainer from './containers/InfoContainer';
import ColouringsContainer from './containers/GamesContainer';

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
          <ColouringsContainer />
        </div>
      </div>
    </>
  );
}

export default App;