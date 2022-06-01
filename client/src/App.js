
import './App.css';
import ActivitiesContainer from "./containers/ActivitiesContainer";
import React from 'react';
import './components/OddOneOut/OddOneOutActivity.css'
import './components/Colouring/Bird.css'
import InfoContainer from './containers/InfoContainer';
import ColouringsContainer from './containers/ColouringsContainer';

function App() {

  return (
    <>
      <div className="App">
        <div>
          <InfoContainer />
        </div>
        <br/>
        <br/>
        <div>
          <ActivitiesContainer />
        </div>
        <br/>
        <br/>
        <div>
          <ColouringsContainer />
        </div>
        <br/>
        <br/>
      </div>
    </>
  );
}

export default App;