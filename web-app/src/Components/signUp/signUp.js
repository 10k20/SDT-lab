import React, { Component, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import './signUp.scss';
import { setAuthLogin } from '../../Store/Actions';

const SignUp = (props) => {
    console.log(props)
    const history = useHistory();
    const [dataStatus, setDataStatus] = useState('')

    const register = (event) => {
        event.preventDefault();
        let loginReg = event.target.elements.login.value
        let passwordReg = event.target.elements.password.value
        Axios
        .post('http://localhost:8000/api/users/', {
            login: loginReg,
            password: passwordReg,
        })
        .then((response) => {
            if (response.status === 201) {
                setDataStatus('Account created')
                props.setAuthLogin(loginReg)
                props.setAuthStatus(true)
                history.push('/')
            }
        })
        .catch((error) => {
            if (error.response.status === 400) {
                setDataStatus('Login already exists')
            }
        })
    }
    
    return(
        <div className='sign-up-component'>
            <form className='sign-up-wrapper' onSubmit={register}>
                <span className="info-requirement">Введите данные для регистрации</span> 
                    <div className="inputs">
                        <div className="login input">
                            <label>Login: </label>
                            <input 
                                type="text" 
                                className="reg-input" 
                                name="login"
                                placeholder="Login" 
                                required
                                autoComplete="username"
                            />
                        </div>
                            <div className="password input">
                                <label>Password: </label>
                                <input 
                                    type="password" 
                                    name="password"
                                    className="reg-input" 
                                    placeholder="Password" 
                                    required 
                                    autoComplete="new-password" 
                                />
                            </div>
                    </div>
                    <h6 className="sign-up-status">
                        { dataStatus }
                    </h6>
                    <div className="buttons">
                        <div className="cancel-button">
                            <Link to='/'>
                                <button className="in-button button button-not-active">Cancel</button> 
                            </Link>
                        </div>
                        <div className="right-buttons">
                            <div className="back-button">
                                <Link to='/sign-in'>
                                    <button className="in-button button button-not-active">Sign In</button> 
                                </Link>
                            </div>
                            <div className="signin-button">
                                <input type="submit" className="in-button button" value="Sign Up"/>
                            </div> 
                        </div>
                    </div>
            </form>
        </div>
    )
};

export default SignUp