import React from 'react';
import { Link } from 'react-router-dom';
import './signUp.scss';

const SignUp = () => (
    <div className='sign-up-component'>
        <div className='sign-up-wrapper'>
            <span className="info-requirement">Введите данные для регистрации</span> 
                <div className="inputs">
                    <div className="login input">
                        <label>Login: </label>
                        <input type="text" className="reg-input" placeholder="Login" required />
                    </div>
                        <div className="password input">
                            <label>Password: </label>
                            <input type="password" className="reg-input" placeholder="Password" required autocomplete="current-password" />
                        </div>
                        <div className="repeat-password input">
                            <label>Password again: </label>
                            <input type="password" className="reg-input" placeholder="Password Again" required autocomplete="current-password" />
                        </div>
                </div>
                <div className="buttons">
                    <div className="cancel-button">
                        <Link to='/'>
                            <button class="in-button button-not-active">Cancel</button> 
                        </Link>
                    </div>
                    <div className="right-buttons">
                        <div className="back-button">
                            <button class="in-button button-not-active">Back</button> 
                        </div>
                        <div className="signin-button">
                            <button class="in-button">Sign In</button> 
                        </div> 
                    </div>
                </div>
        </div>
    </div>
);

export default SignUp