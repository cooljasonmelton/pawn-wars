import React, {useState} from 'react';

// styling
import './App.css';

// components
import Board from './board/Board';
import Info from './info/Info';

const App = () => {
  const [whTurn, setWhTurn] = useState(true)
  const [reset, setReset] = useState(true)
  const [winGame, setWinGame] = useState(null)
  const [instructions, setInstructions] = useState(false)

  return (
    <div className="App">

      <div className="logo-c">
        {/* <h1 className="logo-header"> </h1> */}
        <br/>
        <br/>
        <br/>
      </div>

      <div className="cfb">
        <div className="m-container board-c">
            <Board whTurn={whTurn} 
              setWhTurn={setWhTurn} 
              reset={reset} 
              setReset={setReset}
              winGame={winGame}
              setWinGame={setWinGame}/>
        </div>

        <div className="m-container info-c cfb">
          <h1 className="logo-header">PAWN WARS</h1>

          <Info instructions={instructions}/>

          <div className="button-c cfb">
            <button onClick={()=>setInstructions(!instructions)}>Instructions</button>
            <button onClick={()=>setReset(true)}>New Game</button>
          </div>

          <div className={"winning-message cfb" + (winGame ? " open-w" : "")}>
            <b>{winGame === "wh" ? "White Wins!" : "Black Wins!"}</b>
          </div>
        </div>   
      </div>



    </div>
  );
}

export default App;
