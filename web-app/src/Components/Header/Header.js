import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header(props) {
    const [,setTime] = useState(Date.now());
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
                        <Link to='/' className='react-link'>
                            <p>Snake game</p>
                        </Link>
                    </div>
                <div className='info'>
                    <p className='login'>{props.authorized ? props.login : 'Guest'}</p>
                    <p className='time'>{('0' + currentDate.getHours()).substr(-2) + ':' + ('0' + currentDate.getMinutes()).substr(-2)}</p>
                </div>
            </div>
        </header>
    );
}



export default Header