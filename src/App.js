import React, { useState, useReducer } from 'react';

// styling
import './App.css';

// reducers
import { reducer } from './reducers/reducer'

// board arrays
import { basicBoard } from './gameplay/GameArrays'

// components
import Board from './board/Board';
import Info from './info/Info';

const App = () => {
  const game = {
    board: basicBoard,
    instructions: false,
    reset: true,
    winGame: null, 
    whTurn: true, 
  }

  const [state, dispatch] = useReducer(reducer, game);

  const [whTurn, setWhTurn] = useState(true)
  const [reset, setReset] = useState(true)
  const [winGame, setWinGame] = useState(null)
  const [instructions, setInstructions] = useState(false)

  return (
    <div className="App">

      <div className="logo-c cfb">
        {/* <h1 className="logo-header"> </h1> */}
        <a href="mailto:jason.melton2@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a> 
        <a href="https://github.com/cooljasonmelton/pawn-wars" target="_blank" rel="noopener noreferrer">Github</a> 
      </div>

      <div className="cfb">
        <div className="cfb board-side">
          <div className="board-c">
              <Board whTurn={whTurn} 
                setWhTurn={setWhTurn} 
                reset={reset} 
                setReset={setReset}
                winGame={winGame}
                setWinGame={setWinGame}
                state={state}
                dispatch={dispatch}/>
          </div>
          <h3 className="turn-header"> Turn: {whTurn ? "White" : "Black"}</h3>
        </div>


        <div className="m-container info-c cfb">
          <h1 className="logo-header">PAWN WARS</h1>


          <Info instructions={instructions}/>

          <div className="cfb button-c">
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
