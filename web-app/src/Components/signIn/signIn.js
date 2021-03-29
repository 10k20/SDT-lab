import React from 'react';
import { Link } from 'react-router-dom';
import './signIn.scss';

const SignIn = () => (
    <div className='sign-in-component'>
        <div className='sign-in-wrapper'>
            <span className="info-requirement">Введите данные для входа </span> 
                <div className="inputs">
                    <div className="login input">
                        <label>Login: </label>
                        <input type="text" className="reg-input" placeholder="Login" required />
                    </div>
                        <div className="password input">
                            <label>Password: </label>
                            <input type="password" className="reg-input" placeholder="Password" autoComplete="current-password" required />
                        </div>
                </div>
                <div className="buttons">
                    <div className="cancel-button">
                        <Link to='/'>
                            <button className="in-button button-not-active">Cancel</button> 
                        </Link>
                    </div>
                    <div className="right-buttons">
                        <div className="back-button">
                            <button className="in-button button-not-active">Back</button> 
                        </div>
                        <div className="signin-button">
                            <button className="in-button">Sign In</button> 
                        </div> 
                    </div>
                </div>
        </div>
    </div>
);

export default SignIn