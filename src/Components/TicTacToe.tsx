import React, { useState } from "react";
import Board from "./Board";

const TicTacToe = () => {
    const [value,setValue] = useState(Array(9).fill(null));
    const [currentPlayer,setCurrentPlayer] =useState("X");
    console.log(value,"value");


  const handleclick = (index:number) => {
      //console.log(index,"index");

      const updateValue= [...value];
      updateValue[index]=currentPlayer;
      setValue(updateValue);
      setCurrentPlayer(currentPlayer==="X"?"O":"X")

  };

  return (
    <div>
      <h1>TicTacToe</h1>
      <Board onClick={handleclick} value ={value} />
    </div>
  );
};

export default TicTacToe;
