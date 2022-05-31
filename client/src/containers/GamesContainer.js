// our extensions; can add fun games when mvp done
import React from 'react'
import GameColoring from '../components/Colouring/GameColoring'

const GamesContainer = () => {
    return (
        <div className='games-container'>
            <div>
                <h1>GamesContainer</h1>
            </div>
            <div>
                <GameColoring />
            </div>
        </div>
    )
}

export default GamesContainer;