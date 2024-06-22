import { useState}  from "react";
export default function Players ({player,icon,kk,getnamee}){
    const [x,setx]=useState(player);
    function inputchange(event){
      setx(event.target.value);
    }
    const [k,setk ]= useState(true);
    function Buttonclick(){
      setk(k=>!k);
      {k && getnamee(icon,x)}
    }
    return(
        
         <li className={ kk ?"active":undefined}  >
         <span className="players"> 
         {!k &&  <span className="player-name">{x}</span>}
         {k && 
            <input className="player input" type="text" required value={x} onChange={inputchange}></input>}
            <span className="player-symbol">{icon}</span>
            </span>     
            {!k &&  <button id="players button" onClick={()=>Buttonclick()}>Edit</button>}
            {k &&  <button id="players button" onClick={()=>Buttonclick()}>Save</button>}
        </li>   
    );
}