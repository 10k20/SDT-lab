import React, { useState, useEffect } from 'react';
import './Header.scss';

function Header() {
    const [time, setTime] = useState(Date.now());
    var currentDate = new Date();
    useEffect(() => {
      const interval = setInterval(() => setTime(Date.now()), 5000);

      return () => {
        clearInterval(interval);
      };
    }, []);
    return (
        <header>
            <div className='header-wrapper'>
                <div className='logo'>
                    <p>Snake game</p>
                </div>
                <div className='info'>
                    <p className='login'>login</p>
                    <p className='time'>{currentDate.getHours() + ':' + currentDate.getMinutes()}</p>
                </div>
            </div>
        </header>
    );
}



export default Header