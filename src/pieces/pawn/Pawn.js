import React from 'react';

// styling 
import './Pawn.css'
import '../../App.css'
// images
import { wpawn, bpawn, avpawn } from '../../images/index.js'

const Pawn = props => {
  const { color } = props
  return (
    <>

      {color === 'av' ? 
        <img className="piece" src={avpawn} alt="capture pawn"/>
          : color === 'wh' ? 
            <img className="piece" src={wpawn} alt="white pawn"/>
              : <img className="piece" src={bpawn} alt="black pawn"/>}
    </>
  );
}

export default Pawn;
