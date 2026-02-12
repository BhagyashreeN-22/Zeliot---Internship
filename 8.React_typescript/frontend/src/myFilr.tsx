import React, {useState} from "react";
import Todo from './components/Todo/index.tsx'
import Counter from './components/counter/counter.tsx';

const items = [
  {
    id: 1,
    title: "a"
  },
  {
    id: 2,
    title: "b"
  }
];


const MyCounter : React.FC =()=>{
  const [toggle,settoggle] =useState(true);

  return(
    <div>
      <Todo items={items}/>
      <button onClick={()=>settoggle(!toggle)}>Toggle</button>
      {
         toggle? <Counter/>:""
      }
    </div>
  );
};
export default MyCounter;