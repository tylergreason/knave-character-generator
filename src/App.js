import React from 'react';
import Title from './components/Title'
import Traits from './components/Traits'
import Abilities from './components/Abilities'
import Inventory from './components/Inventory'

import './App.css';

function App() {
  return (
    <div className="App">
        <Title title='Knave Character Generator'></Title>
        <Traits></Traits>
        <Abilities></Abilities>
        <Inventory></Inventory>
    </div>
  );
}

export default App;
