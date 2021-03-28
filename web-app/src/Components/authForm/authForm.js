import React from 'react';
import './authForm.scss';

const Auth = () => (
    <div className='Auth'>
        <div className='auth-wrapper'>
            <span className="info-requirement">Введите данные для регистрации</span> 
                <div className="inputs">
                    
                    <div className="nick">
                        <label>Имя пользователя: </label>
                        <input type="text" className="reg-input" placeholder="nickname" required />
                    </div>
                        <br/>
                        <div className="first-password">
                            <label>Пароль: </label>
                            <input type="text" className="reg-input" placeholder="password" required />
                        </div>
                        <br/>
                        <div className="second-password">
                            <label>Повторите пароль: </label>
                            <input type="text" className="reg-input" placeholder="password" required />
                        </div>
                </div>
                <br/>
                <div className="buttons">
                    <div className="cancel-button">
                        <button class="in-button">Cancel</button> 
                    </div>
                    <div className="back-button">
                        <button class="in-button">Back</button> 
                    </div>
                    <div className="signin-button">
                        <button class="in-button">Sign-in</button> 
                    </div> 
                </div>
        </div>
    </div>
);
export default Auth