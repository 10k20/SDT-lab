import React from 'react';
import './mainMenu.scss';

const MainMenu = () => (
    <div className='main-menu'>
        <div className='main-menu-wrapper'>
            <div className='last-score'>
                <div className='title'>Your last score:</div>
                <div className='score'>23000</div>
            </div>
            <div className='buttons'>
                <button className='records'>Records</button>
                <button className='play'>Play</button>
            </div>
        </div>
    </div>
);

export default MainMenu