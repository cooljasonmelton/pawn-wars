# pawn wars
<img src="https://github.com/cooljasonmelton/pawn-wars/blob/master/pawn-wars-demo.gif?raw=true" width="50%" alt="demo" /> 

### about
Pawn Wars is a chess variant that helps people learn how chess pieces move without the needing to understand the more complicated aspects of the game. The first player to move a pawn to the other end of the board wins. 

As players get comfortable with how the pawns move, more pieces can be added so players can learn how those pieces move as well (this will be available in later versions of the app).

### deployed demo
<a href="https://hopeful-jepsen-712859.netlify.app/" target="_blank"> Click here</a>

### built with
- React.js

### installation
clone repo
```
git clone git@github.com:cooljasonmelton/pawn-wars.git
```
open directory, install and start 
```
npm install
npm start
```

### contact author
- Jason Melton
- jason.melton2@gmail.com

### coming soon

- option to add other pieces: rook, bishop, knight, queen king
- visual diagrams to show how pieces move in instuctions box
- option to turn off available move markers
- option to turn on check and checkmate

<!-- pseudo code

- full game turn 
- if king is in check, find only possible moves for king
- if king is in check and other piece clicked, let user know check

- encapsulate functionality of each piece
e.g.
each piece uses 3 functions: e.g.
1 selectPawn: show available to-squares 
2 if available square clicked, remove available to-squares and send info to movePawn
3 movePawn (board, to-square, from-square, enPassant?)
update board so piece is on to-square, deleted from from-square
if enpassant, pawn is removed from EP square 
if check, save for next turn 

Testing 
-->
