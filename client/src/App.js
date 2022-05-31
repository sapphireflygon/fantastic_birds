
import './App.css';
import Header from './components/Header';
import ActivitiesContainer from "./containers/ActivitiesContainer";
import React from 'react';
import './components/OddOneOut/OddOneOutActivity.css'
import './components/Colouring/Bird.css'
import InfoContainer from './containers/InfoContainer';
import GamesContainer from './containers/GamesContainer';

function App() {

  return (
    <>
      <div className="App">
        <div>
          <Header />
        </div>
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