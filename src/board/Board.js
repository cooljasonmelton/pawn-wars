import React, {useState, useEffect} from 'react';

// initial board data
import { basicBoard } from '../gameplay/GameArrays'

// styling
import './Board.css';

// components
import Pawn from '../pieces/pawn/Pawn'

const Board = () => {
    const [board, setBoard] = useState([])

    useEffect(() => {
        setBoard(basicBoard)
    }, []);

    // takes sq number and returns color of square, bl or wh

    const sqColor = sq => {
        const row =  Math.floor(sq / 8)
        // even rows
        if (row % 2 === 0) return sq % 2 === 0 ? " bl" : " wh"
        // odd rows
        return sq % 2 === 1 ? " bl" : " wh"
    }

    const renderBoard = () => {
        let counter = -1 
        return board.map(row=> row.map(sq => {
            counter++
            if (sq === 'wp') return <div key={counter} className={sqColor(counter)}><Pawn color="wh"/></div>
            if (sq === 'bp') return <div key={counter} className={sqColor(counter)}><Pawn color="bl"/></div>
            return <div key={counter} className={sqColor(counter)}></div>
        }))
    }
    console.log(board)
    return (
        <div className="Board">
            {renderBoard()}
        </div>
  );
}

export default Board;
