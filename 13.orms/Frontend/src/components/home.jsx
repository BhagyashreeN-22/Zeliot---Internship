import { useNavigate } from 'react-router-dom';
const Home = ()=>{
    const navigate =useNavigate();
  return (
    <div className='home-container'>
        <h1>To-Do List</h1>
        <button className='login-btn' onClick={()=>navigate('/login')}>Login</button>
        <button className='register-btn' onClick={()=>navigate('/register')}>register</button>
    </div>
  )
}

export default Home;