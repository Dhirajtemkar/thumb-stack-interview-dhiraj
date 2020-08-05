import React, {useState} from 'react'
import Square from './Square';
import './TicTak.css';

function TicTak() {
    const [stepsTaken, setStepsTaken] = useState(Array(9).fill(null)); // the record of all the steps
    const [playerX, setPlayerX] = useState(true); //whos turn its going to be factor

    const whoWon = (square) => {
        const winList = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        // logic that decides the winner
        for (let i=0;i< winList.length; i++){
            const [a,b,c] = winList[i]
            if(square[a] && square[a]===square[b] && square[b]===square[c]){
                return square[a];
            }
        }
        return null;
    }
    const win = whoWon(stepsTaken);

    const handleClick = index => {
        const steps = [...stepsTaken];

        if(win || steps[index]) return ;
        steps[index] = playerX ? "X" : "O";
        setStepsTaken(steps)
        // setStepNo(stepOn.length)
        setPlayerX(!playerX);
    }

    const renderSquare = i => {
        return <Square value={stepsTaken[i]} onClick={() => handleClick(i)}/>
    }

    let status;
    status = `Next Player: ${playerX ? "X" : "O"}`;
    
    const clearGame = (e) => {
        e.preventDefault();
        setStepsTaken(Array(9).fill(null))
    }

    return (
        <div className="TicTak">
            <h1>Tic-Tac-Toe</h1>

            <div className={`status ${win ? "blinker": " "}`}>{win ? `${win} Won the game!`: status}</div>
            <div className="Board__complete">
                <div className="TicTak__row">{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
                <div className="TicTak__row">{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
                <div className="TicTak__row">{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div> 
            </div>
            <button onClick={clearGame}>New Game</button>
        </div>
        
    )
}

export default TicTak;
