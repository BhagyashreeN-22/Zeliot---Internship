import React from "react";
import './block.css'
interface blockValue{
    value?:string | null,
    onClick? : ()=>void
}
const Block :React.FC<blockValue>=(props)=>{
    return (
        <div onClick={props.onClick} className="block"> 
          {props.value}
        </div>
    )
}

export default Block;