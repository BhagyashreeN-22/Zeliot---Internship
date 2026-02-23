import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login=()=>{
    const [name , setname] = useState('');
    const [password,setpassword] = useState('');
    const [error,seterror]=useState('');
    const navigate = useNavigate();
    const handleLogin =async (e)=>{
      e.preventDefault();
      try{
        const result = await axios.post(
            "http://localhost:3000/user/login",
            {
                name,
                password,
            }
        );
        localStorage.setItem('token',result.data.token);
        alert('Login Successful');
        navigate('/profile');

      }catch(error){
           seterror(error.response?.data?.message||'Login failed');
        }
    }
    return(
        <div className="login-container">
          <h1 className="login_title">User Login</h1>
          {error && <h1>{error}</h1>}
          <form className="login-form" onSubmit={handleLogin}>
            <input type='text' value={name} placeholder="Name" onChange={(e)=>{setname(e.target.value)}}/>
            <input type='password' value={password} placeholder='Password' onChange={(e)=>{setpassword(e.target.value)}}/>
            <button type="submit">Submit</button>
          </form>
        </div>
    )
}
export default Login;