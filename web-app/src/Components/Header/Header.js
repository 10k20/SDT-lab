import React from 'react';
import './Header.scss';

const Header = () => (
    <header>
        <div className='header-wrapper'>
            <div className='logo'>
                <p>Snake game</p>
            </div>
            <div className='info'>
                <p className='login'>login</p>
                <p className='time'>16:58</p>
            </div>
        </div>
    </header>
);

export default Header