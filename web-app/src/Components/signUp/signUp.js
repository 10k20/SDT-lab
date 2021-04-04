import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import './signUp.scss';

function SignUp() {
    const history = useHistory();
    const [loginReg, setLoginReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [requestStatus, setRequestStatus] = useState('')
    const [dataStatus, setDataStatus] = useState('')

    const register = () => {
        setDataStatus('')
        if (passwordReg === '') {
            setDataStatus("Write password")
        }
        else {
            Axios
            .post('http://localhost:8000/api/users/', {
                login: loginReg,
                password: passwordReg,
            })
            .then((response) => {
                
                if (response.status === 201) {
                    setDataStatus('Account created')
                    setTimeout(() => history.push('/'), 1000);
                }
            })
            .catch((error) => {
                if (error.response.status === 400) {
                    setDataStatus('Login already exists')
                }
            })
        }
    }

    return(
        <div className='sign-up-component'>
            <div className='sign-up-wrapper'>
                <span className="info-requirement">Введите данные для регистрации</span> 
                    <div className="inputs">
                        <div className="login input">
                            <label>Login: </label>
                            <input 
                                type="text" 
                                className="reg-input" 
                                placeholder="Login" 
                                required 
                                onChange={(e) => {
                                    setLoginReg(e.target.value)
                                }}
                            />
                        </div>
                            <div className="password input">
                                <label>Password: </label>
                                <input 
                                    type="password" 
                                    className="reg-input" 
                                    placeholder="Password" 
                                    required 
                                    autoComplete="current-password" 
                                    onChange={(e) => {
                                        setPasswordReg(e.target.value)
                                    }}
                                />
                            </div>
                    </div>
                    <h6 className="sign-up-status">
                        { dataStatus }
                    </h6>
                    <div className="buttons">
                        <div className="cancel-button">
                            <Link to='/'>
                                <button className="in-button button-not-active">Cancel</button> 
                            </Link>
                        </div>
                        <div className="right-buttons">
                            <div className="back-button">
                                <Link to='/sign-in'>
                                    <button className="in-button button-not-active">Sign In</button> 
                                </Link>
                            </div>
                            <div className="signin-button">
                                <button className="in-button" onClick={register}>Confirm</button> 
                            </div> 
                        </div>
                    </div>
            </div>
        </div>
    )
};

export default SignUp