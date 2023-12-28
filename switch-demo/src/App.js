import React, { useState } from 'react';
import './App.css';
import Lost from './components/Lost';
import Playing from './components/Playing';
import Start from './components/Start';
import Won from './components/Won';

function App() {
  const [game, setGame] = useState('start')

  const handleClick = (gameState) => {
    setGame(gameState)
  }

  return (
    <div className="App">
      <h1>Our Cool Game Demo</h1>

      {(() => {
        switch (game) {
          case 'start':
            return <Start handleClick={handleClick} />
          case 'playing':
            return <Playing handleClick={handleClick} />
          case 'won':
            return <Won handleClick={handleClick} />
          case 'lost':
            return <Lost handleClick={handleClick} />
          default:
            return null
        }
      })()}
    </div>
  );
}

export default App;
