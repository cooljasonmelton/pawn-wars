Piece svgs:
https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces



BOARD KEY:
color: 
b: black
w: white

piece: 
p: pawn
r: rook 
n: knight
i: bishop
q: queen
k: king

capture:
-av: as suffix to piece, capture available
av: space available
ep: en passant

const [board, setBoard] = useState(
    [
        ["br", "bn", "bi", "bq", "bk", "bi", "bn", "br"],
        ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
        ["wr", "wn", "wi", "wq", "wk", "wi", "wn", "wr"]
    ]
)

squares:
white square in bottom right corner