import React from 'react'
import { useState } from 'react';
import "./character.css";

export const Character = ({ character }) => {
  const [rotated, setRotated] = useState(false);
  return (
    <div>
      <img
        className={rotated ? 'rotated' : 'normal'}
        src={character.image}
        alt={character.name}
        onClick={() => setRotated(!rotated)}
      />
    </div>
  )
}

export default Character;
