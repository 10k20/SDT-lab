import React from 'react';
import { Link } from 'react-router-dom';
import './mainMenuAuthorized.scss';

const mainMenuAuthorized = () => (
    <div className='main-menu'>
        <div className='main-menu-wrapper'>
            <Link to='/play' className='react-link'>
                <div className='play menu-item'>
                    <span>Play</span>
                </div>
            </Link>
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
            <Link to='/' className='react-link'>
                <div className='sign-out menu-item'>
                    <span>Sign Out</span>
                </div>
            </Link>
        </div>
    </div>
);

export default mainMenuAuthorized