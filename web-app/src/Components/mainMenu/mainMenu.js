import React from 'react';
import './mainMenu.scss';

const MainMenu = () => (
    <div className='main-menu'>
        <div className='main-menu-wrapper'>
            <div className='play menu-item'>
                <span>Play</span>
            </div>
            <div className='score menu-item'>
                <span>Scores</span>
            </div>
            <div className='faq menu-item'>
                <span>FAQ</span>
            </div>
            <div className='sign'>
                <div className='sign-up menu-item'>
                    <span>Sign Up</span>
                </div>
                <div className='sign-in menu-item'>
                    <span>Sign In</span>
                </div>
            </div>
        </div>
    </div>
);

export default MainMenu