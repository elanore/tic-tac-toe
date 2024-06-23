import React from "react";
import SquareButton from "./SquareButton";

interface boardProps{
    onClick:(index:number)=>void
}

const Board = ({onClick}:boardProps) => {
  return (
    <div>
      <div>
        <SquareButton onClick={() => onClick(0)} />
        <SquareButton onClick={() => onClick(1)} />
        <SquareButton onClick={() => onClick(2)} />
      </div>
      <div>
        <SquareButton onClick={() => onClick(3)} />
        <SquareButton onClick={() => onClick(4)} />
        <SquareButton onClick={() => onClick(5)} />
      </div>
      <div>
        <SquareButton onClick={() => onClick(6)} />
        <SquareButton onClick={() => onClick(7)} />
        <SquareButton onClick={() => onClick(8)} />
      </div>
    </div>
  );
};

export default Board;
