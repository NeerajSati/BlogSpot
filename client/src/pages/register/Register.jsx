import './register.css';
import {Link} from 'react-router-dom';

export default function Register() {
    return (
        <div className="register">
            <form className="registerForm">
            <span className="registerTitle">Register</span>
            <label className="registerLabel">Username</label>
                <input className="registerInput" type="text" placeholder="Enter your Username..."></input>
                <label className="registerLabel">Email</label>
                <input className="registerInput" type="email" placeholder="Enter your Email..."></input>
                <label className="registerLabel">Password</label>
                <input className="registerInput" type="password" placeholder="Enter your Password..."></input>
                <button className="formSubmit">Register</button>
            </form>
            <span className="registerLabel registerText">Already have an account? Login here</span>
            <button className="formSubmit formReg">
            <Link to ="../../login" className="link">Login</Link></button>
        </div>
    )
}
