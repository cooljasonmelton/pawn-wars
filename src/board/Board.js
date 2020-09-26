import React, {useState, useEffect} from 'react';

// initial board data
import { basicBoard } from '../gameplay/GameArrays'

// styling
import './Board.css';

// components
import Pawn from '../pieces/pawn/Pawn'

const Board = props => {
    const { whTurn, setWhTurn } = props
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

    // maps board AoA returning pieces based on sq codes
    const renderBoard = () => {
        let counter = -1 
        return board.map(row=> row.map(sq => {
            counter++
            if (sq === 'wp') { 
                const sqNum = counter
                return <div key={sqNum} 
                            onClick={()=>selectPiece(() => sqNum, 'wp')} 
                            className={sqColor(sqNum) + ' cfb'}>
                        <Pawn color="wh"/>
                    </div>
            }
            if (sq === 'bp') {
                const sqNum = counter
                return <div key={sqNum} 
                            onClick={()=>selectPiece(() => sqNum, 'bp')} 
                            className={sqColor(sqNum) + ' cfb'}>
                        <Pawn color="bl"/>
                    </div>
            }
            if (sq === 'av') return <div key={counter} className={"cfb fill-c" + sqColor(counter)}><div className="av-marker"></div></div>
            if ((sq === 'wpav') || (sq === 'bpav')) return <div key={counter} className={sqColor(counter)}><Pawn color="av"/></div>

            return <div key={counter} className={sqColor(counter)}></div>
        }))
    }

    const selectPiece = (num, piece) => {
        // return if not piece's turn
        if ((whTurn && piece.charAt(0) === "b") || (!whTurn && piece.charAt(0) === "w")) return

        const updateBoard = [...clearAv(board)]
        const rank = Math.floor(num() / 8);
        const file = num() % 8;

        if (whTurn) {
            // wh pawn moves two space
            if (!updateBoard[rank - 1][file] && !updateBoard[rank - 2][file] && (num() > 47)) updateBoard[rank - 2][file] = "av"
            // wh pawn moves one space
            if (!updateBoard[rank - 1][file]) updateBoard[rank - 1][file] = "av"
        }

        if (!whTurn) {
            // bl pawn moves two space
            if (!updateBoard[rank + 1][file] && !updateBoard[rank + 2][file] && (num() < 16)) updateBoard[rank + 2][file] = "av"
            // bl pawn moves one space
            if (!updateBoard[rank + 1][file]) updateBoard[rank + 1][file] = "av"
        }



        

        setBoard(updateBoard)
        setWhTurn(!whTurn)

        console.log(rank, file, num())
    }

    const clearAv = boardArr => {
        const updateBoard = [...boardArr]
        return updateBoard.map(r=> r.map(sq => {
            if (sq === "av") return null
            return sq
        }))
    }

    const movePiece = () => {
        setWhTurn(!whTurn)
    }

    return (
        <div className="Board">
            {renderBoard()}
        </div>
  );
}

export default Board;
