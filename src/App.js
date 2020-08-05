import React from 'react';
import './index.css'
import TicTak from './components/Tic-tac-toe/TicTak';
import Snakes from './components/Snakes/Snakes';
import ListProb from './components/ListProb/ListProb';
import TwoZero from './components/2048/TwoZero';

function App() {
  return (
    <div className="App">
    <nav>
      <div className="App__Logo"><h2>Dhiraj Temkar</h2><p>Atharva College of Engineering</p></div>
      <div className="App__navInfo">
        Reference- Mr. Pankaj Kunekar, Application: Front-end React.js Intern
      </div>
    </nav>
      <div className="App__contains">
        <div className="App__Elements">
          <h3>Q) Make Tic-Tac-Toe</h3>
          <TicTak />
        </div>
        <div className="App__Elements">
          <h3>Q) Make Snakes and Ladder Board</h3>
          <Snakes />
        </div>
        <div className="App__Elements">
          <h3>Q) Make List Manipulation</h3>
          <ListProb />
        </div>
      </div>
      <TwoZero />
    </div>
  );
}

export default App;
