import React, {useState} from 'react';

// styling
import './App.css';

// components
import Board from './board/Board';

const App = () => {
  const [whTurn, setWhTurn] = useState(true)
  const [reset, setReset] = useState(true)
  const [winGame, setWinGame] = useState(null)
  const [instructions, setInstructions] = useState(false)

  return (
    <div className="App">

      <div className="logo-c">
        <h1 className="logo-header">PAWN WARS</h1>
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
          <div className={"winning-message cfb" + (winGame ? " open-w" : "")}>
            <b>{winGame === "wh" ? "White Wins!" : "Black Wins!"}</b>
          </div>

          <div className={"instructions" + (instructions ? " open-i" : "")}>
            <b>To Win:</b> Move one of your pawns to the edge of the board. 
            <br/>
            <b>Moving:</b> Pawns can only move forward toward the opposing color. On their first move, they may move two spaces. Otherwise, pawns may only move one space each turn. 
            <br/>
            <b>Capturing:</b> A pawn can capture an opposing pawn on a square at a forward diagonal. Also, if a pawn moves two squares passing an opposing pawn, on the next turn, that opposing pawns can capture the passing pawn by moving to the square behind it. This is called "En Passant". 
          </div>

          <div className="button-c cfb">
            <button onClick={()=>setInstructions(!instructions)}>Instructions</button>
            <button onClick={()=>setReset(true)}>New Game</button>
          </div>
        </div>   
      </div>



    </div>
  );
}

export default App;
