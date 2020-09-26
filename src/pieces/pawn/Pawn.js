import React from 'react';

// styling 
import './Pawn.css'
// images
import { wpawn, bpawn, avpawn } from '../../images/index.js'
const Pawn = props => {
  const { color } = props
  return (
    <>

      {color === 'av' ? 
        <img className="fill-c" src={avpawn} alt="capture pawn"/>
          : color === 'wh' ? 
            <img className="fill-c" src={wpawn} alt="white pawn"/>
              : <img className="fill-c " src={bpawn} alt="black pawn"/>}
    </>
  );
}

export default Pawn;
