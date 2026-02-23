import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register =()=>{
    const [name,setname] = useState('');
    const [password,setpassword] =useState('');
    const [error,seterror] =useState('');
    const navigate = useNavigate();

    const handleregister = async(e)=>{
        e.preventDefault();
        try{
            const result = await axios.post(
                "http://localhost:3000/user/register",{
                    name,
                    password,
                });
            alert('Registered Successfully');
            navigate('/login');
        }catch(error){
           seterror(error.response?.data?.message||'registration failed');
        }
    
    }

    return (
        <div className="register-container">
            <h1 className="register-title">Create Account</h1>
            {error && <h1>{error}</h1>}
            <form className="register-form" onSubmit={handleregister}>
              <input type="text" value={name} placeholder="Name" onChange={(e)=>{setname(e.target.value)}}/>
              <input type='password' value={password} placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}/>
              <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Register;