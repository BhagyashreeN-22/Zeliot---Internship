import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([]);
  const [err,seterr] =useState(false);
  useEffect(()=>{
    seterr(false);
   axios.get('http://localhost:3000/jokes').
   then((response)=>setjokes(response.data)).catch
   ((err)=>seterr(true));

  },[]);


  return (
    <div>hi frontend
    <h1> Jokes: {jokes.length}</h1>
    {
      jokes.map((joke)=>(
         <div key={joke.id}>
             <h2>{joke.title}</h2>
             <h2>{joke.content}</h2>
        </div>
      ))
    }
         {err && <h3>Failed to load jokes</h3>}
    
    </div>
  )
}

export default App;
