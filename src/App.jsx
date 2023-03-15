import React, {useState} from 'react'
import './App.css';
import { Board } from './components/Board';

function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  

  const handleBoxClick = (boxIdx) => {
    const updateBoard = board.map((value, idx) =>{
      if(idx === boxIdx){
        return "X";
      }
      else{
        return value;
      }
    })

    setBoard(updateBoard);
  }
  return (
    <div className="App">
      <Board board={board} onClick={handleBoxClick}/>
    </div>
  );
}

export default App;
