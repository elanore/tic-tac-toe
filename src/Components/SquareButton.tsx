import React from 'react';

type squareProps={
    onClick:()=>void
}

const SquareButton = ({onClick}:squareProps) => {
  return (
    <button type="button" onClick={onClick}>
        X
    </button>
  )
}

export default SquareButton

