import React from 'react';
import OddOneOutActivity from './components/OddOneOutActivity';
import GameColoring from './components/GameColoring';
import './components/OddOneOutActivity.css'
import './components/OddOneOutIMG/Bird.css'

function App() {

  return (
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
