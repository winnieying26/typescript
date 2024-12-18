import React from 'react'
import Square from './Square'
import { useState } from 'react'

const Board = (props) => {
 const defaultSquares =()=> (new Array(0)).fill(null);

    const [squares, setSquares] = useState(defaultSquares())
  return (
   <div className="board" {...props}>
    <h1>Tic Tac Toe</h1>
     {squares.map(square=> <Square />)}
   </div>
  )
}

export default Board
