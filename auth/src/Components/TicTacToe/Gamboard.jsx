import { useEffect, useState } from "react";
import Cell from "./Cells";
import { Button, Grid } from "@mui/material";
import CustomButton from "./CustomButton";
import { styled } from "styled-components";
import X from '../../assets/x.png'
import O from '../../assets/o.png'

const GameBoard = () => {
    const [cells, setCells] = useState(Array(9).fill(null)); // State for storing the values in cells
    const [xIsNext, setXIsNext] = useState(true); // State to track the current player
    const [winner, setWinner] = useState(null); // State to hold the winner
  
    // Function to handle a cell click
    const handleCellClick = (cellIndex) => {
      const cellsCopy = [...cells];
  
      if (cellsCopy[cellIndex] || winner) {
        alert("Cell is Already Selected");
        return;
      }
  
      cellsCopy[cellIndex] = xIsNext ? X : O;
      setCells(cellsCopy);
      setXIsNext(!xIsNext);
    };
  
    // Function to calculate the winner
    const calculateWinner = (squares) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
  
      return null;
    };
  
    // Function to start a new game
    const handleNewGame = () => {
      setCells(Array(9).fill(null));
      setWinner(null);
      setXIsNext(true);
    };
  
    // Function to reset the current game
    const handleResetGame = () => {
      setCells(Array(9).fill(null));
      setWinner(null);
      setXIsNext(true);
    };
  
    // Use useEffect to check for winner or draw scenario after every cell update
    useEffect(() => {
      const winner = calculateWinner(cells);
      const isDraw = cells.every(cell => cell !== null);
  
      if (winner) {
        setWinner(winner);
        alert(`Hurray! Winner is ${winner}`);
        setCells(Array(9).fill(null));
        setWinner(null);
      } else if (isDraw) {
        alert("Game Over! It's a Draw.");
        setCells(Array(9).fill(null));
        setWinner(null);
      }
    }, [cells]);
  
    // Display winner or current player's turn
    let status = winner ? `Winner: ${winner}` : `${xIsNext ? X : O}`;
  
  
    return (
      <div>
        <PlayerTurn>Next Turn: <div><img height="30px" src={status} alt="" /></div></PlayerTurn>
        <Grid container spacing={2} width={'70%'} margin={'auto'}>
          {cells.map((cell, index) => (
            <Cell key={index} cell={cell} onClick={() => handleCellClick(index)} />
          ))}
        </Grid>
        <ButtonDIV>
        <CustomButton  onClick={handleNewGame}>Start New Game</CustomButton>
        <CustomButton  onClick={handleResetGame}>Reset Game</CustomButton>
        <CustomButton  >Undo</CustomButton>
        {/* <CustomButton  >redu </CustomButton> */}

        </ButtonDIV>
      </div>
    );
  };
  
  export default GameBoard;

  const ButtonDIV=styled.div`
    
    display: flex;
    justify-content: space-evenly;
    height: 70px;
    align-items: center;


  `

  const PlayerTurn = styled.div`
    
    font-size: 20px;
     text-align: center;
    padding: 10px;
     background: teal;
    width: 50%;
     color: white;
    border-radius: 5px;
     margin: 15px auto 15px;
     padding: 7px;
     font-family:'Segoe UI';
  `