import React, {useState} from 'react'
import logo from '../assets/SukiGradient.svg'
import '../assets/LogInPage.css'

function LogInPage(){
    const [rememberMe, setRememberMe] = useState("Remember Me");
    function handleRememberMe(event){
        setRememberMe(event.target.value);
    }
    return(
        
        <div className = "login-form">
            <header className = "header">
                <div className = "part-1">
                    <div className ="camera-button">
                        <div className = "inner-circle">
                            <div className = "dot-circle"></div>
                        </div>
                    </div>
                </div>
                <div className= "part-2">
                    <div className = "rectangle-scroll"></div>
                </div>

                <div className = "part-3">
                    <div></div>
                </div>
            </header>
            <div className = "body">
                <h2>Login</h2>
                <div className = "user-password-field">
                    <i className = "fas fa-camera"></i>

                    <input type = "text" className = "username" placeholder='Username'></input>
                    <input type = "text" className = "password" placeholder='Password'/>
                </div>
                <div className = "remember-forgot-field">
                    <label className="check-box">
                        <input type = "checkbox"  value = "remember-me"
                        checked = {rememberMe === "remember-me"}
                        onChange = {handleRememberMe}
                        />
                        Remember Me ?
                    </label>
                    <label>
                        <a href= "#" className = "forgot-password">Forgot password ?</a>
                    </label>
                </div>
                <div className = "login-register-field">
                    <button className = "login">Login</button>
                    <div>
                        <span>Don't have an account ?</span>
                        <a href = "#" className = "register">Register</a>
                    </div>
                </div>
                <div className = "img-container">
                    <img src = {logo}/>
                </div>
            </div>
        </div>
    );
}

export default LogInPage;