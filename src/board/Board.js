import React from 'react';

// styling
import './Board.css';

// components

const Board = () => {
    const sqArr = Array.from(Array(64).keys())

    return (
        <div className="Board">
            {sqArr.map(sq => <div key={sq} className="square">s</div>)}
        </div>
  );
}

export default Board;
