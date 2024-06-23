import React from "react";
import Board from "./Board";

const TicTacToe = () => {
  const handleclick = (index:number) => {
      console.log(index,"index");
  };

  return (
    <div>
      <h1>TicTacToe</h1>
      <Board onClick={handleclick} />
    </div>
  );
};

export default TicTacToe;
