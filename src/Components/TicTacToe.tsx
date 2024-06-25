import React, { useEffect, useState } from "react";
import { setConstantValue } from "typescript";
import { isBuffer } from "util";
import Board from "./Board";

const TicTacToe = () => {
    const [value,setValue] = useState(Array(9).fill(null));
    const [currentPlayer,setCurrentPlayer] =useState("X");
    console.log(value,"value");

    const [winner,setWinner] = useState(null);
    const [isdraw,setIsdraw] =useState(false)

    //win logic
    const checkWin =()=>{
        const winIndex =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,8]
        ]
        for(let i=0;i<winIndex.length;i++){
            const [a,b,c]= winIndex[i];
            if(value[a]===value[b] && value[a]===value[c]){
                return value[a]
            }
        }
        return null
    }


  const handleclick = (index:number) => {
      //console.log(index,"index");
      if(value[index]===null && !winner && !isdraw){

        const updateValue= [...value];
      updateValue[index]=currentPlayer;
      setValue(updateValue);
      setCurrentPlayer(currentPlayer==="X"?"0":"X")
      }

      

  }

  const isboardFull=()=>{
      return value.every((square)=>square!==null)
  }
  useEffect(()=>{
      const newWin = checkWin()
      if(newWin){
          setWinner(newWin)
      }else if(isboardFull()){
          setIsdraw(true)
      }
  })

  const handleGame=()=>{
      setValue(Array(9).fill(null));
      setWinner(null);
      setIsdraw(false);
  }


  return (
    <div>
      <h1>TicTacToe</h1>
      <Board onClick={handleclick} value={value} />
      {winner ? (
        <h1>Winner:{winner}</h1>
      ) : isdraw ? (
        <h1>Match is Draw</h1>
      ) : (
        <h1>Player:{currentPlayer}</h1>
      )}
      
     <button type="button" onClick={handleGame}>Reset Game</button>
    </div>
  );
};

export default TicTacToe;
