import React from 'react';

// styling 
import '../App.css'

const Info = props => {
  const { instructions } = props
  return (
    <div className={"instructions" + (instructions ? " open-i" : "")}>
    <p>
        <b>To Win:</b> The first player to move a pawn to the square on the edge of the board, also called the 'promotion square', wins the game. 
    </p>
    <p>
        <b>Moving:</b> Pawns can only move forward toward the opposing pawns. On their first move, they may move one or two spaces. Otherwise, pawns may only move one space each turn. 
    </p>
    <p>
        <b>Capturing:</b> A pawn can capture an opposing pawn on a square at a forward diagonal. Also, if a pawn moves two squares passing an opposing pawn, on the next turn, that opposing pawns can capture the passing pawn by moving to the square behind it. This is called "En Passant". 
    </p>
  </div>

  );
}

export default Info;
