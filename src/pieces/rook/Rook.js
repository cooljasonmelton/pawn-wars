import React from 'react';

// styling 
import '../../App.css'

// images
import { wrook, brook, avpawn } from '../../images/index.js'

const Rook = props => {
  const { color } = props

  return (
    <>
      {color === 'av' ? 
        <img className="piece" src={avpawn} alt="capture rook"/>
          : color === 'wh' ? 
            <img className="piece" src={wrook} alt="white rook"/>
              : <img className="piece" src={brook} alt="black rook"/>}
    </>
  );
}

export default Rook;

