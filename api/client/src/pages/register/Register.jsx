import './register.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {axiosInstance} from '../../config';
export default function Register() {
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [emailError,setEmailError]=useState(false);
    const [nameError,setNameError]=useState(false);

    const handleSubmit= async(e)=>{
        e.preventDefault();
        setNameError(false);
        setEmailError(false);
        try {
            const res = await axiosInstance.post('/auth/register',{
                username,
                email,
                password
            });
            console.log(res.data)
                res.data && window.location.replace("/login");
        } catch (error) {
            if(error.toString().includes("500")){
            setNameError(true);
            }
            if(error.toString().includes("501")){
            setEmailError(true);
            }
        }
    }
    return (
        <div className="register">
            <form className="registerForm" onSubmit={handleSubmit}>
                <span className="registerTitle">Register</span>
                <label className="registerLabel">Username</label>
                <input className="registerInput" type="text" placeholder="Enter your Username..."
                onChange={(e)=> setUsername(e.target.value)}></input>
                <label className="registerLabel">Email</label>
                <input className="registerInput" type="email" placeholder="Enter your Email..."
                onChange={(e)=> setEmail(e.target.value)}></input>
                <label className="registerLabel">Password</label>
                <input className="registerInput" type="password" placeholder="Enter your Password..."
                onChange={(e)=> setPassword(e.target.value)}></input>
                <button className="formSubmit">Register</button>
            </form>
            <span className="registerLabel registerText">Already have an account? Login here</span>
            <button className="formSubmit formReg">
            <Link to ="../../login" className="link">Login</Link></button>
            { emailError && <span className="errorLabel">Email Already Exists!</span>}
            { nameError && <span className="errorLabel">UserName Already Exists!</span>}
        </div>
    )
}
