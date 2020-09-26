import React, {useState, useEffect} from 'react';

// initial board data
import { basicBoard } from '../gameplay/GameArrays'

// styling
import './Board.css';

// components
import Pawn from '../pieces/pawn/Pawn'

const Board = props => {
    const { whTurn, setWhTurn, reset, setReset, winGame, setWinGame } = props
    const [board, setBoard] = useState([])
    const [selectedP, setSelectedP] = useState(null)
    const [enPassantAv, setEnPassantAv] = useState(null)

    useEffect(() => {
        if (reset){
            setBoard(basicBoard)
            setWhTurn(true)
            setReset(false)
            setWinGame(null)
        }
    }, [reset]);

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
            // white pawn
            if (sq === 'wp') { 
                const sqNum = counter
                return <div key={sqNum} 
                            onClick={()=>selectPiece(() => sqNum, 'wp')} 
                            className={sqColor(sqNum) + ' cfb'}>
                    <Pawn color="wh"/>
                </div>
            }

            // black pawn
            if (sq === 'bp') {
                const sqNum = counter
                return <div key={sqNum} 
                            onClick={()=>selectPiece(() => sqNum, 'bp')} 
                            className={sqColor(sqNum) + ' cfb'}>
                    <Pawn color="bl"/>
                </div>
            }

            // available move
            if (sq === 'av') {
                const sqNum = counter
                return <div key={counter} className={"cfb av-c" + sqColor(counter)} onClick={()=>movePiece(() => sqNum)}><div className="av-marker"></div></div>
            }

            // available pawn capture
            if ((sq === 'wpav') || (sq === 'bpav')) {
                const sqNum = counter
                return <div key={counter} className={"cfb "+sqColor(counter)} onClick={()=>movePiece(() => sqNum)}><Pawn color="av"/></div>
            }
            return <div key={counter} className={sqColor(counter)}></div>
        }))
    }

    const selectPiece = (num, piece) => {
        // return if game is won
        if (winGame) return
        // return if not piece's turn
        if ((whTurn && piece.charAt(0) === "b") || (!whTurn && piece.charAt(0) === "w")) return
        setSelectedP(num())
        const updateBoard = [...clearAv(board)]
        const rank = Math.floor(num() / 8);
        const file = num() % 8;

        if (whTurn) {
            // wh pawn moves two space
            if ((num() > 47) && !updateBoard[rank - 1][file] && !updateBoard[rank - 2][file]) updateBoard[rank - 2][file] = "av"
            // wh pawn moves one space
            if (!updateBoard[rank - 1][file]) updateBoard[rank - 1][file] = "av"
            // available capture
            if (updateBoard[rank - 1][file + 1] === "bp") updateBoard[rank - 1][file + 1] = "bpav"
            if (updateBoard[rank - 1][file - 1] === "bp") updateBoard[rank - 1][file - 1] = "bpav"
            // available en passant
        }

        if (!whTurn) {
            // bl pawn moves two space
            if ((num() < 16) && !updateBoard[rank + 1][file] && !updateBoard[rank + 2][file]) updateBoard[rank + 2][file] = "av"
            // bl pawn moves one space
            if (!updateBoard[rank + 1][file]) updateBoard[rank + 1][file] = "av"
            // available capture
            if (updateBoard[rank + 1][file + 1] === "wp") updateBoard[rank + 1][file + 1] = "wpav"
            if (updateBoard[rank + 1][file - 1] === "wp") updateBoard[rank + 1][file - 1] = "wpav"
            // available en passant
        }
        setBoard(updateBoard)
    }

    const clearAv = boardArr => {
        const updateBoard = [...boardArr]
        return updateBoard.map(r=> r.map(sq => {
            if (sq === "av") return null
            if (sq && sq.substring(2,4) === "av") return sq.substring(0,2)
            return sq
        }))
    }

    const movePiece = (num) => {
        const updateBoard = [...clearAv(board)]
        // get piece name
        const piece = updateBoard[Math.floor(selectedP / 8)][selectedP % 8]
        // set 'from' sq to null
        updateBoard[Math.floor(selectedP / 8)][selectedP % 8] = null
        // set 'to' sq to piece
        updateBoard[Math.floor(num() / 8)][num() % 8] = piece

        // win game 
        if (whTurn && num() < 8) setWinGame('wh')
        if (!whTurn && num() > 55) setWinGame('bl')

        setBoard(updateBoard)
        setWhTurn(!whTurn)
    }

    return (
        <div className="Board">
            {renderBoard()}
        </div>
  );
}

export default Board;
