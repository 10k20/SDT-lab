import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import './signIn.scss';

function SignIn() {
    
    const history = useHistory()
    const [usernameLogin, setUsernameLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')
    const [loginDataStatus, setLoginDataStatus] = useState('')

    const login = () => {
        setLoginDataStatus('')
        Axios
            .get(`http://localhost:8000/api/users/?login=${usernameLogin}&password=${passwordLogin}`)
            .then((response) => {
                if (response.data.length !== 0) {
                    setLoginDataStatus('Logged In..')
                    setTimeout(() => history.push('/authorized'), 1000);         
                }
                else {
                    setLoginDataStatus('Login or password are wrong')
                }
            })
    }

    return (
        <div className='sign-in-component'>
            <div className='sign-in-wrapper'>
                <span className="info-requirement">Введите данные для входа </span> 
                    <div className="inputs">
                        <div className="login input">
                            <label>Login: </label>
                            <input 
                                type="text" 
                                className="reg-input" 
                                placeholder="Login" 
                                required 
                                onChange={(e) => {
                                    setUsernameLogin(e.target.value)
                                }}
                            />
                        </div>
                            <div className="password input">
                                <label>Password: </label>
                                <input 
                                type="password" 
                                className="reg-input" 
                                placeholder="Password" 
                                autoComplete="current-password" 
                                required
                                onChange={(e) => {
                                    setPasswordLogin(e.target.value)
                                }} 
                            />
                            </div>
                    </div>
                    <h6 className="sign-in-status">
                        { loginDataStatus }
                    </h6>
                    <div className="no-account">
                        <h6>Don't have accout yet? <Link to="/sign-up">Sign up..</Link></h6>
                    </div>
                    <div className="buttons">
                        <div className="cancel-button">
                            <Link to='/'>
                                <button className="in-button button-not-active">Cancel</button> 
                            </Link>
                        </div>
                        <div className="right-buttons">
                            <div className="signin-button">
                                <button className="in-button" onClick={login}>Sign In</button> 
                            </div> 
                        </div>
                    </div>
            </div>
        </div>
    )
};

export default SignIn