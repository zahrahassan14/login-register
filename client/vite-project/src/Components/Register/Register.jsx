import './Register.scss';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import video from '../../LoginAssets/video1.mp4';
import logo from '../../LoginAssets/logo.png';
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaUserShield } from "react-icons/fa";

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, username, password }),
            });

            if (!response.ok) {
                // Handle non-200 responses
                const data = await response.json();
                setErrorMessage(data.msg || 'Registration failed. Please try again.');
                console.error('Error response:', data);
                return;
            }

            // const data = await response.json();
            // Registration successful, redirect to login page
            navigate('/');
        } catch (error) {
            console.error('Error during registration:', error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className='RegisterPage flex'>
            <div className='container flex'>
                <div className='videoDiv'>
                    <video src={video} autoPlay muted loop></video>

                    <div className='textDiv'>
                        <h2 className='title'>Create And Sell Extraordinary Products</h2>
                        <p>Adopt the peace of nature!</p>
                    </div>

                    <div className='footerDiv flex'>
                        <span className='text'>Have an account?</span>
                        <Link to="/">
                            <button className='btn'>Login</button>
                        </Link>
                    </div>
                </div>

                <div className='formDiv flex'>
                    <div className='headerDiv'>
                        <img src={logo} alt='logo' />
                        <h3>Let Us Know You!</h3>
                    </div>

                    <form className='form grid' onSubmit={handleRegister}>
                        {errorMessage && <span className='showMessage'>{errorMessage}</span>}

                        <div className='inputDiv'>
                            <label htmlFor='email'>Email</label>
                            <div className='input flex'>
                                <HiOutlineMailOpen className='icon' />
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
                            <label htmlFor='username'>Username</label>
                            <div className='input flex'>
                                <FaUserShield className='icon' />
                                <input
                                    type='text'
                                    id='username'
                                    placeholder='Enter Username'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
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
                            <span>Register</span>
                            <AiOutlineSwapRight className='icon' />
                        </button>

                        <span className='forgotPassword'>
                            Forgot your Password? <a href=''>Click Here</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
