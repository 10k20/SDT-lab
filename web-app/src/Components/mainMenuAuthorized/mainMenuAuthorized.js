import React from 'react';
import { Link } from 'react-router-dom';
import './mainMenuAuthorized.scss';



const mainMenuAuthorized = (props) => {

    const SignOut = () => {
        props.setAuthStatus(false)
        props.setAuthLogin('')
    }

    return(
        <div className='main-menu'>
            <div className='main-menu-wrapper'>
                <Link to='/play' className='react-link'>
                    <div className='play menu-item'>
                        <span>Play</span>
                    </div>
                </Link>
                <Link to='/scores' className='react-link'>
                    <div className='score menu-item'>
                        <span>Scores</span>
                    </div>
                </Link>
                <Link to='/faq' className='react-link'>
                    <div className='faq menu-item'>
                        <span>FAQ</span>
                    </div>
                </Link>
                <div className='react-link' onClick={SignOut}>
                    <div className='sign-out menu-item'>
                        <span>Sign Out</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default mainMenuAuthorized