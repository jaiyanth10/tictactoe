
export default function log(props){
return(
props.pturns.map((turn)=><li key={`${turn.row}${turn.col}`} >{turn.pysm} selected {turn.row},{turn.col}</li>) 
);
}
