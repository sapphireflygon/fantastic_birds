
import './App.css';
import Header from './components/Header';
import ActivitiesContainer from "./containers/ActivitiesContainer";
import React from 'react';
import './components/OddOneOut/OddOneOutActivity.css'
import './components/Colouring/Bird.css'
import InfoContainer from './containers/InfoContainer';
import BackToTopButton from './components/BackToTopButton';
import ColouringsContainer from './containers/ColouringsContainer';

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
          <BackToTopButton />
        <br/>
        <br/>
      </div>
    </>
  );
}

export default App;