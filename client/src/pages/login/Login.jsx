import './login.css';
import {useRef, useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import { Context } from '../../context/Context';
import {axiosInstance} from '../../config';

export default function Login() {
    const userRef = useRef()
    const passwordRef = useRef()
    const {dispatch,isFetching} = useContext(Context)
    const [emailError,setEmailError]=useState(false);
    const [passwordError,setPasswordError]=useState(false);
    const handleSubmit = async (e)=>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try {
            const res = await axiosInstance.post("/auth/login",{
                email: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({type:"LOGIN_SUCCESS", payload: res.data})
        } catch (error) {
            if(error.toString().includes("400")){
                setEmailError(true);
                }
                if(error.toString().includes("401")){
                setPasswordError(true);
                }
                
            dispatch({type:"LOGIN_FAILURE"})
        }
    }
    return (
        <div className="login">
            <form className="loginForm" onSubmit={handleSubmit}>
            <span className="loginTitle">Login</span>
                <label className="loginLabel">Email</label>
                <input className="loginInput" ref={userRef} type="email" placeholder="Enter your Email..."></input>
                <label className="loginLabel">Password</label>
                <input className="loginInput" ref={passwordRef} type="password" placeholder="Enter your Password..."></input>
                <button className="formSubmit" type="submit" disabled={isFetching}>Login</button>
            </form>
            <span className="loginLabel loginText">Don't have an account? Register here</span>
            <button className="formSubmit formReg">
                <Link to ="/register" className="link">Register</Link>
            </button>
            { emailError && <span className="errorLabel">Email does not Exist!</span>}
            { passwordError && <span className="errorLabel">Wrong Password!</span>}
        </div>
    )
}
