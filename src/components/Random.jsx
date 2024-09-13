import React from 'react'

function random({ min, max }) {
  const randomNumber = Math.floor(Math.random() * (max - min) + 1);
  
  return (
    <div className='greeting'>
      <p>
        Random value between {min} and {max} = {randomNumber}{" "}
      </p>
    </div>
  );
}

export default random;
