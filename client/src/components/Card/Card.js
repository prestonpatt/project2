import React from 'react';
import './Card.css';

const Card = ({ 
  onClick, 
  drinkThumb,
  drinkname, id }) => {
  return (
    <div className='card tc dib br3 pa3 ma2 grow bw2 shadow-5' onClick={onClick}> 
      <img alt='cocktail' 
      src={drinkThumb} 
      style={{
        width: 200,
        height: 200
      }}
      />
      <div>
        <h2 className='fw2 dib'>{drinkname}</h2>
        {/* <p className='fw2'>{liquortype}</p> */}
      </div>
    </div>
  );
}

export default Card;