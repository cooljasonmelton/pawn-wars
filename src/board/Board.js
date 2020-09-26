import React, {useState, useEffect} from 'react';

// initial board data
import { basicBoard } from '../gameplay/GameArrays'

// styling
import './Board.css';

// components
import Pawn from '../pieces/pawn/Pawn'

const Board = props => {
    const [board, setBoard] = useState([])
    const {whTurn, setWhTurn} = props

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
            if (sq === 'wp') { 
                const sqNum = counter
                return <div key={sqNum} 
                            onClick={()=>selectPiece(()=> sqNum, 'wp')} 
                            className={sqColor(sqNum)}>
                        <Pawn color="wh"/>
                    </div>
            }
            if (sq === 'bp') {
                const sqNum = counter
                return <div key={sqNum} 
                            onClick={()=>selectPiece(()=> sqNum, 'bp')} 
                            className={sqColor(sqNum)}>
                        <Pawn color="bl"/>
                    </div>
            }
            if (sq === 'av') return <div key={counter} className={"cfb" + sqColor(counter)}><div className="av-marker"></div></div>
            if ((sq === 'wpav') || (sq === 'bpav')) return <div key={counter} className={sqColor(counter)}><Pawn color="av"/></div>

            return <div key={counter} className={sqColor(counter)}></div>
        }))
    }

    const selectPiece = (num, piece) => {
        // return if clicking piece not on turn
        if (whTurn && piece.charAt(0) === "b") return
        if (!whTurn && piece.charAt(0) === "w") return


        console.log(num, piece)

        setWhTurn(!whTurn)

    }

    const clearAv = () => {

    }

    const movePiece = () => {

    }

    return (
        <div className="Board">
            {renderBoard()}
        </div>
  );
}

export default Board;
