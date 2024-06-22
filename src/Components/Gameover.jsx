export default function Gameover({winnerr,Dr,rematchh}){
    return(
        <div id="game-over">
         <h2>Game Over</h2>
         {winnerr && <p> {winnerr} is winner</p>}
         {!winnerr && <p>Its a Draw</p>}
          <p><button onClick={()=>rematchh()}>Rematch</button></p>
        </div>
    );

}