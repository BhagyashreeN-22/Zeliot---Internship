import './App.css'
import Block from './components/block.tsx'
import { useState } from 'react'

function App() {

  const [val, setVal] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');

  const handleTurn = (index: number) => {

    if (val[index] !== null) return;

    const valcopy = [...val];
    valcopy[index] = turn;

    if (checkwin(valcopy)) {
      alert(`${turn} Wins!`);
      
    } else {
      setTurn(turn === 'X' ? 'O' : 'X');
    }

    setVal(valcopy);
  };

  const checkwin = (board: any) => {

    const winPatterns = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for (let i = 0; i < winPatterns.length; i++) {
      const [a, b, c] = winPatterns[i];

      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return true;
      }
    }

    return false;
  };


  return (
    <div className='block'>
      <div className='row'>
        <Block onClick={()=>handleTurn(0)} value={val[0]}/>
        <Block onClick={()=>handleTurn(1)} value={val[1]}/> 
        <Block onClick={()=>handleTurn(2)} value={val[2]}/>
      </div>
      <div className='row'>
        <Block onClick={()=>handleTurn(3)} value={val[3]}/>
        <Block onClick={()=>handleTurn(4)} value={val[4]}/>
        <Block onClick={()=>handleTurn(5)} value={val[5]}/>
      </div>
      <div className='row'>
        <Block onClick={()=>handleTurn(6)} value={val[6]}/>
        <Block onClick={()=>handleTurn(7)} value={val[7]}/>
        <Block onClick={()=>handleTurn(8)} value={val[8]}/>
      </div>

    </div>
  )
}

export default App
