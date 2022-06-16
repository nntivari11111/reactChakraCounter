import React from "react";

import { useState } from "react";
import Style from "./Counter.module.css"

const Counter =()=>{
const [count,setCount]=useState(1);
let Dj;
if(count%2===1){
  Dj=Style.main
}
else{
    Dj=Style.last
}

    return (
        <div >
            <h1 className={Dj}>Counter:{count}</h1>
            
            <button onClick={()=>setCount(count+1)} style={{margin:"5px"}}>+</button>
            <button onClick={()=> {if(count>1)setCount(count-1)}}style={{margin:"5px"}}>-</button>
            <button onClick={()=>setCount(count*2)} style={{margin:"5px"}}>Double</button>
        </div>
    )
}

export default Counter;