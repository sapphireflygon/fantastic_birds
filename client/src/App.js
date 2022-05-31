
import './App.css';
import ActivitiesContainer from "./containers/ActivitiesContainer";
import React from 'react';
import './components/OddOneOut/OddOneOutActivity.css'
import './components/Colouring/Bird.css'
import InfoContainer from './containers/InfoContainer';
import GamesContainer from './containers/GamesContainer';
import headerImage from './components/header-title.svg'

function App() {

  return (
    <>
      <div className="App">
        <div className='header'>
        <img className='header-image' src={headerImage}/>
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