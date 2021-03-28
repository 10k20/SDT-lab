import React from 'react';
import './finalTab.scss';

const FinalTab = () => (
    <div className='final-tab'>
        <div className='final-tab-wrapper'>
            <div className='last-score'>
                <div className='title'>Your score:</div>
                <div className='score'>23000</div>
            </div>
            <div className='buttons'>
                <button className='records button-not-active'>Records</button>
                <button className='play'>Play Again</button>
            </div>
        </div>
    </div>
);

export default FinalTab