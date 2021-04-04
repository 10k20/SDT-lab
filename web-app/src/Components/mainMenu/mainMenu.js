import React from 'react';
import { Link } from 'react-router-dom';
import './mainMenu.scss';

const MainMenu = () => (
    <div className='main-menu'>
        <div className='main-menu-wrapper'>
            <div className='play menu-item disabled'>
                <span>Play</span>
            </div>
            <Link to='/' className='react-link'>
                <div className='score menu-item'>
                    <span>Scores</span>
                </div>
            </Link>
            <Link to='/faq' className='react-link'>
                <div className='faq menu-item'>
                    <span>FAQ</span>
                </div>
            </Link>
            <div className='sign'>
                <Link to='/sign-up' className='react-link'>
                    <div className='sign-up menu-item'>
                        <span>Sign Up</span>
                    </div>
                </Link>
                <Link to='/sign-in' className='react-link'>
                    <div className='sign-in menu-item'>
                        <span>Sign In</span>
                    </div>
                </Link>
            </div>
        </div>
    </div>
);

export default MainMenu