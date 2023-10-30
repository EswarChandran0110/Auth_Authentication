import React from 'react'
import '../Components/TicTacToe/Tictac.css'
import GameBoard from '../Components/TicTacToe/Gamboard'
import '../Components/TicTacToe/Tictac.css'
import Title from '../Components/TicTacToe/Title'
function TicTacPage() {
  return (
    <div className='Main'>
      <div className='SubMain'>
        <Title />
        <GameBoard />
      </div>

    </div>
  )
}

export default TicTacPage