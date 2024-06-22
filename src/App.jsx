import { useState } from "react";
import Players from"./Components/Players.jsx";
import Gameboard from "./Components/GameBoard.jsx";
import Log from "./Components/Log.jsx";
import {WINNING_COMBINATIONS} from "./winner.js"
import Gameover from "./Components/Gameover.jsx"

let winner = null;
let D=false;
const game = [
  [null,null,null],
  [null,null,null],
  [null,null,null]]; 

function helper(turns){//external function
let q= "x";
if(turns.length > 0 && turns[0].psym === "x"){
  q="o"
}
return q;
}


function App() {
  const [name,setname] = useState({x : "player1", y:"player2"});
  const [turns,setturns] = useState([]);

  const p = helper(turns);
  
   function getname(icon,pname){
          setname(prev=>
             ({...prev,[icon]:pname}) 
             // when returning object add() other wise js will { }
             // them as function open and end tags
             //[val;ue] instead value beacause [value] will bring 
             //its stored value(x), value = will only considered as string 
          )}
  function rematch(){
    setturns([]);
    // The game over tab is not closing after resetting the State,
    //tried solving it but didnt work out so added reload page command here.
    window.location.reload();
   }

  function usymbol(rowindex, symbolindex) {   
    
    setturns((prevTurns)=>{
      const w= helper(prevTurns);
     const updatedTurns =  [{ row: rowindex, col: symbolindex, psym:w }, ...prevTurns];
     return updatedTurns;
    });
   
  }
  const gameboardd = [...game.map((t)=>[...t])]
  for(const turn of turns){
    const {row,col,psym} = turn
    gameboardd[row][col]=psym;
  }

   for(const comb of WINNING_COMBINATIONS ){
    const firstboxsymbol = gameboardd[comb[0].row][comb[0].column];
    const secondboxsymbol = gameboardd[comb[1].row][comb[1].column];
    const thirdboxsymbol = gameboardd[comb[2].row][comb[2].column];
    if(firstboxsymbol && firstboxsymbol == secondboxsymbol && firstboxsymbol && thirdboxsymbol ){
       winner = name[firstboxsymbol];
    }  
   }

   

    if(turns.length >9 && !winner){
      D= true
    }
 
  return (
    <>
    {/* {winner && <p>{winner} is winner!!</p>} */}
    
    <div id="game-container">
      <ol id="players" className="highlight-player">
      {/* state 1 used */}
      <Players player="jaiyanth" icon="x" kk={p==="x"} getnamee={getname}/>
      <Players player="" icon="o" kk={p==="o"} getnamee={getname}/>
      </ol>
      {(winner || D) && <Gameover winnerr={winner}  rematchh={rematch}/>}
      <Gameboard fun={usymbol} board = {gameboardd}/>
      
    </div>
    <ul id="log">
    <Log pturns={turns}/>
    </ul>
    </>
  )
}

export default App