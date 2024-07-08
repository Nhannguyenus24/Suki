import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/SukiWhite.svg';
import '../assets/SignUpPage.css';

function SignUpForm() {
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setPasswordMatch(false);
            return;
        }

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = {
            username: formData.get('username'),
            dob: formData.get('dob'),
            email: formData.get('email'),
            password: password,
            rememberMe: rememberMe
        };
        console.log(data)
        console.log('User name:', data.username);
        console.log('Date of birth:', data.dob);
        console.log('Email:', data.email);
        console.log('Password:', data.password);
        console.log('Remember Me:', data.rememberMe);
        try {
            const response = await axios.post('http://localhost:3000/sign-up', data);
            navigate('/');
        } catch (error) {
            console.error('Error during sign-up:', error);
        }
    };

    const handleRememberMe = (event) => {
        setRememberMe(event.target.checked);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordMatch(true); // Reset password match status on change
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordMatch(true); // Reset password match status on change
    };

    return (
        <form className="sign-up-form" onSubmit={handleSubmit}>
            <header className="header">
                {/* Header content */}
            </header>
            <div className="body">
                <h2>Create Account</h2>
                <div className="user-password-field">
                    <input type="text" id="username" name="username" className="username" placeholder="Username" />
                    <input type="date" id="dob" name="dob" className="dob" placeholder="Date of Birth" />
                    <input type="text" id="email" name="email" className="email" placeholder="Email" />
                    <div>
                        <input id="password" name="password" className="password" placeholder="Password" type="password" onChange={handlePasswordChange} />
                    </div>
                    <div>
                        <input id="confirmPassword" name="confirmPassword" className="password" placeholder="Confirm Password" type="password" onChange={handleConfirmPasswordChange} />
                     </div>
                    {!passwordMatch && <p className="error-text">Passwords do not match!</p>}
                </div>
                <div className="remember-forgot-field">
                    <label className="check-box">
                        <input type="checkbox" value="remember-me" checked={rememberMe} onChange={handleRememberMe} />
                        Remember Me ?
                    </label>
                </div>
                <div className="sign-up-register-field">
                    <button className="sign-up" type="submit" name="submit">Sign Up</button>
                    <div>
                        <span>Don't have an account?</span>
                        <a href="#" className="register">Register</a>
                    </div>
                </div>
                <div className="img-container">
                    <img src={logo} alt="Logo" />
                </div>
            </div>
        </form>
    );
}

export default SignUpForm;
