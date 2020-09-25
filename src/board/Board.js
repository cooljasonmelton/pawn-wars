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

    const sqArr = Array.from(Array(64).keys())
    const sqColor = sq => {
        const row =  Math.floor(sq / 8)
        if (row % 2 === 0) return sq % 2 === 0 ? " bl" : " wh"
        return sq % 2 === 1 ? " bl" : " wh"
    }

    const renderBoard = () => {
        let count = -1
        return board.map(row=> row.map(sq => {
            count++
            if (sq === 'wp') return <div key={count} className={sqColor(count)}><Pawn color="wh"/></div>
            if (sq === 'bp') return <div key={count} className={sqColor(count)}><Pawn color="bl"/></div>
            return <div key={count} className={sqColor(count)}></div>
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
