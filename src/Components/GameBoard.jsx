
export default function Gameboard (props){
   

//      const [inigameboard,setinigameboard]= useState(game);  
// function Ugameboard(rowindex,symbolindex){
//   const updgameboard = [...inigameboard.map((innervalue)=>[...innervalue])];
 
//   if (updgameboard[rowindex][symbolindex] === null){
//     props.fun();
//     updgameboard[rowindex][symbolindex]=props.sym;
//   }
//   else{
//     undefined; 
//   }
//   return( 
//     setinigameboard(
//       updgameboard)
//   ); 
// }


    return(
      <ol id="game-board">
       {props.board.map((row,rowindex)=><li key={rowindex}>
        <ol>
         {row.map((symbol,symbolindex)=><li key={symbolindex}>
            <button onClick={()=>props.fun(rowindex,symbolindex)}disabled = {symbol !== null} >{symbol}</button>
             </li>)}
        </ol>
       </li>)}
      </ol>
    );
}