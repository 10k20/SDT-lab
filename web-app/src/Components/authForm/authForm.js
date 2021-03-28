import React from 'react';
import './authForm.scss';

const Auth = () => (
    <div className='Auth'>
        <div className='auth-wrapper'>
            <span className="info-requirement">Введите данные для регистрации</span> 
                <div className="inputs">
                    <div className="login input">
                        <label>Login: </label>
                        <input type="text" className="reg-input" placeholder="Login" required />
                    </div>
                        <div className="password input">
                            <label>Password: </label>
                            <input type="text" className="reg-input" placeholder="Password" required />
                        </div>
                        <div className="repeat-password input">
                            <label>Password again: </label>
                            <input type="text" className="reg-input" placeholder="Password Again" required />
                        </div>
                </div>
                <div className="buttons">
                    <div className="cancel-button">
                        <button class="in-button button-not-active">Cancel</button> 
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
export default Auth