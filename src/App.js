import React from 'react';

// styling
import './App.css';

// components
import Board from './board/Board';

const App = () => {
  return (
    <div className="App">

      <div className="logo-c">
        <h1 className="logo-header">PAWN WARS</h1>
      </div>

      <div className="cfb">
        <div className="m-container board-c">
          <Board/>
        </div>

        <div className="m-container info-c">
          info / options <br/>
          - instructions <br/>
          - who's turn <br/>
          - new game  - starting pieces - start 
        </div>   
      </div>


    </div>
  );
}

export default App;
