import './login.css';
import {Link} from 'react-router-dom';

export default function Login() {
    return (
        <div className="login">
            <form className="loginForm">
            <span className="loginTitle">Login</span>
                <label className="loginLabel">Email</label>
                <input className="loginInput" type="email" placeholder="Enter your Email..."></input>
                <label className="loginLabel">Password</label>
                <input className="loginInput" type="password" placeholder="Enter your Password..."></input>
                <button className="formSubmit">Login</button>
            </form>
            <span className="loginLabel loginText">Don't have an account? Register here</span>
            <button className="formSubmit formReg">
                <Link to ="../../register" className="link">Register</Link>
            </button>
        </div>
    )
}
