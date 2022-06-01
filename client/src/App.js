
import './App.css';
import Header from './components/Header';
import ActivitiesContainer from "./containers/ActivitiesContainer";
import React from 'react';
import './components/OddOneOut/OddOneOutActivity.css'
import './components/Colouring/Bird.css'
import InfoContainer from './containers/InfoContainer';
import headerImage from './components/header-title.svg'
import BackToTopButton from './components/BackToTopButton';
import ColouringsContainer from './containers/ColouringsContainer';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className="App">
        <div className='header'>
        <img className='header-image' src={headerImage}/>
        </div>

        <div>
          <Header />
        </div>
        <div>
          <InfoContainer />
        </div>
        <br/>
        <br/>
        <div id="act-container">
          <ActivitiesContainer />
        </div>
        <br/>
        <br/>
        <div>
          <ColouringsContainer />
        </div>
          <BackToTopButton />
      </div>
        <Footer />
    </>
  );
}

export default App;