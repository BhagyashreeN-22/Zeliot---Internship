import React ,{useState,useEffect} from "react";


const Counter :React.FC = ()=>{
    const [counter,setCounter] = useState<number>(0);

    useEffect(()=>{
        console.log("When comp mounted");

        return function(){
            console.log("when unmounted..this effect runs")
        }
    },[]);

    useEffect(()=>{
        console.log("when counter updates");
    },[counter]);

    const increasefun =()=>{
        setCounter(counter+1);
    }
    const decreasefun =()=>{
        setCounter(counter-1);
    }

  return (
    <div className="counter-container">
       <h1>{counter}</h1>
      <button onClick = {increasefun} name="incr">Increament</button>
      <button onClick = {decreasefun} name="dec">Decreament</button>
    </div>
  )
}

export default Counter;