import React from 'react';

// images

// styling
import './Board.css';

// components
import Pawn from '../pieces/pawn/Pawn'

const Board = () => {
    const sqArr = Array.from(Array(64).keys())

    const sqColor = sq => {
        const row =  Math.floor(sq / 8)
        if (row % 2 === 0) return sq % 2 === 0 ? " bl" : " wh"
        return sq % 2 === 1 ? " bl" : " wh"
    }

    return (
        <div className="Board">
            {sqArr.map(sq => {
                return(
                    <div key={sq} 
                        className={"square cfb" + sqColor(sq)}>
                            <Pawn color="wh"/>
                    </div>
                )
            })}
        </div>
  );
}

export default Board;
