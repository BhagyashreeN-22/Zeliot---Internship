import { Routes, Route, useParams,NavLink} from "react-router-dom"
import { useEffect,useState } from "react"

const Home = () => {
  const [posts,setposts] = useState([]);
  useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((res)=>res.json())
    .then((res)=>setposts(res));
  },[]);

  return (<div className="post-container">
    {
      posts.map((post)=>{
       return <li><NavLink to={`post/${post.id}`} >{post.title}</NavLink> </li>
      })
    }
  </div>
  )
}

const About = () => {
  const params =useParams();
  return (<div>
    <h1>HI Welcome {params.name}</h1>
  </div>
  )
}

const PostPrint= ()=>{
  const [post,setpost] = useState(null);
  const param = useParams();
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos/${param.id}`)
    .then((res)=>res.json())
    .then((res)=>setpost(res));
  },[param.id])

   if (!post) {
    return <h2>Loading...</h2>;
  }
  
   return (
    <div>
      <h2>{post.title}</h2>
      <p>ID: {post.id}</p>
      <p>Status: {post.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/:name" element={<About />} />
      <Route  path="/post/:id" element = {<PostPrint/>} />
    </Routes>
  )
}

export default App
