import React from 'react';
import './App.css';
import Car from './Car';



function App() {
  return (
    <div className="App">
      <img src='./logoCar.png' alt='logo' />
      <Car  couleur="rouge" marque="Toyota Matrix" kilometrage="100 km" />
    </div>
  );
}

export default App;
 