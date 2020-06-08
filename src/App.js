import React from 'react';
import Title from './components/Title'
import Traits from './components/Traits'

import './App.css';

function App() {
  return (
    <div className="App">
        This is my character generator for Knave! 
        <Title title='Knave Character Generator'></Title>
        <Traits></Traits>
    </div>
  );
}

export default App;
