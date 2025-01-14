import React, { useState } from 'react'
import './Tictactoe.css'

const Tictactoe = () => {

const [board, setBoard] = useState(Array(9).fill(''))
const [move, setMove] = useState('X')

const click=(n)=>{

    const square=[...board]

    if(board[n]!==''){
        alert('Already Clicked')
        return
    }

    square[n]=move
    setBoard(square)
    if(move==='X'){
        setMove('O')
    }else{
        setMove('X')
    }

    if(checkWin(square)){
         if(move==='X'){
            alert("X Winner")
         }
         else{
            alert("O Winner")
         }
       
        square.fill('');
        setBoard(square)
        setMove('X');
    }  
    if(checkDraw(square)){
        alert("Match Draw")
        square.fill('');
        setBoard(square)
        setMove('X');
    }  
    
}

const checkDraw=(board)=>{
    let count=0;
    board.map(element => {
        if(element!==''){
            count++;
        }
    });

    if(count>=9){
        return true;
    }else{
        return false;
    }
}


const checkWin=(board)=>{
        const conditions=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        let flag=false;
        conditions.map(element => {
            if(board[element[0]]!=='' && board[element[1]]!=='' && board[element[2]]!==''){ 
            if(board[element[0]]===board[element[1]] && board[element[1]]===board[element[2]]){
                flag=true;
            }
        }
        });
        return flag;
    }

  return (
    <>
    <h1 className='text-center'>TIC TAC TOE</h1>
    <table>
        <tbody>
            <tr>
                <td onClick={()=>{click(0)}}>{board[0]}</td>
                <td onClick={()=>{click(1)}}>{board[1]}</td>
                <td onClick={()=>{click(2)}}>{board[2]}</td>
            </tr>
            <tr>
                <td onClick={()=>{click(3)}}>{board[3]}</td>
                <td onClick={()=>{click(4)}}>{board[4]}</td>
                <td onClick={()=>{click(5)}}>{board[5]}</td>
            </tr>
            <tr>
                <td onClick={()=>{click(6)}}>{board[6]}</td>
                <td onClick={()=>{click(7)}}>{board[7]}</td>
                <td onClick={()=>{click(8)}}>{board[8]}</td>
            </tr>
        </tbody>
    </table>
    </>
    
  )
}

export default Tictactoe