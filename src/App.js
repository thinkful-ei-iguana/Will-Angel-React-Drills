import React from 'react';
import './App.css';
// import HelloWorld from './HelloWorld';
// import Bomb from './Bomb'
import RouletteGun from './RouletteGun';

function App() {
  return (
    <div className="App">
      {/* <HelloWorld /> */}
      {/* <Bomb /> */}
      <RouletteGun bulletInChamber={6} />
    </div>
  );
}

export default App;
