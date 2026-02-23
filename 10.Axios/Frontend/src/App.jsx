import { useState ,useEffect} from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [product, setproduct] = useState([]);
  const [error,seterror] = useState(false);
  const [load,setload] = useState(false);
  const [search,setsearch] = useState("");
  useEffect(()=>{
  if (!search || search.trim() === "") {
      return;  
   }
   ;try {
    (async ()=>{
      setload(true);
      seterror(false);
     const response = await axios.get('/products?search='+search);
     console.log(response.data);
     setproduct(response.data);
     setload(false);
    })()
    } catch (error) {
     seterror(true);
    }
  },[search]);

  return (
    <div>
      <h1>Hii frontend</h1>
      <input type='text' placeholder='Search' value={search} onChange={(e)=>setsearch(e.target.value)} ></input>
      <h1>Number of products:{product.length}</h1>
      {load && <h1>Loading.....</h1>}
      {error && <h1>Error</h1>}
    </div>
  )
}

export default App;
