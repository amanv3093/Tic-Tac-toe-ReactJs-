import React,{useState} from "react";
import Square from "./Square";
function Board(){
    let [state,setState]=useState(Array(9).fill(null));
    let [turn,setTurn]=useState(true);
    const checkWinner=()=>{

        const winnerLogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let i of winnerLogic){
            let [a,b,c]=i;
            if(state[a]!=null && state[a]==state[b] && state[a]==state[c]){
                return state[a];

            }
            
        }
        return false;
    }
const isWinner=checkWinner();
const handelClick=(index)=>{
    if(state[index]!=null){
        return;
    }
    let copyState=[...state];
    copyState[index]=turn?"X":"0";
    // copyState[index] = { ...copyState[index], value: turn ? "X" : "O", disable: true };

    setState(copyState);
    setTurn(!turn)
  
};
let reset=()=>{
    setState(Array(9).fill(null))
    setTurn(true);
}
    return(

        <div class="board-container">

        { isWinner?<>{isWinner} Won the game <button onClick={reset}>Play Again</button></>:
        <><div class="board-row">
            <Square onClick={()=>handelClick(0)} value={state[0]}/>
            <Square onClick={()=>handelClick(1)} value={state[1]}/>
            <Square onClick={()=>handelClick(2)} value={state[2]}/>
        </div>
        <div class="board-row">
            <Square onClick={()=>handelClick(3)} value={state[3]}/>
            <Square onClick={()=>handelClick(4)} value={state[4]}/>
            <Square onClick={()=>handelClick(5)}value={state[5]}/>
        </div>
        <div class="board-row">
            <Square onClick={()=>handelClick(6)} value={state[6]}/>
            <Square onClick={()=>handelClick(7)} value={state[7]}/>
            <Square onClick={()=>handelClick(8)} value={state[8]}/>
        </div>
        </>}
        
        </div>

    )

}

export default Board;