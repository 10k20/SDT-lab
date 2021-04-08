import React from 'react'
import { useHistory, Redirect } from 'react-router-dom';


function SnakeReloadButton () {
    const history = useHistory()
    let currentPath = window.location.pathname;
    
    function reloadSnake() {
        history.replace('/reload-snake');
        setTimeout(() => {
            history.replace(currentPath)
        }, 0)
    }
    return (
        <button onClick={reloadSnake} className="snake-reload-button button">Play Again</button>
    )
}

export default SnakeReloadButton