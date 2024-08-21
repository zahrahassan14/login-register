import './Login.scss';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import video from '../../LoginAssets/video1.mp4';
import logo from '../../LoginAssets/logo.png';
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const today = new Date();
        const formattedDate = `${(today.getMonth() + 1).toString().padStart(2, '0')}${today.getDate().toString().padStart(2, '0')}${today.getFullYear()}`;
        const combinedPassword = `${password}${formattedDate}`;

        console.log('Sending login request with password:', combinedPassword); // Debugging log

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password: combinedPassword }),
            });

            const data = await response.json();
            console.log('Login response:', data); // Debugging log

            if (response.ok) {
                localStorage.setItem('token', data.token);
                navigate('/dashboard');
            } else {
                setErrorMessage(data.msg || 'Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };


    return (
        <div className='loginPage flex'>
            <div className='container flex'>
                <div className='videoDiv'>
                    <video src={video} autoPlay muted loop></video>

                    <div className='textDiv'>
                        <h2 className='title'>Create And Sell Extraordinary Products</h2>
                        <p>Adopt the peace of nature!</p>
                    </div>

                    <div className='footerDiv flex'>
                        <span className='text'>Don t have an account?</span>
                        <Link to="/register">
                            <button className='btn'>SignUp</button>
                        </Link>
                    </div>
                </div>

                <div className='formDiv flex'>
                    <div className='headerDiv'>
                        <img src={logo} alt='logo' />
                        <h3>Welcome Back!</h3>
                    </div>

                    <form className='form grid' onSubmit={handleLogin}>
                        {errorMessage && <span className='showMessage'>{errorMessage}</span>}

                        <div className='inputDiv'>
                            <label htmlFor='email'>Email</label>
                            <div className='input flex'>
                                <FaUserShield className='icon' />
                                <input
                                    type='email'
                                    id='email'
                                    placeholder='Enter Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='inputDiv'>
                            <label htmlFor='password'>Password</label>
                            <div className='input flex'>
                                <BsFillShieldLockFill className='icon' />
                                <input
                                    type='password'
                                    id='password'
                                    placeholder='Enter Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <button type='submit' className='btn flex'>
                            <span>Login</span>
                            <AiOutlineSwapRight className='icon' />
                        </button>

                        {/* <a href='/dashboard'>Dashboard</a> */}

                        <span className='forgotPassword'>
                            Forgot your Password? <a href=''>Click Here</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
